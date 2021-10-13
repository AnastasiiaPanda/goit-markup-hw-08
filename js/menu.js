;(() => {
  const menuRefs = {
    openMenuBtn: document.querySelector('[data-menu-open-btn]'),
    closeMenuBtn: document.querySelector('[data-menu-close-btn]'),
    menuBackdrop: document.querySelector('[data-menu-backdrop]'),
  }

  menuRefs.openMenuBtn.addEventListener('click', toggleMenu)
  menuRefs.closeMenuBtn.addEventListener('click', toggleMenu)

  function toggleMenu() {
    menuRefs.menuBackdrop.classList.toggle('is-hidden')
  }
})()
