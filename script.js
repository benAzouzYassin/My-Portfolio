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
let reference = document.querySelector(".reference")
let nav = document.querySelector("nav")
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
let projects = document.querySelectorAll(".project")
console.log(projects)