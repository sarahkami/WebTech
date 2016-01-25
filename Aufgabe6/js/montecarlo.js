function updateAccuracy (){
  var input = document.getElementById('slide1').value;
  var output = document.getElementById('accuracy');
   output.value = input;
};

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

//Main function for the animation, executed by button click "start"
montecarlo = function () {
  (function () {
    var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();

  var canvas = document.getElementById('window'),
      calcContext = document.getElementById('context').getContext('2d'), //throwctx

      pi = document.getElementById('pi'),
      dots = document.getElementById('dots'),
      stop = document.getElementById('stop'),
      stop = false;
      inside = 0,
      outside = 0,
      total = 0,


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

    //document.getElementById('stop').addEventListener("click", alert("Stop is clicked"));

    function loop(){

      var speed = document.getElementById('speed').value;

      for (var i = 0; i < 50; i++){
        drawDot();
      }
      setTimeout(loop, speed); //0 = geschwindigkeit, clearTimeout() to prevent the function from running
    }



    //document.getElementById('stop').addEventListener("click", endLoop);
  /**function endLoop(){
    if (loop() == true)
    document.getElementById('start').disabled = true;
  }**/


    // sets how fast the function will be performed, 0 = initially
      setTimeout(loop, 0);
  };



/**
          function download() {
            var image = document.getElementById('wrap');
            var blob = new Blob ([image], {type:text/html});

          };



/**
function updateInput(){
  var i = document.getElementById('slide'),
      o = document.getElementById('accuracy');

  o.innerHTML = i.value;
  i.addEventListener('change', function () {
    o.innerHTML = i.value;
  }, false);
}
**/
