let scoopY = 600;
let iceCreamY = 600;
// let startButton, declineButton, acceptButton, restButton;
let l1b, r1b;
let line = 0;

let soundFile, soundFile2;
let fft;
let isPlaying = false;
let imgX = 100;
let imgY = 130;
let txtX = 20;
let txtY = 470;
let b1X = 120;
let b2X = 380;
let bY = 550;

let animationRequest;

function preload() {
  soundFile = loadSound('music.mp3');
  soundFile2 = loadSound('music2.mp3');

  // -> Images
  bkgd1 = loadImage('Images/bkgd.jpg');
  dem8 = loadImage('Images/dem (8).jpg');
  dem9 = loadImage('Images/dem (9).jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  beginButton();
  background(bkgd1); // -> Paper background
  fft = new p5.FFT();
  soundFile.amp(0.5);
  soundFile2.amp(0.6);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  textSize(30);
  // fill(255, 255, 255)
  textFont('Blackadder ITC');
  textStyle(ITALIC);
}

// -> V Buttons V

function beginButton() {
  startButton = createButton('Begin Adventure!');
  startButton.position(width / 2 - 60, height / 4);
  startButton.size(150, 50);
  startButton.style('background', 'linear-gradient(to bottom, #EFE4CA, #C4B898)');
  startButton.style('color', '#8C6A1B');
  startButton.style('border', '1px solid #8C6A1B');
  startButton.mousePressed(beginAdventure);
}

function accButton() {
  acceptButton = createButton("Accept");
  acceptButton.position(b1X, 220);
  acceptButton.size(100, 30);
  acceptButton.style('background', 'linear-gradient(to bottom, #EFE4CA, #C4B898)');
  acceptButton.style('color', '#8C6A1B');
  acceptButton.style('border', '1px solid #8C6A1B');
  acceptButton.mousePressed(demon8);
}

function denButton() {
  declineButton = createButton("Decline");
  declineButton.position(b2X, 220);
  declineButton.size(100, 30);
  declineButton.style('background', 'linear-gradient(to bottom, #EFE4CA, #C4B898)');
  declineButton.style('color', '#8C6A1B');
  declineButton.style('border', '1px solid #8C6A1B');
  declineButton.mousePressed(demon81);
}

function pleaWith1() {
  pleaButton = createButton("1 Plea with demon");
  pleaButton.position(100, 580);
  pleaButton.size(140, 30);
  pleaButton.style('background', 'linear-gradient(to bottom, #EFE4CA, #C4B898)');
  pleaButton.style('color', '#8C6A1B');
  pleaButton.style('border', '1px solid #8C6A1B');
  pleaButton.mousePressed(demon9);
}

function pleaWith2() {
  pleaButton = createButton("2 Plea with demon");
  pleaButton.position(100, 580);
  pleaButton.size(140, 30);
  pleaButton.style('background', 'linear-gradient(to bottom, #EFE4CA, #C4B898)');
  pleaButton.style('color', '#8C6A1B');
  pleaButton.style('border', '1px solid #8C6A1B');
  pleaButton.mousePressed(demon92);
}

function messWith1() {
  messButton = createButton("1 Mess with demon");
  messButton.position(260, 580);
  messButton.size(140, 30);
  messButton.style('background', 'linear-gradient(to bottom, #EFE4CA, #C4B898)');
  messButton.style('color', '#8C6A1B');
  messButton.style('border', '1px solid #8C6A1B');
  messButton.mousePressed(demon91);
}

function messWith2() {
  messButton = createButton("2 Mess with demon");
  messButton.position(260, 580);
  messButton.size(140, 30);
  messButton.style('background', 'linear-gradient(to bottom, #EFE4CA, #C4B898)');
  messButton.style('color', '#8C6A1B');
  messButton.style('border', '1px solid #8C6A1B');
  messButton.mousePressed(demon93);
}

// -> V MousePressed V

function beginAdventure() {
  soundFile.play(); // -> Play ceppy song
  startButton.hide(); // -> Hide "Begin Adventure!"
  background(bkgd1);
  text("You are walking alone in the woods, when you find a note on the ground", 50, 50, 600);
  text("*PLEASE   HELP   ME! I am at the other end of the forest path ahead*", 80, 140, 600);
  textAlign(CENTER);
  accButton();
  denButton();
  cancelAnimation();
}

function demon8() {
  soundFile2.play(); // -> Play glitch
  acceptButton.hide();
  declineButton.hide();
  background(bkgd1);
  image(dem8, 50, 50, 600, 400);
  text("8 You have disturbed the forest demon. It is mad at you", txtX, txtY, 600);
  pleaWith1();
  messWith1();

  cancelAnimation();
  animateImage8();
}

function demon81() {
  soundFile2.play(); // -> Play glitch
  acceptButton.hide();
  declineButton.hide();
  background(bkgd1);
  image(dem8, 50, 50, 600, 400);
  text("81 You have disturbed the forest demon. It is mad at you", txtX, txtY, 600);
  pleaWith2();
  messWith2();

  cancelAnimation();
  animateImage8();
}

function animateImage8() {
  animationRequest = requestAnimationFrame(animateImage8);

  let x = random(50, 650);
  let y = random(50, 550);
  let c = dem8.get(int(x), int(y));

  fill(c);
  noStroke();
  rect(x, y, 10, 10);
}

function demon9() {
  soundFile2.play(); // -> Play glitch
  pleaButton.hide();
  messButton.hide();
  background(bkgd1);
  image(dem9, 50, 50, 600, 400);
  text("9 You have made it worse. Now you die \nGAME   OVER", txtX, txtY, 600);
  text("Refresh page to play again", txtX, txtY + 80, 600);

  cancelAnimation();
  animateImage9();
}

function demon91() {
  soundFile2.play(); // -> Play glitch
  pleaButton.hide();
  messButton.hide();
  background(bkgd1);
  image(dem9, 50, 50, 600, 400);
  text("91 You have made it worse. Now you die \nGAME   OVER", txtX, txtY, 600);
  text("Refresh page to play again", txtX, txtY + 80, 600);

  cancelAnimation();
  animateImage9();
}

function demon92() {
  soundFile2.play(); // -> Play glitch
  pleaButton.hide();
  messButton.hide();
  background(bkgd1);
  image(dem9, 50, 50, 600, 400);
  text("92 You have made it worse. Now you die \nGAME   OVER", txtX, txtY, 600);
  text("Refresh page to play again", txtX, txtY + 80, 600);

  cancelAnimation();
  animateImage9();
}

function demon93() {
  soundFile2.play(); // -> Play glitch
  pleaButton.hide();
  messButton.hide();
  background(bkgd1);
  image(dem9, 50, 50, 600, 400);
  text("93 You have made it worse. Now you die \nGAME   OVER", txtX, txtY, 600);
  text("Refresh page to play again", txtX, txtY + 80, 600);

  cancelAnimation();
  animateImage9();
}

function animateImage9() {
  animationRequest = requestAnimationFrame(animateImage9);

  let x = random(50, 650);
  let y = random(50, 550);
  let c = dem9.get(int(x), int(y));

  fill(c);
  noStroke();
  rect(x, y, 20, 20);
}

function cancelAnimation() {
  if (animationRequest) {
    cancelAnimationFrame(animationRequest);
  }
}
