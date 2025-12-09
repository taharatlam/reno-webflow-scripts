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
  const partnerTrack = document.querySelector("[data-partner-track]");
  if (!partnerTrack) return;

  const cards = partnerTrack.querySelectorAll("img.partner-img");
  const stickySec = partnerTrack.querySelector(".partners_sticky ");

  const sectionRect = stickySec.getBoundingClientRect();
  const centerX = sectionRect.width / 2;
  const centerY = sectionRect.height / 2.5;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: partnerTrack,
      start: "700px 80%",
      end: "bottom bottom",
      scrub: 3,
      markers: true,
    },
  });

  cards.forEach((img) => {
    const rect = img.getBoundingClientRect();

    // Card center relative to section
    const imgCenterX = rect.left + rect.width / 2 - sectionRect.left;
    const imgCenterY = rect.top + rect.height / 2 - sectionRect.top;

    const moveX = centerX - imgCenterX;
    const moveY = centerY - imgCenterY;

    tl.to(
      img,
      {
        x: moveX,
        y: moveY,
        opacity: 1,
        scale: 1,
        ease: "power3.out",
      },
      0 // ✅ animate all together
    );
  });
}

PartnerTrackAnimation();
