// seletecting all of The Article's children
console.log("-------------seletecting all of The Article's children")
const TheArtcle = document.querySelector('article')


Array.from(TheArtcle.children).forEach(child => {
    console.log(child)
    child.classList.add('article-element')
})

// selecting siblings and parent
console.log("-------------selecting siblings and pare")
const Title = document.querySelector('p')

console.log(Title.previousElementSibling)
console.log(Title.nextElementSibling)

// Listening for Events: Interacting with individual elements of a parent
console.log("-------------Listening for Events: Interacting with individual elements of a parent")
const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = 'something to do'
    ul.prepend(li)
})

ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.style.textDecoration = 'line-through'
    }
})

// some other events
console.log("-------------some other events")
const box = document.querySelector('.box')

box.addEventListener('mousemove', e => {
    box.textContent = ` x pose : ${e.offsetX} y pose : ${e.offsetY}`
})

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY)
})

// popup
console.log("-------------popup")
const cpy = document.querySelector('.box')
const popup = document.querySelector('.popup-wrapper')
const closep = document.querySelector('.popup-close')

cpy.addEventListener('copy', () => {popup.style.display='block'})
closep.addEventListener('click', () => {popup.style.display='none'})
popup.addEventListener('click', () => {popup.style.display='none'})

// forms : simple
console.log("-------------forms : simple")
