import $ from "jquery";
function smoothScroll(element, duration) {
    $("html, body").animate(
        {
            scrollTop: $(element.hash).offset().top,
        },
        duration)
}
$("#about-me-link").on("click", function (event) {
    event.preventDefault();
    smoothScroll(this, 800)
});
$("#skills-link").on("click", function (event) {
    event.preventDefault();
    smoothScroll(this, 1000)
});
$("#project-link").on("click", function (event) {
    event.preventDefault();
    smoothScroll(this, 1200)
});
$("#contact-link").on("click", function (event) {
    event.preventDefault();
    smoothScroll(this, 1400)
});
/////////////////////
const reference = document.querySelector(".reference")
const nav = document.querySelector("nav")
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav.className = "nav-normal-mode"
        } else {
            nav.className = "nav-scrolling-mode"
        }
    })
})
observer.observe(reference)
/////////////////////////////////////////////
const projects = document.querySelectorAll(".project")

const projectsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-project")
            entry.target.classList.remove("hidden-1")
        }
    })
})
projects.forEach(project => {
    projectsObserver.observe(project)
})

const skillCards = document.querySelectorAll(".skill-card")
skillCards.forEach(card => {
    projectsObserver.observe(card)
})