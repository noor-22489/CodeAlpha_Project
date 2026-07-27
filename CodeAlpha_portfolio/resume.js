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