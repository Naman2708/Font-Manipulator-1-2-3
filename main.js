left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    VIDEO.SIZE(400,400);
    VIDEO.POSITION(10,50);

    canvas = createCanvas(400,400);
    canvas.position(430,130);

    poseNet = ml5.posenet(video,modelDone);
    poseNet.on('pose',gotPoses);
}

function modelDone() {
    console.log("PoseNet Is Initialized And Loaded");
}

function draw() {
    background("#5196e3");
    document.getElementById("font-size").innerHTML = "Font Aize Of The Text Will Be = "+difference+"px";
    fill("#00ff0a");
    textSize(difference);
    text('Naman,50,400');
}

function gotPoses(results,error) {
    if(error) {
        console.error(error);
    }
    if(results.length > 0) {
        console.log(results);

        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.leftWrist.x;

        difference = floor(left_wrist_x - right_wrist_x);
    
        console.log("rightwrist_x = "+results[0].pose.rightWrist.x+" rightwrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftwrist_x = "+results[0].pose.leftWrist.x+" leftwrist_y = "+results[0].pose.leftWrist.y);
    }
}