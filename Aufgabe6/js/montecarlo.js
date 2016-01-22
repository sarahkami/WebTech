function draw(){
  var canvas = document.getElementById('window');
  if(canvas.getContext){
    var ctx = canvas.getContext('2d');

    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 150;
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);;
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
}
