class Slingshot {
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options={
            'bodyA' : bodyA,
            'bodyB' : bodyB,
            'pointB' :{x: this.offsetX, y: this.offsetY},
            'stiffness' : 0.4,
            'length' : 200
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);

    }
    display(){
        strokeWeight(3);
        if(this.sling.bodyA){
        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y,this.sling.bodyB.position.x + this.offsetX, this.sling.bodyB.position.y + this.offsetY)
        }
    }
}

