var capture;

function preload(){
  // put preload code here
}

var mic;
var slider;
var val;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

push();
  slider = createSlider(0, 5, 0, 0.2);
  slider.position(width/2-200, 50);
  slider.style('width', '80px');
  pop();


mic= new p5.AudioIn();
  mic.start();

  var vol= mic.getLevel();
    text(vol, 30, 30);


  capture= createCapture(VIDEO);
capture.size(600, 440);
capture.hide();

}


function draw() {
  // put drawing code here
  background("black");

var val = slider.value();

  var myImage= capture.loadPixels();
  push();
  imageMode(CENTER);
  translate(width/2, height/2);
image(myImage, 0, 0, myImage.width, myImage.height);
filter(BLUR, val);
pop();


var vol= mic.getLevel();
vil = map(vol, 0.01, 0.2, 0, 300);


fill(0, 0, 0, vil);
noStroke();
  rect(0, 0, width, height);

  push();
  fill("#df861d");
  textAlign(CENTER);
  textSize(20);
  translate(width/2, height-20);
    text("...Scream to black it out!", 0, 0);
    pop();

    push();
    fill("#fdc029");
    textAlign(CENTER);
    textSize(20);
    translate(width/2, height-50);
      text("Move the slider to mist the camera up...", 0, 0);
      pop();


  if (vil>=300) {
    textAlign(CENTER);
    textSize(30);
    fill("white");
    translate(width/2, height/2);
    text("You're too loud", 0, 0);
  }
}
