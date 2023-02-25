import './styles.css'

const body = document.querySelector('body')
body.classList.add(
  'bg-gray-800',
  'flex',
  'justify-center',
  'items-center',
  'h-screen'
)

const button = document.createElement('button')
button.classList.add(
  'bg-blue-500',
  'hover:bg-blue-700',
  'text-white',
  'font-bold',
  'py-2',
  'px-4',
  'rounded'
)
button.textContent = 'Click me'
button.addEventListener('click', () => {
  alert('Hello, world!')
})

body.appendChild(button)
