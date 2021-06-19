const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var ball1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   ground=new Gg(600,300,1200,50);
    ball1=new Balls(200,50,50);
    

}

function draw(){
    background("black");
    Engine.update(engine);
    ball1.display();
    ground.display();
   
       
}

