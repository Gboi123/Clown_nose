noseX=0;
noseY=0;


function preload(){
    clown_nose = loadImage("https://i.postimg.cc/4y9MjpP9/clownnose.png");
}
 function setup(){
     canvas = createCanvas(300,300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300,300);
     video.hide();

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
    }

 function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX-13, noseY-13, 30, 30);
 }

 function take_snapshot(){
     save('myFilterImage.png');
 }

 function modelLoaded(){
     console.log('PoseNet Is Initialized');
 }

 function gotPoses(results){
     if(results.length> 0){
         console.log(results);
         console.log("nose x ="+ noseX);
         console.log("nose y ="+ noseY);
         noseX = results[0].pose.nose.x;
         noseY = results[0].pose.nose.y;
     }
 }