let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

ctx.fillStyle = '#F3BFCC';
ctx.strokeStyle = '#F3BFCC';
ctx.lineWidth = 6;
// drawOvalShape(ctx, 500, 500, 300,800);
// drawOvalShape(ctx, 500, 500, 200,700);
// drawOvalShape(ctx, 500, 500, 100,600);
let r = 700
let r2 = 100

function ovals(params) {

  drawOvalShape(ctx, 900, 500, r2, r - 100);
  r = r + 100
  r2 = r2 + 100

  if (r == 1300) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    r = 700
    r2 = 100
  }

}

setInterval(() => {
  ovals()
}, 1000);
const fps = 10;

// function drawCircle() {
//   ctx.clearRect(0, 0, canvas.width, canvas.width);

//   // drawOvalShape(ctx, 900, 500, r2, r - 100);
//   ctx.beginPath()
//   ctx.ellipse(900, 500, r2, r, 90 * Math.PI / 180, 0, 2 * Math.PI);
//   ctx.stroke();
//   r = r + 0.4
//   r2 = r2 + 0.4
//   if (r == 800) {
//     r = 700
//     r2 = 100
//   }

//   setInterval(() => {
//     // requestAnimationFrame(drawCircle);
//   }, 1000 / fps);
// }


// drawCircle();

function drawOvalShape(ctx, center_x, center_y, width, height) {
  ctx.beginPath()
  ctx.ellipse(center_x, center_y, width, height, 90 * Math.PI / 180, 0, 2 * Math.PI);
  ctx.stroke();
}