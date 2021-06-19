class Gg{
    constructor(x,y,width,height){
     var gg={
       isStatic:true
     }
     this.body=Bodies.rectangle(x,y,width,height,gg);
     this.width=width;
     this.height=height;
     World.add(world,this.body);
    }
     display(){
         var pos=this.body.position;
         rectMode(CENTER);
         rect(pos.x,pos.y,this.width,this.height);
     }
    } 
