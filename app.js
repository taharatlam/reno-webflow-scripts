// === REFACTOR: Make animation work after tab change also ===

// Wrap main animation logic into a function we can re-invoke
function setupTabPanesAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Kill all ScrollTriggers and timelines to avoid duplication/re-entrancy
  ScrollTrigger.getAll().forEach(st => st.kill());
  // Optionally kill all active timelines (defensive)
  if (window._gsapTabTimelines) {
    window._gsapTabTimelines.forEach(tl => tl.kill());
  }
  window._gsapTabTimelines = [];

  // 1. SETUP SCOPED ANIMATIONS
  const tabPanes = gsap.utils.toArray(".w-tab-pane");
  tabPanes.forEach((pane, index) => {
    const q = gsap.utils.selector(pane);

    if (!q(".tab-section_fixed_height").length && !q("[el-sticky]").length) return;

    /* ----------------------------------
      PART A: IMAGINE ANIMATION (FIXED HEIGHT/PINNED)
    ---------------------------------- */
    if (q(".tab-section_fixed_height").length) {
      // --- INITIAL STATES ---
      gsap.set(q(".tab_imagine_content_wrapper.is-02, .tab_imagine_content_wrapper.is-03"), {
        yPercent: 100, opacity: 0
      });

      gsap.set(
        q(".re-imagine_image-1, .re-imagine_image-2, .re-imagine_image-3, .tab_imagine_content_wrapper.is-01"),
        {
          scale: 1,
          opacity: 1,
          yPercent: 0
        }
      );
      gsap.set(q(".re-imagine_image-4, .re-imagine_image-5, .re-imagine_image-6, .re-imagine_image-7, .re-imagine_image-8, .re-imagine_image-9, .re-imagine_image-10, .re-imagine_image-11"), {
        scale: 0, opacity: 0
      });
      gsap.set(".mobile-app-container .mobile_mockup_image", {
        clearProps: "transform",
        yPercent: -150,
        opacity: 0
      });
      gsap.set(".mobile-app-container .mobile_mocup_content", {
        yPercent: 150,
        opacity: 0
      });

      const mainTL = gsap.timeline({
        scrollTrigger: {
          trigger: q(".tab-section_fixed_height"),
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        }
      });
      window._gsapTabTimelines.push(mainTL);

      const batch2StartTime = 3.0;
      const batch3StartTime = 6.0;

      const durationPerTransition = 1.0;
      const staggerDuration = 0.5;

      // --- BATCH 1: OUT ONLY ---
      mainTL.to(
        q(".tab_imagine_content_wrapper.is-01"),
        {
          yPercent: -100,
          opacity: 0,
          ease: "power2.in",
          duration: durationPerTransition
        },
        0.5
      );

      mainTL.to(
        q(".re-imagine_image-1, .re-imagine_image-2, .re-imagine_image-3"),
        {
          scale: 3.5,
          opacity: 0,
          filter: "blur(20px)",
          stagger: 0.15,
          ease: "power2.in",
          duration: durationPerTransition
        },
        1.5
      );

      // --- BATCH 2 ---
      mainTL
        .fromTo(
          q(".tab_imagine_content_wrapper.is-02"),
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, ease: "power2.out", duration: durationPerTransition },
          batch2StartTime
        )
        .fromTo(
          q(".re-imagine_image-4, .re-imagine_image-5, .re-imagine_image-6, .re-imagine_image-7"),
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.15,
            ease: "power2.out",
            duration: durationPerTransition
          },
          batch2StartTime + staggerDuration
        )
        .to(
          q(".tab_imagine_content_wrapper.is-02"),
          {
            yPercent: -100,
            opacity: 0,
            ease: "power2.in",
            duration: durationPerTransition
          },
          batch2StartTime + 2.0
        )
        .to(
          q(".re-imagine_image-4, .re-imagine_image-5, .re-imagine_image-6, .re-imagine_image-7"),
          {
            scale: 3.5,
            opacity: 0,
            filter: "blur(20px)",
            stagger: 0.1,
            ease: "power2.in",
            duration: durationPerTransition
          },
          batch2StartTime + 2.2
        );

      // --- BATCH 3 ---
      mainTL
        .fromTo(
          q(".tab_imagine_content_wrapper.is-03"),
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            ease: "power2.out",
            duration: durationPerTransition
          },
          batch3StartTime
        )
        .fromTo(
          q(".re-imagine_image-8, .re-imagine_image-9, .re-imagine_image-10, .re-imagine_image-11"),
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.15,
            ease: "power2.out",
            duration: durationPerTransition
          },
          batch3StartTime + staggerDuration
        )
        .to(q(".tab_imagine_content_wrapper.is-03"), {
          yPercent: -100,
          opacity: 0,
          duration: durationPerTransition,
          ease: "power2.inOut"
        }, batch3StartTime + 2.2)
        .to(
          q(".re-imagine_image-8, .re-imagine_image-9, .re-imagine_image-10, .re-imagine_image-11"),
          {
            scale: 3.5,
            opacity: 0,
            filter: "blur(20px)",
            stagger: 0.1,
            ease: "power2.in",
            duration: durationPerTransition
          },
          batch3StartTime + 2.2
        );

      // Parallax (UNCHANGED)
      q(".re-imagine_image-wrap img").forEach((img, i) => {
        const parallaxTL = gsap.to(img, {
          y: () => ((i % 3) * 0.3) * 100,
          scrollTrigger: {
            trigger: q(".tab-section_fixed_height"),
            start: "top top", end: "bottom top", scrub: true
          }
        });
        window._gsapTabTimelines.push(parallaxTL);
      });

      const imgTL = gsap.to(".mobile-app-container .mobile_mockup_image", {
        yPercent:0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
      });
      window._gsapTabTimelines.push(imgTL);
      const contentTL = gsap.to(".mobile-app-container .mobile_mocup_content", {
        yPercent:0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
      }, "-=0.5");
      window._gsapTabTimelines.push(contentTL);

    }

    // tab animation
    const tabMenu = q(".w-tab-menu");
    const tabSpaceDiv = q(".tab-space-div");
    TabAnimation(tabMenu, tabSpaceDiv);

    // partner track animation
    PartnerTrackAnimation(q);

    /* ----------------------------------
      PART B: STICKY ANIMATION (UNCHANGED)
    ---------------------------------- */
    if (q("[el-sticky]").length) {
      const leftItems = q(".tabs_flexbox_left");
      const centerItems = q(".tabs_flex_right_center_img");
      const bgItems = q(".tabs_flex_img");
      const triggers = q("[el-trigger]");

      gsap.set(leftItems, { zIndex: 50, autoAlpha: 0, yPercent: 100 });
      gsap.set(centerItems, { zIndex: 50, autoAlpha: 0, yPercent: 100 });
      gsap.set(bgItems, { zIndex: 1, autoAlpha: 0, scale: 1.5 });

      if (leftItems[0]) {
        gsap.set(leftItems[0], { autoAlpha: 1, yPercent: 0 });
        gsap.set(centerItems[0], { autoAlpha: 1, yPercent: 0 });
        gsap.set(bgItems[0], { autoAlpha: 1, scale: 1, zIndex: 2 });
      }

      triggers.forEach((trigger, i) => {
        let next = i + 1;
        if (!leftItems[next]) return;

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: trigger,
            start: "top bottom",
            end: "top top",
            scrub: 0.5,
          }
        });
        window._gsapTabTimelines.push(tl);

        tl.to([leftItems[i], centerItems[i]], {
          yPercent: -100,
          autoAlpha: 0,
          duration: 1,
          ease: "power2.inOut"
        })
          .to([leftItems[next], centerItems[next]], {
            yPercent: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.inOut"
          }, "<")
          .fromTo(
            bgItems[next],
            { scale: 1.5, autoAlpha: 0, zIndex: next + 5 },
            { scale: 1, autoAlpha: 1, duration: 1, ease: "power2.out" },
            "<"
          );
      });

      // Sticky Pinning
      const pinST = ScrollTrigger.create({
        trigger: q("[el-sticky]"),
        start: "top top",
        end: () => "+=" + (triggers.reduce((acc, t) => acc + t.offsetHeight, 0)),
        pin: true,
        pinSpacing: false,
        anticipatePin: 1
      });
      window._gsapTabTimelines.push(pinST);
    }
  });
}

// Initial run on DOMContentLoaded
document.addEventListener("DOMContentLoaded", setupTabPanesAnimations);

/* ----------------------------------
  2. SAFE REFRESH LOGIC (UNCHANGED and crucial)
---------------------------------- */
const tabLinks = document.querySelectorAll(".w-tab-link");

tabLinks.forEach(tab => {
  tab.addEventListener("click", () => {
    // Small delay to ensure Webflow's tab transition is complete before GSAP measures
    setTimeout(() => {
      setupTabPanesAnimations();   // <--- Re-invoke ALL animations on tab change!
      ScrollTrigger.refresh();
    }, 500); // Changed to 500ms for safety
  });
});

// Note: TabAnimation and PartnerTrackAnimation definitions unchanged from original
function TabAnimation(tabMenu, tabSpaceDiv) {
  gsap.registerPlugin(ScrollTrigger);
  const tabTl = gsap.timeline({
    scrollTrigger: {
      trigger: tabSpaceDiv,
      start: "top bottom",
      end: "200% bottom",
      scrub: 0.5,
      markers: true,
    }
  });

  tabTl.to(tabMenu, {
    left: "50%",
    xPercent: -50,
    duration: 2,
    ease: "power2.inOut",
  });
  tabTl.to(tabMenu, {
    bottom: "50%",
    yPercent: -50,
    duration: 1,
    ease: "power2.inOut",
  });
  tabTl.to(tabMenu, {
    scale: 1.3,
    duration: 1,
    ease: "power2.inOut",
  });
  tabTl.to({}, { duration: 1.5 });
  tabTl.to(tabMenu, {
    bottom: "5%",
    yPercent: 0,
    duration: 1,
    ease: "power2.inOut",
  });
  tabTl.to(tabMenu, {
    scale: 1,
    duration: 1,
    ease: "power2.inOut",
  }, "-=0.5");
};

function PartnerTrackAnimation(q) {
  setTimeout(() => {
    if (typeof gsap === "undefined") {
      console.error("GSAP or Flip plugin not loaded properly");
      return;
    }

    const partnerTrack = q("[data-partner-track]");
    if (!partnerTrack) return;

    const cards = partnerTrack.querySelectorAll("img.partner-img");
    const stickySec = partnerTrack.querySelector(".partners_sticky ");
    const ghostLogo = partnerTrack.querySelector(".ghost-logo ");
    const colLogo = partnerTrack.querySelector(".color-logo ");

    const partnerText = partnerTrack.querySelector(".partner-text");
    const partnerRLogo = partnerTrack.querySelector(".partner-reno-logo-container");

    const colorLogoContainer = partnerTrack.querySelector(".partner-r-container");
    const colorLogoImg = partnerTrack.querySelector(".one_place-image");
    const colorLogoContent = partnerTrack.querySelector(".color-logo-content");

    const sectionRect = stickySec.getBoundingClientRect();
    const centerX = sectionRect.width / 2;
    const centerY = sectionRect.height / 1.5;

    const getXandY = (img) => {
      const rect = img.getBoundingClientRect();

      const imgCenterX = rect.left + rect.width / 2 - sectionRect.left;
      const imgCenterY = rect.top + rect.height / 2 - sectionRect.top;

      return { moveX: centerX - imgCenterX, moveY: centerY - imgCenterY };
    };

    const CardAnimation = (img) => {
      return {
        x: getXandY(img).moveX,
        y: getXandY(img).moveY,
        opacity: 1,
        scale: 1,
        duration: 2,
      };
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: partnerTrack,
        start: "700px 80%",
        end: "bottom bottom",
        scrub: 2,
        markers: false,
      },
    });

    const emptyTimeline = () => {
      tl.to(colLogo, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const timelineRender = (cardIndex, prcnt) => {
      tl.to(cards[cardIndex], CardAnimation(cards[cardIndex]));
      tl.to(
        cards[cardIndex],
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      );

      tl.to(
        colLogo,
        {
          clipPath: `inset(0% ${prcnt}% 0% 0%)`,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.4"
      );
    };

    timelineRender(4, 80);
    timelineRender(2, 60);
    timelineRender(3, 50);
    timelineRender(1, 40);
    timelineRender(5, 30);
    timelineRender(0, 0);

    tl.to(partnerText, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    })
    tl.to(partnerRLogo, {
      yPercent: -100,
      scale: 1.2,
      duration: 0.5,
      ease: "power2.out",
    })
    tl.to(partnerRLogo, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.2")

    tl.to(colorLogoImg, {
      opacity: 1,
      scale: 1.5,
      transformOrigin: "bottom center",
    })
    tl.to(colorLogoContent, {
      opacity: 1,
      yPercent: 0,
      duration: 0.5,
      ease: "power2.out",
    })

  }, 10);
}