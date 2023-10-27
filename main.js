status2="";
function preload(){
    
}
function setup(){
    canvas=createCanvas(480, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();
}
function start(){
 objectDetector=ml5.objectDetector('cocossd', modelLoaded);
 document.getElementById("status").innerHTML="status-detecting objects";
 object_name=document.getElementById("object_name").value ;
}
function modelLoaded(){
    console.log("Model Loaded!");
    status2=true;
}