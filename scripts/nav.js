document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon")
  const navLinks = document.getElementById("nav-links")

  if (!menuIcon || !navLinks) return

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    menuIcon.classList.toggle("open")
  })

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active")
      menuIcon.classList.remove("open")
    })
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      navLinks.classList.remove("active")
      menuIcon.classList.remove("open")
    }
  })
})
