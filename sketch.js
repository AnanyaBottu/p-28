const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,cons;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

var options = {
            'isStatic':true,
            'friction':1.0,
            'density':1.0
        }
    box1 = new Box(800,240,350,30,options);
     box2 = new Box(200,120,30,30);
     box3 = new Box(850,197,60,40);
     box4 = new Box(910,197,60,40);
     box5 = new Box(970,197,60,40);
     box6 = new Box(1030,197,60,40);
     box7 = new Box(880,155,60,40);
     box8 = new Box(940,155,60,40);
     box9 = new Box(1000,155,60,40);
     box10 = new Box(910,113,60,40);
     box11 = new Box(970,113,60,40);
     box12 = new Box(940,71,60,40);

    //box1.velocityY=0;

cons=new SlingShot(box2.body,{x:200,y:120});


}


function draw(){
    Engine.update(engine);
    strokeWeight(4);
background("pink");

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box1.display();
    cons.display();
}
function mouseDragged(){
   Matter.Body.setPosition(box2.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
   cons.Release();
}