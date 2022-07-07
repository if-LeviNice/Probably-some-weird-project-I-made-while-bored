const gameDisplay = document.getElementById('display');
const ctx = gameDisplay.getContext('2d');

//configurações físicas
const defaultGravity = 0.6
gameDisplay.width = window.innerWidth
gameDisplay.height = window.innerHeight

let gameLost = false

//class EnvironmentRendering
//{
    //constructor({position, size, imgsrc})
    //{
        //this.position = position
        //this.size = size
        //this.imgsrc = imgsrc
    //}
    //draw()
    //{
        //document.body.style.backgroundImage = imgsrc;
    //}
    //update()
    //{
        //this.draw()
    //}
//}

//const bg = new EnvironmentRendering({

    //position: {x: 0, y: 0},
    //size: {x: gameDisplay.width, y: gameDisplay.height},
    //imgsrc: "url('sprites/background.png')"

//})

class Player
{
    constructor({position, velocity, size, gravity})
    {
        this.position = position
        this.velocity = velocity
        this.size = size
        this.gravity = gravity
    }
    draw()
    {
        ctx.fillStyle = 'cyan'
        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y)
    }
    update()
    {

        this.draw();

            this.velocity.y += this.gravity
            this.position.y += this.velocity.y
            this.position.x += this.velocity.x

            //limites de cenário (topo e chão)
            if(this.velocity.y + this.gravity + this.position.y > gameDisplay.height-this.size.y)
            {
                this.velocity.y = 0
                this.position.y = gameDisplay.height-this.size.y
            }
            else if(this.velocity.y + this.gravity + this.position.y < 0)
            {
                this.position.y = 0
            }

            //limites de cenário (lados)
            if(this.position.x + this.velocity.x > gameDisplay.width-this.size.x)
            {
                this.position.x = gameDisplay.width-this.size.x
            }
            else if(this.position.x + this.velocity.x < 0)
            {
                this.position.x = 0
            }

            //função final de controles
                //esquerda
            if(keyState.left.isPressed == true)
            {
                this.velocity.x = -15
            }
                //direita
            else if(keyState.right.isPressed == true)
            {
                this.velocity.x = 15
            }
            else
                //(direção nula)
            {
                this.velocity.x = 0
            }
                //cima (salto)
            if(this.position.y == gameDisplay.height-this.size.y && keyState.up.isPressed == true)
            {
                this.velocity.y += -10
            }
    }
}

class WaterDrip
{
    constructor({position, velocity, gravity})
    {
        this.position = position
        this.velocity = velocity
        this.gravity = gravity
    }
    draw()
    {
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.position.x, this.position.y, 40, 40)
    }
    update()
    {
        this.draw()
        if(this.velocity.y < 24){
        this.velocity.y += this.gravity/70
        }

        this.position.y += this.velocity.y

        console.log(this.velocity.y)

        if(this.position.y > gameDisplay.height+40)
        {
            this.position.x = Math.floor(Math.random()*(gameDisplay.width-40))
            this.position.y = -40
        }

        if(this.position.x + 40 >= player.position.x &&
            this.position.x <= player.position.x + 50 &&
            this.position.y + 40 >= player.position.y &&
            this.position.y <= player.position.y + 50)
        {
            gameLost = true
        }
    }
}

//entrada de controles
    //tecla pressionada
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
        case 'ArrowUp':
            keyState.up.isPressed = true
            break;
        case 'a':
        case 'ArrowLeft':
            keyState.left.isPressed = true
            break;
        case 's':
        case 'ArrowDown':
            keyState.down.isPressed = true
            break;
        case 'd':
        case 'ArrowRight':
            keyState.right.isPressed = true
            break;
        
    }
    console.clear()
    console.log(player.position.x+", "+player.position.y)
})
    //tecla solta
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
        case 'ArrowUp':
            keyState.up.isPressed = false
            break;
        case 'a':
        case 'ArrowLeft':
            keyState.left.isPressed = false
            break;
        case 's':
        case 'ArrowDown':
            keyState.down.isPressed = false
            break;
        case 'd':
        case 'ArrowRight':
            keyState.right.isPressed = false
            break;
        
    }
})

//estado das teclas
const keyState = {
    up: {isPressed: false},
    left: {isPressed: false},
    down: {isPressed: false},
    right: {isPressed: false}
}

//jogador
const player = new Player({
    position:{x:(gameDisplay.width/2)-50, y: (gameDisplay.height-50)},
    velocity:{x:0, y:0},
    size: {x:50, y:50},
    gravity: defaultGravity
})

var drip1 = new WaterDrip({
    position: {x: Math.floor(Math.random()*(gameDisplay.width-40)), y: -40},
    velocity:{x:0, y:0},
    gravity: Math.random()
})
var drip2 = new WaterDrip({
    position: {x: Math.floor(Math.random()*(gameDisplay.width-40)), y: -40},
    velocity:{x:0, y:0},
    gravity: Math.random()
})
var drip3 = new WaterDrip({
    position: {x: Math.floor(Math.random()*(gameDisplay.width-40)), y: -40},
    velocity:{x:0, y:0},
    gravity: Math.random()
})
var drip4 = new WaterDrip({
    position: {x: Math.floor(Math.random()*(gameDisplay.width-40)), y: -40},
    velocity:{x:0, y:0},
    gravity: Math.random()
})
var drip5 = new WaterDrip({
    position: {x: Math.floor(Math.random()*(gameDisplay.width-40)), y: -40},
    velocity:{x:0, y:0},
    gravity: Math.random()
})

//função para repetir os frames do sprite
function anim()
{
    if(gameLost == true)
    {
    ctx.fillStyle = 'yellow'
    ctx.fillRect(0, 0, gameDisplay.width, gameDisplay.height)
    }
    else
    {
    window.requestAnimationFrame(anim)
    ctx.clearRect(0, 0, gameDisplay.width, gameDisplay.height)

    player.update()
    drip1.update()
    drip2.update()
    drip3.update()
    drip4.update()
    drip5.update()
    }
}

anim()
