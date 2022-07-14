Song1="";
Song2="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Song1 = loadSound("");
    Song2 = loadSound("");
}

function draw(){
    image(video,0,0,600,530);
}