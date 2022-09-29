const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.height = window.innerHeight
canvas.width = 800*canvas.height/600

const userInput = {
    up: false,
    left: false,
    down: false,
    right: false
}

window.addEventListener('keydown', (event) => {
    switch(event.key.toString().toLowerCase())
    {
        case 'w':
            userInput.up = true
            break
        case 'a':
            userInput.left = true
            break
        case 's':
            userInput.down = true
            break
        case 'd':
            userInput.right = true
            break
    }
})
window.addEventListener('keyup', (event) => {
    switch(event.key.toString().toLowerCase())
    {
        case 'w':
            userInput.up = false
            break
        case 'a':
            userInput.left = false
            break
        case 's':
            userInput.down = false
            break
        case 'd':
            userInput.right = false
            break
    }
})