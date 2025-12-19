var menubar = document.getElementById("menu")
var sidebar = document.getElementById("side")
var close = document.getElementById("close")
var sidelinks = document.querySelectorAll(".side-link")
var form = document.getElementById("contactform")
var reveals = document.querySelectorAll(".reveal")
var searchOpen = document.getElementById("search-open")
var searchClose = document.getElementById("search-close")
var searchOverlay = document.getElementById("search-overlay")

menubar.addEventListener("click", function () {
    sidebar.style.top = "0px"
})

close.addEventListener("click", function () {
    sidebar.style.top = "-200px"
})

sidelinks.forEach(function (link) {
    link.addEventListener("click", function () {
        sidebar.style.top = "-200px"
    })
})

form.addEventListener("submit", function (event) {
    event.preventDefault()

    var inputs = form.querySelectorAll("input")
    var textarea = form.querySelector("textarea")

    var isVaild = true

    inputs.forEach(function(input) {
        if(input.value.trim() === "") {
            isVaild = false
        }
    })

    if (textarea.value.trim() === "") {
        isVaild = false
    }

    if (isVaild) {
        alert("Message Send Successfully")
        form.reset()
    }
})

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("active")
        }
    })
})

reveals.forEach(function (el) {
    observer.observe(el)
})

searchOpen.addEventListener("click", function () {
    searchOverlay.classList.add("active");
})

searchClose.addEventListener("click", function () {
    searchOverlay.classList.remove("active");
})