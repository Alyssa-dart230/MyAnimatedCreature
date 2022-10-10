let ellipseSize = 200;

function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(25, 25, 112);
  fill(251, 244, 205);
  strokeWeight(10);
  stroke(244, 246, 240, 150);
  ellipse(450, 150, ellipseSize, ellipseSize);
  ellipseSize = ellipseSize + 1;
  fill(19, 55, 29);
  strokeWeight(0);
  rect(0, 500, 900, 100);
  
  strokeWeight(25)
  stroke(253, 208, 35);
  line(700, 250, 675, 300);
  line(700, 375, 675, 300);
  line(700, 375, 675, 450);
  fill(172,170,142);
  strokeWeight(0);
  ellipse(575, 200, 150, 150);
  ellipse(825, 200, 150, 150);
  ellipse(700, 150, 250, 250);
  ellipse(50, 100, 250, 250);
  ellipse(150, 145, 200, 150);
  
  fill(119,119,119);
  strokeWeight(0)
  rect(150, 300, 200, 200);
  ellipse(250, 300, 200, 200);
  
  fill(204, 94, 19);
  strokeWeight(0);
  stroke(0);
  ellipse(450, 450, 300, 200);
  fill(230, 105, 22);
  ellipse(450, 450, 200, 200);
  fill(255, 117, 24);
  ellipse(450, 450, 100, 200);
  fill(254, 216, 91);
  ellipse(450, 420, 125, 125);
  fill(255, 117, 24);
  ellipse(450, 435, 60, 100);
  strokeWeight(5);
  stroke(254, 216, 91);
  line(500, 500, 400, 500);
  fill(77, 30, 0);
  strokeWeight(0);
  rect(440, 302, 20, 50);
  strokeWeight(5);
  stroke(77, 30, 0);
}

