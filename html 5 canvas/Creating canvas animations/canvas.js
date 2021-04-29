var canvas = document.querySelector('canvas');

// sets canvas width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// method gets that element's context—the thing onto which the drawing will be rendered.
var c = canvas.getContext('2d');

// Rectangle, Square , Box
// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(300, 300, 100, 100);
// console.log(canvas);

// Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = '#fa34a3';
// c.stroke();

// Circle, Arc
//c.arc(x, y, radius, startAngle: Float, endAngle: Float, drawCounterClockwise: Bool (false));
//c.beginPath();
//c.arc(300, 300, 30, 0, Math.PI * 2, false);
//c.strokeStyle = 'blue';
//c.stroke();

// for (let i = 0; i < 3; i++) {
//   var x = Math.random() * innerWidth;
//   var y = Math.random() * innerWidth;

//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = 'blue';
//   c.stroke();
// }

var x = Math.random() * window.innerWidth,
  dx = 5;
var y = Math.random() * window.innerHeight,
  dy = 5;
var radius = 30;

// function animate() {
//   requestAnimationFrame(animate);

//   c.clearRect(0, 0, innerWidth, innerHeight);

//   c.beginPath();
//   c.arc(x, y, radius, 0, Math.PI * 2, false);
//   c.strokeStyle = 'blue';
//   c.stroke();

//   if (x + radius > innerWidth || x - radius < 0) {
//     dx = -dx;
//   }

//   if (y + radius > innerHeight || y - radius < 0) {
//     dy = -dy;
//   }

//   x += dx;
//   y += dy;
// }

// animate();

function lineAnimate() {
  requestAnimationFrame(lineAnimate);

  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.moveTo(x, 300);
  c.lineTo(x + 20, 100);
  c.strokeStyle = '#fa34a3';
  c.stroke();

  x += dx;
  y += dy;
}
