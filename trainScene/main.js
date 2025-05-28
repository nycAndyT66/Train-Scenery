let a = 800;
let b = 1600;
let c = 0;
let d = 800;
let e = 0;
let f = 5;
let g = 200;
let h = 200;
let i = 600;
let j = 500;
let dayTime = true;
let lx = 765;
let ly = 20;
let lh = 20;
let lw = 40;
let cr = 135;
let cg = 206;
let cb = 235;
let count = 0;
let numDeg = 300.0;
let numDeg2 = 120.0;
let Radius = 40;
let centerX, centerY;
function setup() {
  createCanvas(800, 500);
  frameRate(60);
  centerX = width / 2;
  centerY = height / 2;
}
function preload() {
  tree = loadImage(
    "pngtree-pine-tree-with-gradation-color-icon-pixel-art-png-image_6173919.png"
  );
}

function draw() {
  // console.log(frameCount);
  background(cr, cg, cb);
  time();
  angleMode(DEGREES);
  let x = centerX + 400 * cos(numDeg);
  let y = centerY + 280 * sin(numDeg);
  let x2 = centerX + 400 * cos(numDeg2);
  let y2 = centerY + 280 * sin(numDeg2);
  modelSun(x, y);
  modelMoon(x2, y2);
  //models
  drawMountains(e);
  e = e - 0.3;
  if (e < 0 - 700) {
    e = 1200;
  }
  cloudModel(h + 100, 50);
  cloudModel(i + 300, 30);
  cloudModel(i - 200, 80);
  cloudModel(h + 450, 20);
  cloudModel(h, 10);
  cloudModel(i + 360, 60);
  cloudModel(i - 100, 30);
  cloudModel(h + 600, 70);
  h = h - 0.15;
  i = i - 0.1;
  if (h < 0 - 700) {
    h = 1200;
  }
  if (i < 0 - 700) {
    i = 1200;
  }
  backgroundScenery1(c);
  backgroundScenery1(d);
  c = c - 8;
  d = d - 8;
  if (c < 0 - 800 && d < 0) {
    c = 0;
    d = 800;
  }

  tracks(f);
  f = f - 8;
  if (f < 0.9) {
    f = 20;
  }
  trainModel();
  backgroundScenery2(a, 550);
  backgroundScenery2(b, 600);
  backgroundScenery2(g, 500);
  backgroundScenery2(j, 580);
  a = a - 20;
  b = b - 20;
  g = g - 20;
  j = j - 20;
  if (a < 0 - 100 && b < 0 - 100 && g < 0 - 100 && j < 0 - 100) {
    a = 800;
    b = 1400;
    g = 1600;
    j = 1375;
  }
  button();

}

function modelSun(x, y) {
  fill("rgb(255,215,0)");
  ellipse(x, y + 70, 40, 40);
}
function modelMoon(x, y) {
  fill("#FFF7AD");
  ellipse(x, y + 70, 40, 40);
}
function drawMountains(x) {
  fill(100, 100, 100);
  stroke(50, 50, 50);
  triangle(100 + x, 300, 300 + x, 100, 500 + x, 300);
  triangle(300 + x, 300, 500 + x, 150, 700 + x, 300);
}


function backgroundScenery1(x) {
  imageMode(CENTER);
  tint("rgb(63,94,63)");
  image(tree, 10 + x, 275, 100, 100);
  image(tree, 40 + x, 275, 150, 150);
  image(tree, 70 + x, 275, 120, 120);
  image(tree, 100 + x, 275, 130, 130);
  image(tree, 130 + x, 275, 100, 100);
  image(tree, 160 + x, 275, 150, 150);
  image(tree, 190 + x, 275, 120, 120);
  image(tree, 220 + x, 275, 130, 130);
  image(tree, 250 + x, 275, 100, 100);
  image(tree, 280 + x, 275, 150, 150);
  image(tree, 310 + x, 275, 130, 130);
  image(tree, 340 + x, 275, 120, 120);
  image(tree, 370 + x, 275, 100, 100);
  image(tree, 400 + x, 275, 150, 150);
  image(tree, 430 + x, 275, 130, 130);
  image(tree, 460 + x, 275, 120, 120);
  image(tree, 490 + x, 275, 100, 100);
  image(tree, 520 + x, 275, 150, 150);
  image(tree, 550 + x, 275, 130, 130);
  image(tree, 580 + x, 275, 120, 120);
  image(tree, 610 + x, 275, 100, 100);
  image(tree, 640 + x, 275, 140, 140);
  image(tree, 670 + x, 275, 120, 120);
  image(tree, 700 + x, 275, 110, 110);
  image(tree, 730 + x, 275, 140, 140);
  image(tree, 760 + x, 275, 120, 120);
  image(tree, 790 + x, 275, 150, 150);
}
function backgroundScenery2(x, y) {
  imageMode(CENTER);
  tint("rgb(83,100,67)");
  image(tree, x, y, 400, 400);
}

function tracks(x) {
  noStroke();
  fill("rgb(140,209,140)");
  rect(0, 300, 800, 500);
  fill("#7C5C4F");
  rect(0, 300, 800, 30);
  fill("silver");
  rect(0, 300, 800, 6);
  fill("#AA7E4F");
  for (let i = -20; i < 900; i += 20) {
    rect(x + i, 306, 8, 25);
  }

  fill("silver");
  rect(0, 318, 800, 6);
}
function trainModel() {
  if(!dayTime && count > 25){
    let c2 = color(255,255,0)
    c2.setAlpha(100)
    fill(c2)
    triangle(480,280,650,260,650,300)
  }
  fill("silver");
  stroke(1);
  ellipseMode(CENTER);
  ellipse(479, 280, 10, 50);
  fill('silver')
  rectMode(CENTER)
  rect(359,298,170,30)
  fill("black")
  rect(380, 280, 200, 50);
  rect(373, 280, 200, 40);
  fill("grey");
  rect(455, 307, 50, 15);
  rect(475, 297, 70, 10);
  rect(455, 296, 50, 20);
  rect(300, 255, 50, 60);
  rect(295, 225, 75, 15);
  triangle(257, 217, 333, 217, 295, 210);
  triangle(440,210,480,210,460,240)
  rect(460,240,20,30)
  ellipseMode(CENTER);
  stroke(2);
  fill("maroon");
  ellipse(300, 305, 40, 40);
  ellipse(350, 305, 40, 40);
  ellipse(470, 317, 15, 15);
  ellipse(445, 317, 15, 15);
  rectMode(CORNER);
}
function cloudModel(x, y) {
  noStroke();
  let c = color(255, 255, 255);
  c.setAlpha(200);
  fill(c);
  ellipse(x, y, 100, 20);
  ellipse(x - 20, y - 5, 40, 20);
  ellipse(x - 20, y + 7, 100, 20);
  ellipse(x + 20, y + 9, 100, 20);
  ellipse(x, y - 10, 40, 20);
  ellipse(x + 20, y - 7, 40, 20);
}
function time() {
  if (!dayTime) {
    if (count < 10*2) {
      numDeg += 4.5;
      numDeg2 += 4.5;
      cr += 12/2;
      cg += 0.5/2;
      cb -= 5.5/2;
      count += 1;
    } else if (count < 20*2) {
      numDeg += 4.5;
      numDeg2 += 4.5;
      cr -= 22.5/2;
      cg -= 16.5/2;
      cb -= 9.5/2;
      count += 1;
    }
  }

  if (dayTime) {
    if (count > 10*2) {
      cr += 22.5/2; // Reverse decrease
      cg += 16.5/2;
      cb += 9.5/2;
      count -= 1; 
      numDeg += 4.5;
      numDeg2 += 4.5;
    } else if (count > 0) {
      cr -= 12/2; // Reverse increase
      cg -= 0.5/2;
      cb += 5.5/2;
      numDeg += 4.5;
      numDeg2 += 4.5;
      if (count == 0) {
      } else {
        count -= 1;
      }
    }
  }
}
function mousePressed() {
  if (mouseX > lx && mouseY > ly && mouseX < lx + lh && mouseY < ly + lw) {
    dayTime = !dayTime;
  }
}
function button() {
  rectMode(CORNER);
  fill("white");
  rect(750, 0, 50,70);
  rectMode(CORNER);
  fill("red");
  rect(lx, ly, lh, lw);
  fill('black')
  text('Time',762,10)
}
