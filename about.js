document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  /* ----------------------------------
     INITIAL STATES
  ---------------------------------- */

  // Hide text batches except first
  gsap.set(
    [
      ".tab_imagine_content_wrapper.is-02",
      ".tab_imagine_content_wrapper.is-03",
      ".tab_imagine_content_wrapper.is-04",
    ],
    {
      yPercent: 100,
      opacity: 0,
    }
  );

  // Hide all images except batch 1 (images 1–3)
  gsap.set(
    [
      ".re-imagine_image-5",
      ".re-imagine_image-6",
      ".re-imagine_image-7",
      ".re-imagine_image-8",
      ".re-imagine_image-9",
      ".re-imagine_image-10",
      ".re-imagine_image-11",
      ".re-imagine_image-12",
      ".re-imagine_image-13",
      ".re-imagine_image-14",
      ".re-imagine_image-15",
      ".re-imagine_image-16",
      ".re-imagine_image-17",
    ],
    {
      scale: 0,
      opacity: 0,
    }
  );

  /* ----------------------------------
     MASTER TIMELINE
  ---------------------------------- */

  const STEP = 1;

  const mainTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".tab-section_fixed_height",
      start: "top top",
      end: "bottom bottom",
      //end: "+=420%",
      scrub: 0.8,
      pin: false,
      anticipatePin: 1,
    },
  });

  /* ----------------------------------
     BATCH 1 – Images 1–3 + Text 1 OUT
  ---------------------------------- */

  mainTL.to(
    [
      ".re-imagine_image-1",
      ".re-imagine_image-2",
      ".re-imagine_image-3",
      ".re-imagine_image-4",
    ],
    {
      scale: 3,
      opacity: 0,
      filter: "blur(14px)",
      stagger: 0.12,
      duration: 0.8,
      ease: "power2.in",
    },
    0
  );

  mainTL.to(
    ".re-person-img-1",
    {
      yPercent: 10,
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
    },
    0
  );

  mainTL.to(
    ".tab_imagine_content_wrapper.is-01",
    {
      yPercent: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
    },
    0
  );

  /* ----------------------------------
     BATCH 2 – Images 5–8 + Text 2
  ---------------------------------- */

  mainTL.to(
    [
      ".re-imagine_image-5",
      ".re-imagine_image-6",
      ".re-imagine_image-7",
      ".re-imagine_image-8",
    ],
    {
      scale: 1,
      opacity: 1,
      stagger: 0.18,
      duration: 1,
      ease: "power2.out",
    },
    STEP
  );

  mainTL.to(
    ".re-person-img-2",
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.in",
    },
    STEP
  );

  mainTL.to(
    ".tab_imagine_content_wrapper.is-02",
    {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    },
    STEP
  );

  mainTL.to(
    [
      ".re-imagine_image-5",
      ".re-imagine_image-6",
      ".re-imagine_image-7",
      ".re-imagine_image-8",
    ],
    {
      scale: 3,
      opacity: 0,
      filter: "blur(14px)",
      stagger: 0.12,
      duration: 0.8,
      ease: "power2.in",
    },
    STEP * 2
  );

  mainTL.to(
    ".re-person-img-2",
    {
      yPercent: 0,
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
    },
    STEP * 2
  );

  mainTL.to(
    ".tab_imagine_content_wrapper.is-02",
    {
      yPercent: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
    },
    STEP * 2
  );

  /* ----------------------------------
     BATCH 3 – Images 4, 9–13 (5 images) + Text 3
  ---------------------------------- */

  mainTL.to(
    [
      ".re-imagine_image-9",
      ".re-imagine_image-10",
      ".re-imagine_image-11",
      ".re-imagine_image-12",
      ".re-imagine_image-13",
    ],
    {
      scale: 1,
      opacity: 1,
      stagger: 0.18,
      duration: 1,
      ease: "power2.out",
    },
    STEP * 3
  );

  mainTL.to(
    ".re-person-img-3",
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.in",
    },
    STEP * 3
  );

  mainTL.to(
    ".tab_imagine_content_wrapper.is-03",
    {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    },
    STEP * 3
  );

  mainTL.to(
    [
      ".re-imagine_image-9",
      ".re-imagine_image-10",
      ".re-imagine_image-11",
      ".re-imagine_image-12",
      ".re-imagine_image-13",
    ],
    {
      scale: 3,
      opacity: 0,
      filter: "blur(14px)",
      stagger: 0.12,
      duration: 0.8,
      ease: "power2.in",
    },
    STEP * 4
  );

  mainTL.to(
    ".re-person-img-3",
    {
      yPercent: 0,
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
    },
    STEP * 4
  );

  mainTL.to(
    ".tab_imagine_content_wrapper.is-03",
    {
      yPercent: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
    },
    STEP * 4
  );

  /* ----------------------------------
     BATCH 4 – Images 13–16 + Text 4
  ---------------------------------- */

  mainTL.to(
    [
      ".re-imagine_image-14",
      ".re-imagine_image-15",
      ".re-imagine_image-16",
      ".re-imagine_image-17",
    ],
    {
      scale: 1,
      opacity: 1,
      stagger: 0.18,
      duration: 1,
      ease: "power2.out",
    },
    STEP * 5
  );

  mainTL.to(
    ".re-person-img-4",
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.in",
    },
    STEP * 5
  );

  mainTL.to(
    ".re-person-img-4",
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.in",
    },
    STEP * 5
  );

  mainTL.to(
    ".tab_imagine_content_wrapper.is-04",
    {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    },
    STEP * 5
  );

  /* ----------------------------------
     SUBTLE PARALLAX (SAFE)
  ---------------------------------- */

  gsap.utils.toArray(".re-imagine_image-wrap img").forEach((img, i) => {
    gsap.to(img, {
      y: (i % 3) * 50,
      ease: "none",
      scrollTrigger: {
        trigger: ".tab-section_fixed_height",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  aboutTextSecAnimation();
});

function aboutTextSecAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  const aboutTextSec = document.querySelector(".multi-text-track");
  const aboutTextSecSlides = aboutTextSec.querySelectorAll(".multi-text-slide");

  // Set only the .multi-text-slide-bg of non-first slides to opacity 0 (not the whole slide)
  gsap.utils
    .toArray(".multi-text-slide:not(:first-child) .multi-text-slide-bg")
    .forEach((bg) => {
      gsap.set(bg, {
        opacity: 0,
      });
    });

  // Set only the text subhead/head (not the whole slide) of non-first slides to opacity 0
  gsap.utils
    .toArray(
      ".multi-text-slide:not(:first-child) .multi-text-slide-subhead, .multi-text-slide:not(:first-child) .multi-text-slide-head"
    )
    .forEach((el) => {
      gsap.set(el, {
        opacity: 0,
      });
    });

  // For the last .multi-text-slide, set .multi-text-slide-reno img and .multi-text-slide-para to opacity 0
  const lastSlide = aboutTextSecSlides[aboutTextSecSlides.length - 1];
  if (lastSlide) {
    const imgReno = lastSlide.querySelector(".multi-text-slide-reno");
    if (imgReno) {
      gsap.set(imgReno, { opacity: 0 });
    }
    const para = lastSlide.querySelector(".multi-text-slide-para");
    if (para) {
      gsap.set(para, { opacity: 0 });
    }
  }

  const aboutTextSecTl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutTextSec,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });

  aboutTextSecSlides.forEach((slide, i) => {
    const bg = slide.querySelector(".multi-text-slide-bg");
    const subHeading = slide.querySelector(".multi-text-slide-subhead");
    const heading = slide.querySelector(".multi-text-slide-head");

    // Fade in bg image (but never fade out)
    if (bg) {
      aboutTextSecTl.to(bg, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    // Fade in texts
    aboutTextSecTl.to(subHeading, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    aboutTextSecTl.to(
      heading,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Fade out texts (but NOT bg or whole slide) except for the last one
    if (i < aboutTextSecSlides.length - 1) {
      aboutTextSecTl.to([subHeading, heading], {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    }

    // Fade in reno img and para
    if (i === aboutTextSecSlides.length - 1) {
      aboutTextSecTl.to(imgReno, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      aboutTextSecTl.to(para, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      aboutTextSecTl.to(
        para,
        {
          scale: 10,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=0.3"
      );
      aboutTextSecTl.to(
        imgReno,
        {
          scale: 10,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }

    // The last slide stays visible (no fade out for bg or text)
  });
}
