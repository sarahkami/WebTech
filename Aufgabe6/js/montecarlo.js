var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

//draw circle on canvas
function drawCircle(){
  var canvas = document.getElementById('window');
  if(canvas.getContext){
    var ctx = canvas.getContext('2d');

    var x = canvas.width / 2,
        y = canvas.height / 2,
        radius = 150;
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
}

function drawDot(x,y,canvas){
  var canvas = document.getElementById('window');
  var ctx = canvas.getContext('2d');
  ctx.fillRect(x,y,1,1);

/** if Dot in circle{
      fillStyle = "red";
      fillRect(x,y,1,1); // must be random rect
    else{
      fillStyle = "green";
      fillRect(x,y,1,1); //must be random rect
    }
}**/
  }

function updateInfo (){
  var input = document.getElementById('slide').value;
  var output = document.getElementById('accuracy');
   output.innerHTML = input;
}

/**
function updateInput(){
  var i = document.getElementById('slide'),
      o = document.getElementById('accuracy');

  o.innerHTML = i.value;
  i.addEventListener('change', function () {
    o.innerHTML = i.value;
  }, false);
}

/**
    function updateValue(accuracy) {
        var slider = document.getElementById('slide');
        var accuracy = document.getElementById('accuracy');
        if(window.addEventListener){
          slider.attachEvent('onchange', function (){
            accuracy.innerHTML = slider.value;
            window.resizeTo(parseInt(slider.value), 400);
          })
        }
    }


    function Aendern(){
      var update = "2";
      document.getElementById("accuracy").innerHTML = update;
    }

/**
  var slide = document.getElementById("slide").value;
  var buttonInput = document.getElementById("btn");

  if (buttonInput.addEventListener) {
      buttonInput.addEventListener("click", testtest, false);
  }
  else if (buttonInput.attachEvent) {
      buttonInput.attachEvent('onclick', testtest);
  }

  function testtest(e) {
      if (rangeInput > 0 && rangeInput < 5) {
          alert("First");
      } else {
          alert("Second");
      }
  }



/**
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
**/
