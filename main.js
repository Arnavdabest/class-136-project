var status = ""

function setup(){
    canvas = createCanvas(600,370);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(600,370)
}

function start(){
    object = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "detecting objects";
    input_value = document.getElementById("id_of_input").value
}

function modelloaded(){
    console.log("modelloaded");
    status = true;
}

function draw(){
    image(video, 0, 0, 600, 370);
}