class Box {
    constructor(x,y,width,height){
        var op = {
            restitution:0.8,
            density:20,
            friction:1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,op)
        this.width = width
        this.height = height

        World.add(world,this.body)

    }

    display(){
        var angle= this.body.angle
        var position= this.body.position
        push()
        translate(position.x,position.y)
        rotate(angle)
        rectMode(CENTER)
        strokeWeight(5)
        stroke("black")
        fill ('green')
        rect(0,0,this.width,this.height)
        pop()
    }


}