function CareerSecAnimation() {
  document.addEventListener("DOMContentLoaded", function () {
    // Small delay to ensure GSAP is fully loaded
    setTimeout(() => {
      if (typeof gsap === "undefined" || typeof Flip === "undefined") {
        console.error("GSAP or Flip plugin not loaded properly");
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const wrapper = document.querySelector(".career-revolving-text-wrapper");
      const textContainer = document.querySelector(".career-revolving-text");
      const words = textContainer.querySelectorAll(".inner-span-text");

      const lineHeight = wrapper.offsetHeight;

      // Set initial positions
      gsap.set(words, {
        y: lineHeight,
        opacity: 0,
      });

      let tl = gsap.timeline({ repeat: -1 });

      words.forEach((word) => {
        tl.to(word, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        }).to(word, {
          y: -lineHeight,
          opacity: 0,
          duration: 0.6,
          ease: "power3.in",
          delay: 1, // visible pause
        });
      });
    }, 10);
  });
}
CareerSecAnimation();

function PartnerTrackAnimation() {
  setTimeout(() => {
    if (typeof gsap === "undefined") {
      console.error("GSAP or Flip plugin not loaded properly");
      return;
    }

    const partnerTrack = document.querySelector("[data-partner-track]");
    if (!partnerTrack) return;

    const cards = partnerTrack.querySelectorAll("img.partner-img");
    const stickySec = partnerTrack.querySelector(".partners_sticky ");
    const ghostLogo = partnerTrack.querySelector(".ghost-logo ");
    const colLogo = partnerTrack.querySelector(".color-logo ");

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
        stagger: 0.1,
      };
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: partnerTrack,
        start: "700px 80%",
        end: "bottom bottom",
        scrub: 2,
        markers: true,
      },
    });

    tl.to(cards[0], CardAnimation(cards[0]));
    tl.to(
      cards[0],
      CardAnimation(cards[0]),
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.2"
    );

    tl.to(colLogo, {
      clipPath: "inset(0% 90% 0% 0%)",
      duration: 1,
      ease: "power2.out",
    });

    tl.to(cards[1], CardAnimation(cards[1]));
    tl.to(
      cards[1],
      CardAnimation(cards[1]),
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.2"
    );

    tl.to(colLogo, {
      clipPath: "inset(0% 70% 0% 0%)",
      duration: 1,
      ease: "power2.out",
    });

    tl.to(cards[2], CardAnimation(cards[2]));
    tl.to(
      cards[2],
      CardAnimation(cards[2]),
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.2"
    );

    tl.to(colLogo, {
      clipPath: "inset(0% 50% 0% 0%)",
      duration: 1,
      ease: "power2.out",
    });

    tl.to(cards[3], CardAnimation(cards[3]));
    tl.to(
      cards[3],
      CardAnimation(cards[3]),
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.2"
    );

    tl.to(colLogo, {
      clipPath: "inset(0% 40% 0% 0%)",
      duration: 1,
      ease: "power2.out",
    });

    tl.to(cards[4], CardAnimation(cards[4]));
    tl.to(
      cards[4],
      CardAnimation(cards[4]),
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.2"
    );

    tl.to(colLogo, {
      clipPath: "inset(0% 20% 0% 0%)",
      duration: 1,
      ease: "power2.out",
    });

    tl.to(cards[5], CardAnimation(cards[5]));
    tl.to(
      cards[5],
      CardAnimation(cards[5]),
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.2"
    );

    tl.to(colLogo, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1,
      ease: "power2.out",
    });
  }, 10);
}
PartnerTrackAnimation();

function pCarouselSwiper() {
  const slider = document.querySelector("[data-portfolio-slider]");
  if (!slider) return;

  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: slider.querySelector(".swiper-button-next"),
      prevEl: slider.querySelector(".swiper-button-prev"),
    },
    pagination: {
      el: slider.querySelector(".swiper-pagination"),
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
}
pCarouselSwiper();

console.log("running 1");
