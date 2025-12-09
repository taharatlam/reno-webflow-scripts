function CareerAccordionAnimation() {
  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".v-tabs_accordion_item");

    items.forEach((item) => {
      const header = item.querySelector(".v-tabs_accordion_header");
      const body = item.querySelector(".v-tabs_accordion_body");

      // Initial state
      if (item.classList.contains("is-opened")) {
        gsap.set(body, { height: "auto" });
      } else {
        gsap.set(body, { height: 0 });
      }

      header.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-opened");

        // Close all others
        items.forEach((other) => {
          if (other !== item) {
            other.classList.remove("is-opened");
            gsap.to(other.querySelector(".v-tabs_accordion_body"), {
              maxHeight: 0,
              duration: 0.4,
              ease: "power2.inOut",
            });
          }
        });

        // Toggle current
        if (!isOpen) {
          item.classList.add("is-opened");
          gsap.to(body, {
            maxHeight: "1000px",
            duration: 0.5,
            ease: "power2.out",
          });
        } else {
          item.classList.remove("is-opened");
          gsap.to(body, {
            maxHeight: 0,
            duration: 0.4,
            ease: "power2.inOut",
          });
        }
      });
    });
  });
}

function CareerSecAnimation() {
  document.addEventListener("DOMContentLoaded", function () {
    // Small delay to ensure GSAP is fully loaded
    setTimeout(() => {
      if (typeof gsap === "undefined" || typeof Flip === "undefined") {
        console.error("GSAP or Flip plugin not loaded properly");
        return;
      }

      console.log("career start running 12...");

      gsap.registerPlugin(ScrollTrigger);

      const wrapper = document.querySelector(".career-revolving-text-wrapper");
      const textContainer = document.querySelector(".career-revolving-text");
      const words = textContainer.querySelectorAll("span");

      const lineHeight = wrapper.offsetHeight;

      console.log("lineHeight", lineHeight);

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

CareerAccordionAnimation();
