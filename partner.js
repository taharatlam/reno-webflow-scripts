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
          duration: 3,
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
        "-=0.2"
      );
    };

    timelineRender(4, 80);
    timelineRender(2, 60);
    timelineRender(3, 70);
    timelineRender(1, 50);
    timelineRender(0, 30);
    timelineRender(5, 0);
  }, 10);
}
PartnerTrackAnimation();

function pCarouselSwiper() {
  const slider = document.querySelector("[data-portfolio-slider]");
  if (!slider) return;

  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 16,
    centeredSlides: true,
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
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 2.7,
        spaceBetween: 0,
      },
    },
  });
}
pCarouselSwiper();

console.log("running 3");
