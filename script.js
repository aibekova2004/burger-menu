const burgerMenu = document.querySelector(".burger-menu")
const navMenu = document.querySelector(".header-nav")
const burgerItems = document.querySelectorAll(".burger-item")



burgerMenu.addEventListener("click",() => {
    if (!burgerMenu.classList.contains("active")) {
        burgerMenu.classList.add("active")
        navMenu.style.transform = "translateX(0)"
        burgerItems[0].style.transform = "rotate(45deg) translateY(15px)"
        burgerItems[1].style.opacity = "0"
        burgerItems[2].style.transform = "rotate(-45deg) translateY(-20px)"
    } else {
        burgerMenu.classList.remove("active")
        navMenu.style.transform = "translateX(100%)"
        burgerItems[0].style.transform = ""
        burgerItems[1].style.opacity = ""
        burgerItems[2].style.transform = ""
    }
})



const modalWindow = document.querySelector("#modal")
const btn = document.querySelector(".open-btn")
const close = document.querySelector(".close-btn")
const blurWindow = document.querySelector(".blur-window")

function closeModal() {
    modalWindow.classList.remove("active")
    modalWindow.style.transform = ""
    btn.innerHTML = "open modal"
    blurWindow.style.display = ""
}

btn.addEventListener("click", () => {
    if (modalWindow.classList.contains("active"))  {
        closeModal()
    } else {
        modalWindow.classList.add("active")
        modalWindow.style.transform = "scale(1)"
        btn.innerHTML = "close"
        blurWindow.style.display = "block"
    }
})

close.addEventListener("click", () => closeModal())
window.addEventListener("click", (e) => {
    if (!e.target.classList.contains("modal") && !e.target.classList.contains("open-btn")) {
        closeModal()

    }

})























