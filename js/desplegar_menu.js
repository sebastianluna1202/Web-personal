const menuIcon = document.querySelector('.menu-icon')
const firstSpan = document.querySelector('.first-span')
const seccondSpan = document.querySelector('.seccond-span')
const thirdSpan = document.querySelector('.third-span')
const nav = document.querySelector('.nav')


document.addEventListener('click', (event) => {
  console.log(event)
  if (
    event.target.classList.contains('menu-icon') || 
    event.target.classList.contains('first-span') ||
    event.target.classList.contains('seccond-span') ||
    event.target.classList.contains('third-span')
  ) {
    if (menuIcon.classList.contains('active') != true) {
      menuIcon.classList.add('active')
      nav.classList.remove('display-none')
      setTimeout(() => {nav.classList.remove('hidden')}, 0)
    } else {
      menuIcon.classList.remove('active')
      nav.classList.add('hidden')
      setTimeout(() => {nav.classList.add('display-none')}, 300)
    }
  } else {
    menuIcon.classList.remove('active')
    nav.classList.add('hidden')
    setTimeout(() => {nav.classList.add('display-none')}, 300)
  }
})



