//draw circle on canvas
function drawCircle(){
  var canvas = document.getElementById('window');
  if(canvas.getContext){
    var ctx = canvas.getContext('2d');

    var x = canvas.width / 2,
        y = canvas.height / 2,
        radius = 150;
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);;
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.stroke(); //was macht das?
  }

  function drawDot(x,y,canvas){
    canvas.fillRect(x,y,1,1);
  }

/**
  function point(x, y, canvas){
    canvas.fillRect(x,y,1,1);
  }
**/

  function pi(){

  }


}


var start = document.getElementById('start'),
	stop = document.getElementById('stop'),
	download = document.getElementById('download'),
	elem = document.getElementById("window"); //elem muss der Kreis sein oder beides
var requestID = undefined;
var startTime = undefined;

function render(time) {
	if (time === undefined) {
		time = Date.now();
	}
	if (startTime === undefined) {
		startTime = time;
	}
	elem.style.left = ((time - startTime) / 10 % 800) + "px";
}

function animate() {
	render();
	requestID = requestAnimationFrame(animate, elem);
}

function stopAnimation() {
	if (requestID) {
		cancelAnimationFrame(requestID);
		requestID = undefined;
	}
}
startBtn.addEventListener('click', function () {
	animate();
});
stopBtn.addEventListener('click', stopAnimation);
resetBtn.addEventListener('click', function () {
	stopAnimation();
	elem.style.left = "0px";
	startTime = undefined;
});
