// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
})

// Navigation Toggle
const navToggle = document.querySelector(".nav-toggle")
const navList = document.querySelector(".nav__list")
const navLinks = document.querySelectorAll(".nav__link")

navToggle.addEventListener("click", () => {
  navList.classList.toggle("active")
  navToggle.classList.toggle("active")
  navToggle.setAttribute("aria-expanded", navList.classList.contains("active"))
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove("active")
    navToggle.classList.remove("active")
    navToggle.setAttribute("aria-expanded", "false")
  }
})

// Close mobile menu when clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active")
    navToggle.classList.remove("active")
    navToggle.setAttribute("aria-expanded", "false")
  })
})

// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle")
const body = document.body

function toggleTheme() {
  body.classList.toggle("light-theme")
  const isLight = body.classList.contains("light-theme")
  localStorage.setItem("theme", isLight ? "light" : "dark")
  themeToggle.querySelector("i").className = `fas fa-${isLight ? "moon" : "sun"}`
}

// Initialize theme from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark"
  if (savedTheme === "light") {
    body.classList.add("light-theme")
    themeToggle.querySelector("i").className = "fas fa-moon"
  }
})

themeToggle.addEventListener("click", toggleTheme)

// Typing Animation
function startTypingAnimation() {
  const target = document.getElementById("typing-animation")
  const texts = ["Data Analyst", "Programmer", "Pokémon Maniac", "AI Enthusiast"]
  let textIndex = 0
  let charIndex = 0
  let isDeleting = false

  function type() {
    const currentText = texts[textIndex]
    if (isDeleting) {
      target.textContent = currentText.substring(0, charIndex - 1)
      charIndex--
    } else {
      target.textContent = currentText.substring(0, charIndex + 1)
      charIndex++
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true
      setTimeout(type, 1500)
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      textIndex = (textIndex + 1) % texts.length
      setTimeout(type, 500)
    } else {
      setTimeout(type, isDeleting ? 50 : 100)
    }
  }

  type()
}

// Start typing animation when the page loads
document.addEventListener("DOMContentLoaded", startTypingAnimation)

// Smooth scrolling for anchor links
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target)
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime = null

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  function ease(t, b, c, d) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  requestAnimationFrame(animation)
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = this.getAttribute("href")
    smoothScroll(target, 1000)
  })
})

// Navbar background change on scroll
function updateNavbar() {
  const header = document.querySelector(".header")
  const scrollPosition = window.scrollY

  if (scrollPosition > 50) {
    header.style.backgroundColor = "rgba(10, 25, 47, 0.95)"
  } else {
    header.style.backgroundColor = "rgba(10, 25, 47, 0.85)"
  }
}

window.addEventListener("scroll", updateNavbar)

// Add hover effect to service cards
const serviceCards = document.querySelectorAll(".service-card")
serviceCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)"
  })
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)"
  })
})

// Parallax effect for intro section
window.addEventListener("scroll", () => {
  const introSection = document.querySelector(".intro")
  const scrollPosition = window.pageYOffset
  introSection.style.backgroundPositionY = scrollPosition * 0.5 + "px"
})

// Intersection Observer for fade-in animations
const fadeElems = document.querySelectorAll(".fade-in")
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
}

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add("appear")
      appearOnScroll.unobserve(entry.target)
    }
  })
}, appearOptions)

fadeElems.forEach((elem) => {
  appearOnScroll.observe(elem)
})

// // Custom cursor
// const cursor = document.querySelector(".cursor")

// document.addEventListener("mousemove", (e) => {
//   cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
// })

// document.addEventListener("click", () => {
//   cursor.classList.add("cursor-grow")
//   setTimeout(() => {
//     cursor.classList.remove("cursor-grow")
//   }, 500)
// })

// Hover effect for clickable elements
document.querySelectorAll("a, button, .service-card, .work-card").forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("cursor-grow")
  })
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-grow")
  })
})

// Pokemon float animation
const pokemons = document.querySelectorAll(".pokemon")

pokemons.forEach((pokemon) => {
  pokemon.style.animationDuration = `${15 + Math.random() * 10}s`
})

