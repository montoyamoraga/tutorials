// kinect, kinectron, p5.js
// based on code by dan o'sullivan
// adapted by aaron montoya-moraga
// kinectron example 00
// change background color with right hand Z axis
// march 2018

// declare kinectron
var kinectron = null;

// declare address
var address = null;

// setup() is run once, at the beginninng
function setup() {
  
  // create a canvas
	createCanvas(500, 500);
  
  // define address
  // enter the 4 digits on the kinectron app
  // on the windows computer
  // they are 4 numbers, between 0 and 255, separated by periods.
  // it must be betweenn ""
  address = "172.16.243.201";
	
  // define kinectron
  kinectron = new Kinectron(address);
	
  // connect to kinectron
  kinectron.makeConnection();
  
  // ask for body tracking
  // when you get a body, the function trackBody is executed
  kinectron.startTrackedBodies(trackBody);
}

// draw() is executed after setup()
// draw() is executed 60 times per second
// in this example it is blank
function draw() {

}

// trackBody() function
// every time kinect sends a body, we execute it
function trackBody(body) {
  
  // value retrieves the right hand on the Z axis
  // try out other kinectron joints by replacing HANDRIGHT
  // try out other axis by replacing cameraZ with cameraX or cameraY
  var value = body.joints[kinectron.HANDRIGHT].cameraZ;
  
  // variable bright to map from one domain to another
  // value goes roughly between and 0 and 3
  // we want it to be between 0 and 255
  // because 0 is black and 255 is white
  var bright = map(value,0,3,0,255);
  
  // print variables in the console
  print("value: " + value);
  print("bright: " + bright);
  
  // paint the background according to the bright variable
  // 0 is black, 255 is white
  background(bright);
}