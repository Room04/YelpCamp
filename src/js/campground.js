const hamburg = document.querySelector('#hamburg') // get hamburger menu
const hmLinks = document.querySelector('#hm-links') //get links to toggle

// toggle class function
const toggleClass = (element, className) => {
   element.classList.toggle(className)
}

// toggle class on click
hamburg.addEventListener('click', () => {
   toggleClass(hmLinks, 'no-show')
})