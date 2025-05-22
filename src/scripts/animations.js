// Animation utilities
document.addEventListener("DOMContentLoaded", () => {
  // Initialize intersection observer for animation triggers
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            // Unobserve after triggering animation to improve performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Offset trigger point slightly above viewport bottom
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
  };

  // Initialize staggered animations
  const staggerAnimations = () => {
    const staggerGroups = document.querySelectorAll("[data-stagger-group]");

    staggerGroups.forEach((group) => {
      const staggerItems = group.querySelectorAll("[data-stagger-item]");
      const staggerDelay = group.getAttribute("data-stagger-delay") || 100;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            staggerItems.forEach((item, index) => {
              setTimeout(
                () => {
                  item.classList.add("animate");
                },
                index * parseInt(staggerDelay),
              );
            });
            // Unobserve after triggering animation
            observer.unobserve(group);
          }
        },
        { threshold: 0.1 },
      );

      observer.observe(group);
    });
  };

  // Initialize counter animations
  const animateCounters = () => {
    const counters = document.querySelectorAll(".counter-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const countTo = parseInt(target.getAttribute("data-count-to"));
            const duration =
              parseInt(target.getAttribute("data-duration")) || 2000;
            const start = 0;
            const increment = countTo > 100 ? 1 : 0.1;

            let currentCount = start;
            const counter = setInterval(
              () => {
                currentCount += increment;
                if (currentCount >= countTo) {
                  target.textContent =
                    countTo + (target.getAttribute("data-suffix") || "");
                  clearInterval(counter);
                } else {
                  target.textContent =
                    Math.floor(currentCount) +
                    (target.getAttribute("data-suffix") || "");
                }
              },
              duration / (countTo / increment),
            );

            // Unobserve after triggering animation
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.5 },
    );

    counters.forEach((counter) => {
      observer.observe(counter);
    });
  };

  // Initialize parallax scrolling effect
  const initParallax = () => {
    const parallaxElements = document.querySelectorAll(".parallax");

    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset;

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-parallax-speed") || 0.2;
        const offset = scrollTop * speed;
        element.style.transform = `translateY(${offset}px)`;
      });
    });
  };

  // Initialize all animations
  animateOnScroll();
  staggerAnimations();
  animateCounters();
  initParallax();
});
