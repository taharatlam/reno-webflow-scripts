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
