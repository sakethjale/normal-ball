class Balls{
    constructor(x,y,radius){
        var pp={
            'restitution':0.3,
            'friction':0,
            'density':1.2,
           
        }
        this.body=Bodies.circle(x,y,radius,pp)
        this.x=x;
        this.y=y;
        this.radius=radius;

        this.image=loadImage("basketball.png.png")
        World .add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
       image(this.image,pos.x,pos.y,this.radius,this.radius);
        
    }
  }