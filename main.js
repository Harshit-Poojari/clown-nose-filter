nose_x = 0;
nose_y = 0;

function preload() {
  clown_nose = loadImage("https://i.postimg.cc/9Q4SZn9v/Clown-nose-large-removebg-preview-1.png");
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center(); 
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose)
}

function draw() {
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(0,255,0);
    circle(nose_x,nose_y,10);
    image(clown_nose,nose_x -25,nose_y -25,50,50);
}

function take_snapshot() {
save('myfilterimage.png');
}

function modelLoaded() {
    console.log("Posenet is Loaded");
}

function gotPose(results) {
  if(results.length > 0) {
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    console.log("nose x ="+results[0].pose.nose.x);
    console.log("nose y ="+results[0].pose.nose.y);
  }
}



