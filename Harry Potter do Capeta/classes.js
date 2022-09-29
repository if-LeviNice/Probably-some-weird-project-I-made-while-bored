class Player
{
    constructor({position, size, velocity, src})
    {
        this.position = position
        this.size = size
        this.velocity = velocity
        this.img = new Image()
        this.img.src = src
    }
}