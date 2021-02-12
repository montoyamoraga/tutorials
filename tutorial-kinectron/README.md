# tutorial-kinectron

## Materials

* Windows computer connected to WiFi and with Kinectron installed.
* Another computer connected to the same WiFi.
* Kinect One aka Kinect v2, the boxy one.
* Optional: if the WiFi has a firewall, setup a router with WiFi.

## How to setup Kinectron

[Kinectron](https://kinectron.github.io/) is a software library that allows one Windows computer to stream data from a Kinect to multiple computers at the same time.

### Setup the Kinectron server

The Kinectron server is a Windows computer connected to WiFi and a Kinect that streams data to Kinectron clients.

* Install the Kinect SDK on the Windows computer.
* Download Kinectron from GitHub [https://github.com/kinectron/kinectron/](https://github.com/kinectron/kinectron/).
* To download, go to [Releases](https://github.com/kinectron/kinectron/releases) and click on [Kinectron-0.0.5.0-win32-x64.zip](Kinectron-0.0.5.0-win32-x64.zip).
* Unzip the file to the Desktop of the Windows computer.
* Connect the Kinect to the Windows computer.
* Execute the Kinectron app on the Windows computer.
* You should see an IP Address in orange on the Kinectron app.
* Press the button COLOR to test the RGB camera.

### Setup your Kinectron client

The Kinectron client is a computer that connects to the server and asks for information, aka, your computer.

## Examples instructions

These examples run on the [alpha p5.js editor](https://alpha.editor.p5js.org/). Sign up with your e-mail or create a GitHub account and login with that.

If you are starting from scratch, you need to do two things to make these examples run:

* Add to the project the file kinectron.bundle.js
* Link it from the html file.

## List of examples

To run these examples:
* Click on the live link
* Modify the IP address to match the one on the Kinectron client you are using. An IP Address will look like "w.x.y.z", where each letter corresponds to a number between 0 and 255. You have to separate the four numbers with periods and put everything between "".
* Press the Play button to execute.
* If it works it should say on the Console: "My peer ID is: ..."

* tutorial-kinectron-example0: right hand Z controls background color. [live link](http://alpha.editor.p5js.org/montoyamoraga/sketches/BkwAqUb9G)

[https://alpha.editor.p5js.org/montoyamoraga/sketches/SkykGD-cG](https://alpha.editor.p5js.org/montoyamoraga/sketches/SkykGD-cG)

## List of joints you can use

* kinectron.SPINEBASE
* kinectron.SPINEMID
* kinectron.NECK
* kinectron.HEAD
* kinectron.SHOULDERLEFT
* kinectron.ELBOWLEFT
* kinectron.WRISTLEFT
* kinectron.HANDLEFT
* kinectron.SHOULDERRIGHT
* kinectron.ELBOWRIGHT
* kinectron.WRISTRIGHT
* kinectron.HANDRIGHT
* kinectron.HIPLEFT
* kinectron.KNEELEFT
* kinectron.ANKLELEFT
* kinectron.FOOTLEFT
* kinectron.HIPRIGHT
* kinectron.KNEERIGHT
* kinectron.ANKLERIGHT
* kinectron.FOOTRIGHT
* kinectron.SPINESHOULDER
* kinectron.HANDTIPLEFT
* kinectron.THUMBLEFT
* kinectron.HANDTIPRIGHT
* kinectron.THUMBRIGHT

## List of cameras you can use

* cameraX: horizontal, left and right.
* cameraY: vertical, up and down.
* cameraZ: depth, towards the Kinect.

## How to copy code from GitHub

* Go to the file you want to copy.
* Press "Raw" to see the code without format.
* Select all with Command-a on a Mac or Ctrl-a on a Windows.
* Copy everything with Command-c on a Mac or Ctrl-c on a Windows.
* Paste with Command-v on a Mac or Ctrl-v on a Windows.
