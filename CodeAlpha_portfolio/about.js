// ===============================
// Fade In Animation
// ===============================

const sections = document.querySelectorAll(
  ".about-heading, .about-container, .skills"
);

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((section) => {
  fadeObserver.observe(section);
});

// ===============================
// Skills Progress Bar Animation
// ===============================

const skillsSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress-bar");

const skillsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        progressBars.forEach((bar) => {
          bar.style.width = bar.dataset.width;
        });

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.4,
  }
);

skillsObserver.observe(skillsSection);

const elements = document.querySelectorAll(
    ".resume-heading, .resume-title, .resume-item"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

elements.forEach((element) => {
    observer.observe(element);
});