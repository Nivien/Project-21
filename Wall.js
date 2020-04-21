class Wall{
    constructor(){
        var option2 ={
            density:65,
            isStatic:true
        }
            this.width = 20;
            this.height = 400;
           this.body = Bodies.rectangle(1200,200,this.width,this.height,option2);
            World.add(world,this.body);
            this.thickness = option2.density;
            this.color = 80,80,80;
    }
    display(){
        rectMode(CENTER);
        
        fill(this.color);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
