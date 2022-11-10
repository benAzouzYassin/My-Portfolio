import $ from "./_snowpack/pkg/jquery.js";
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
const reference = document.querySelector(".reference")//reference for starting the navbar animation
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

const animationObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-animation")
            entry.target.classList.remove("hidden-1")
        }
    })
})
////////////////////////projects animation////////////////////////////////
const projects = document.querySelectorAll(".project")
projects.forEach(project => {
    animationObserver.observe(project)
})
///////////////////////skill cards animation///////////////////////////
const skillCards = document.querySelectorAll(".skill-card")
skillCards.forEach(card => {
    animationObserver.observe(card)
})
//////////////////////contacts cards animation///////////////////////
const contacts = document.querySelectorAll(".contact")
contacts.forEach(contact => {
    animationObserver.observe(contact)
})
/////////////////////////////////////////////////////////////////
const htmlCard = document.querySelector(".html")
htmlCard.onclick = () => {
    window.open("https://developer.mozilla.org/en-US/docs/Web/HTML", "_blank")
}
const cssCard = document.querySelector(".css")
cssCard.onclick = () => {
    window.open("https://developer.mozilla.org/en-US/docs/Web/CSS", "_blank")
}
const jsCard = document.querySelector(".js")
jsCard.onclick = () => {
    window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "_blank")
}
const reactCard = document.querySelector(".react")
reactCard.onclick = () => {
    window.open("https://en.wikipedia.org/wiki/React_(JavaScript_library)", "_blank")
}
const pythonCard = document.querySelector(".python")
pythonCard.onclick = () => {
    window.open("https://en.wikipedia.org/wiki/Python_(programming_language)", "_blank")
}


///////////////////////////////////////

const navOpener = document.querySelector("#navOpen")
navOpener.onclick = () => {
    document.getElementById("sidenav").style.width = "250px";

}
const navCloser = document.querySelector(".closebtn")
navCloser.onclick = () => {
    document.getElementById("sidenav").style.width = "0";
}