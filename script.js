var canvas = document.querySelector('.bus');
var ctx = canvas.getContext('2d');
canvas.addEventListener('mousemove', function(e) {
	var x = e.clientX,
		y = e.clientY;
	if ((x > 295 && x < 305) || (y > 245 && y < 255)) {
		ctx.beginPath();
		ctx.moveTo(300, 250);
		ctx.lineTo(350, 250);
		ctx.lineTo(400, 200);
		ctx.lineWidth = 14;
		ctx.strokeStyle = '#f00';
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(300, 250, 10, 0, 2 * Math.PI);
		ctx.fillStyle = '#f00';
		ctx.fill();

		//bus out line
		ctx.beginPath();
		ctx.moveTo(400, 425);
		ctx.lineTo(400, 125);
		ctx.lineWidth = 14;
		ctx.strokeStyle = '#bbb';
		ctx.stroke();
	}
}, false);

function drawBus() {
	var canvas = document.querySelector('.bus');
	var ctx = canvas.getContext('2d');

	ctx.beginPath();
	ctx.moveTo(250, 200);
	ctx.lineTo(250, 450);
	ctx.lineWidth = 14;
	ctx.strokeStyle = '#000';
	ctx.lineCap = 'round';
	ctx.stroke();

	// pins
	ctx.beginPath();
	ctx.moveTo(300, 250);
	ctx.lineTo(250, 250);
	ctx.lineWidth = 14;
	ctx.strokeStyle = '#000';
	ctx.lineCap = 'butt';
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.lineTo(250, 300);
	ctx.lineWidth = 14;
	ctx.strokeStyle = '#000';
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(300, 350);
	ctx.lineTo(250, 350);
	ctx.lineWidth = 14;
	ctx.strokeStyle = '#000';
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(300, 400);
	ctx.lineTo(250, 400);
	ctx.lineWidth = 14;
	ctx.strokeStyle = '#000';
	ctx.stroke();

	//bus grid
	ctx.beginPath();
	ctx.moveTo(300, 250);
	ctx.lineTo(350, 250);
	ctx.lineTo(400, 200);
	ctx.lineWidth = 14;
	ctx.strokeStyle = '#bbb';
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.lineTo(350, 300);
	ctx.lineTo(400, 250);
	ctx.lineWidth = 14;
	ctx.strokeStyle = '#bbb';
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(300, 350);
	ctx.lineTo(350, 350);
	ctx.lineTo(400, 300);
	ctx.lineWidth = 14;
	ctx.strokeStyle = '#bbb';
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(300, 400);
	ctx.lineTo(350, 400);
	ctx.lineTo(400, 350);
	ctx.lineWidth = 14;
	ctx.strokeStyle = '#bbb';
	ctx.stroke();

	//bus out line
	ctx.beginPath();
	ctx.moveTo(400, 425);
	ctx.lineTo(400, 125);
	ctx.lineWidth = 14;
	ctx.strokeStyle = '#bbb';
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(300, 250, 10, 0, 2 * Math.PI);
	ctx.fillStyle = '#bbb';
	ctx.fill();

} 

drawBus();













