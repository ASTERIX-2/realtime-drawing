var noseX=0;
var noseY=0;
var leftWristX=0;
var rightWristX=0;
var difference=0;
function setup(){
    var capture= createCapture(VIDEO);
    capture.size(500,500)
    var canvas=createCanvas(400,400);
    canvas.position(800,100);
    posenet=ml5.poseNet(capture,modelLoaded);
    posenet.on("pose",gotPoses);
}
function draw(){
    background("#90E1D4");
    fill("#F0BDFC");
    stroke("#F0BDFC");
    square(noseX,noseY,difference);
    document.getElementById("square_sides").innerHTML="the length of the side of the square is "+difference+"px"
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX - rightWristX);
console.log("nosex: "+noseX);
console.log("nosey: "+noseY);
}
}