const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    backgroundImg = loadImage("sunrise1.png");
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    //bg = 
}

function draw(){

    // add condition to check if any background image is there to add
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    // write code slice the datetime
    hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if (hour>=04 && hour<=06){
        backgroundImg = loadImage("sunrise1.png");
    }else if(hour>=06 && hour<=08){
        backgroundImg = loadImage("sunrise2.png");
    }else if(hour>=23 && hour<=0){
        backgroundImg = loadImage("sunset10.png");
    }else if(hour>=0 && hour<=03){
        backgroundImg = loadImage("sunset11.png");
    }else{
        backgroundImg = loadImage("sunset12.png");
    }

    //load the image in backgroundImg variable here
    bg = loadImage(bg)
}
