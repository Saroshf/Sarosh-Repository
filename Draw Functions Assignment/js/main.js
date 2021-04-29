// Graphics Library
"use strict";
console.log("hello");

let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Draw Iphone
function drawIphone(x, y, w, h, colour) {
    stroke(colour);
    rect(x, y, w, h, "stroke");
    fill("black");
    rect(x + 15, y + 15, w - 30, h - 30, "fill");
    circle(x + 62.5, y + 192.5, 7.5, "stroke");
}
drawIphone(400, 200, 125, 200, "black");
drawIphone(100, 300, 125, 200, "purple");
drawIphone(600, 350, 125, 200, "blue");

// Draw 3D shape
function draw3D(x, y, w, h, colour) {
    stroke(colour);
    rect(x, y, w, h, "stroke");
    rect(x + 50, y - 50, w, h, "stroke");
    line(x, y, x + 50, y - 50);
    line(x + 100, y, x + 150, y - 50);
    line(x, y + 100, x + 50, y + 50);
    line(x + 100, y + 100, x + 150, y + 50);
}
draw3D(100, 100, 100, 100, "purple");
draw3D(400, 500, 100, 100, "orange");
draw3D(600, 150, 100, 100, "cyan");
