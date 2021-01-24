class Box{
    constructor(x,y,width,height) {
    
    var options={
        restitution:1.0
    }
    
          
          this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
          World.add(world,this.body);  
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.x);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("red");
        strokeWeight(4);
        stroke("blue");
        rect(0,0,this.width,this.height); 
        pop();
    }

}