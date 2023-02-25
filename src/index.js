import './styles.css'

const body = document.querySelector('body')

const button = document.createElement('button')
button.textContent = 'Click me'
button.addEventListener('click', () => {
  alert('Hello, world!')
})

body.appendChild(button)
