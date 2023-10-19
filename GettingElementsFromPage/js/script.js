'use strict'

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),
  oneHeart = document.querySelector('.heart'),
  wrapper = document.querySelector('.wrapper')

// CSS
box.style.backgroundColor = 'red'
box.style.width = '500px'

// CSS style text
box.style.cssText = 'height: 200px; border-radius: 50%'

// CSS style for one element
btns[1].style.borderRadius = '100%'
circles[0].style.backgroundColor = 'red'

// JS cucle FOR styles for each element from the array
for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = 'pink'
}

// Better cucle forEach for iterating through elements
hearts.forEach((item) => {
  item.style.backgroundColor = 'pink'
})

// Create new element
const div = document.createElement('div')

// Add class for div element
div.classList.add('black')

// Add div element to wrapper in the end block
wrapper.append(div)
// older usage
// wrapper.appendChild(div)

// Add div element to wrapper in the start block
// wrapper.prepend(div)

// hearts[0].before(div)
// hearts[1].after(div)

// wrapper.insertBefore(div, hearts[0])

// circles[0].remove()
// wrapper.removeChild(hearts[1])

// hearts[0].replaceWith(circles[0])

// Add text
// const text = div.createTextNode('hello')

div.innerHTML = '<h1>Hello World</h1>'

div.insertAdjacentHTML('afterbegin', '<h2>Hello H2</h2>')
