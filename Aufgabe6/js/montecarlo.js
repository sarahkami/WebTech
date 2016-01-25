//update Texfield "Genauigkeit" by slider onChange
function updateAccuracy (){
  var input = document.getElementById('slide1').value;
  var output = document.getElementById('accuracy');
   output.value = input;
};

//update Texfield "Geschwindigkeit" by slider onChange
function updateSpeed (){
  var input = document.getElementById('slide2').value;
  var output = document.getElementById('speed');
   output.value = input;
};

//draw Canvas initially by loading the website
function drawCanvas(){
  var canvas = document.getElementById('window'),
      ctx = canvas.getContext('2d'),
      x = canvas.width / 2,
      y = canvas.height / 2,
      radius = 150;

    //draw circle on canvas
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.stroke();
};


window.onload = function(){
  drawCanvas();
  montecarlo.init();
  document.getElementById('start').addEventListener('click', montecarlo.start);
  document.getElementById('stop').addEventListener('click', montecarlo.stop);
}


//Main function for the animation, executed by button click "start"
var montecarlo = (function () {

  var running, canvas, calcContext, pi, dots, stop,
      inside, outside, total, redDot, greenDot;

  var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;

  function init(){
    canvas = document.getElementById('window');
    calcContext = document.getElementById('context').getContext('2d');
    pi = document.getElementById('pi');
    dots = document.getElementById('dots');
    //stop = document.getElementById('stop');
    inside = 0;
    outside = 0;
    total = 0;

    //create red ImageData with 1px length
    dotRed = calcContext.createImageData(1,1);
    dotRed.data[0] = 255;
    dotRed.data[1] = 0;
    dotRed.data[2] = 0;
    dotRed.data[3] = 255;

    //create green ImageData with 1px length
    dotGreen = calcContext.createImageData(1,1);
    dotGreen.data[0] = 0;
    dotGreen.data[1] = 255;
    dotGreen.data[2] = 0;
    dotGreen.data[3] = 255;

    // sets how fast the function will be performed, 0 = initially
    setTimeout(loop, 0);
  }

  function start(){
    running = true;
  }

  function stop(){
    running = false;
  }

  //calculate Pi by passing in the requested decimal place
  function calcPi(){
    var decimal = document.getElementById('accuracy').value;
        pi.value = parseFloat((4 * inside / total).toFixed(decimal));
  };

  /**
  this function draws a random dot on the canvas,
  if the dot is inside the circle it's green, otherweise red.
  It counts the total of dots and sets the content of textfield ("Punkte").
  It sets the value of PI to textfield ("Aktueller Wert").
  **/
  function drawDot(){
    var x = Math.random() * 2 - 1,
        y = Math.random() * 2 - 1;
    // if dot is inside the circle
    //math.pow = square number of x/y, <= less than or equal to
    if (Math.pow(x, 2) + Math.pow(y, 2) <= 1){
        ++ inside;
        var hit = dotGreen;
    } else{
        ++ outside;
        var hit = dotRed;
    }
    ++ total;
    //recalculate "Punkte"
    dots.value = total;
    //recalculate PI "Aktueller Wert"
    calcPi();
    //draw dot
    var dotx = (x + 1) / 2 * canvas.width,
        doty = (y + 1) / 2 * canvas.height;
    calcContext.putImageData(hit, dotx, doty);
  };

  function loop(){
    var speed = document.getElementById('speed').value;

    if (running) {
      for (var i = 0; i < speed; i++){
        drawDot();
      }
    }
    setTimeout(loop, 50); //0 = geschwindigkeit, clearTimeout() to prevent the function from running
  }

  return {init: init, start: start, stop: stop};
})();
