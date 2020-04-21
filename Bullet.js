class Bullet{
    constructor(){

        var option1 ={
            density:Math.round(random(30,52))
          }
          var velocity = {
            x:random (30,70),
            y:0
          }
          this.width = 30;
          this.height = 20;
        this.body = Bodies.rectangle(20,200,this.width,this.height,option1);
        World.add(world,this.body);
        Body.setVelocity(this.body, velocity);
        this.speed = velocity.x;
        this.weight = option1.density;
    }
    display(){
        rectMode(CENTER);
        fill(0);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}