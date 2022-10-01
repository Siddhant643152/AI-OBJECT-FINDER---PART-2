status = "";

function preload(){
}
function setup(){
canvas = createCanvas(600,450);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function draw(){
    image(video, 0, 0, 600, 450);
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("result").innerHTML = "Detecting Objects";
    textInput = document.getElementById("text_input1").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}