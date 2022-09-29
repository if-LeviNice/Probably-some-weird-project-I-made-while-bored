class LVL
{
    constructor(player, bg)
    {
        this.player = new Player(player)
        this.bg = bg
    }
}
class Quiz_home extends LVL
{

    constructor(player, bg)
    {
        super(player, bg)
        this.frame = 0
        this.framelimit = 10
    }
    update()
    {
        ctx.drawImage(this.bg[0].img, 0, 0, this.bg[0].imgsize.x, this.bg[0].imgsize.y, this.bg[0].position.x, this.bg[0].position.y, this.bg[0].size.x, this.bg[0].size.y)
        ctx.drawImage(this.player.img, 0, 0, this.player.imgsize.x, this.player.imgsize.y, this.player.position.x, this.player.position.y, this.player.size.x, this.player.size.y)
        ctx.drawImage(this.bg[1].img, 0, 0, this.bg[1].imgsize.x, this.bg[1].imgsize.y, this.bg[1].position.x, this.bg[1].position.y, this.bg[1].size.x, this.bg[1].size.y)
    }
}

var currentLvl = new Quiz_home()

function render()
{
    window.requestAnimationFrame(render)
    currentLvl.update()
}