noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage("https://i.postimg.cc/63Brv1dB/clown-nose-clipart-2.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPose);
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose X = " + results[0].pose.nose.x);
        console.log("nose Y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
    }
}

function modelLoaded(){
    console.log("Pose net is initialized");
}

function draw(){
    image(video, 0, 0, 300, 300);
    //fill("red");
    //stroke("red");
    //circle(noseX, noseY,20);
    image(clown_nose, noseX-15, noseY-10, 30, 30);
}

function take_snapshot(){
    save("filter_image.png");
}