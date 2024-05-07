
function randomColor () {
  return "hsla(" + Math.random() * 360 + ",90%,50%,0.7)";
   };

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomCell(min, max) {
  var a = Math.floor(Math.random() * (max - min) + min);
  var b = Math.floor(Math.random() * (max - min) + min);
  var gamma = getRandom(80,120);
  var gamma = 90;
  return [a,a,gamma];
}
    
function toFractional(x,y) {
  var fractx = (1/a)*(x - y/Math.tan(gammar));
  var fracty = y/Math.sin(gammar)*(1/b);
  return [fractx,fracty];
}

function toPixel(xfrac,yfrac) {
  var x = (a*xfrac + Math.cos(gammar)*yfrac);
  var y = Math.sin(gammar)*b*yfrac;
  return [x,y];
}

function generateSymmetryPositions(x,y){
        var coords = []
        fractx = x % 1;
        fracty = y % 1;
        for (i = 0; i <= numCells; i++) {
            for (j = 0; j <= numCells; j++) {
                coords.push([(i + fractx)*a + (j+fracty)*b*Math.cos(gammar), (j+fracty)*b*Math.sin(gammar)]); 
            }
        }
        return coords;
    }

function drawCircle(x, y, size, color) {
    var positions = generateSymmetryPositions(x,y);
    var group = svg.append('g')
    .selectAll('circle')
    .data(positions)
    .enter().append("circle")
    .attr('class', 'click-circle')
    .attr("cx", function(d) { return d[0]; })
    .attr("cy", function(d) { return d[1]; }) 
    .attr("r", size)
    .style("fill", color)
}

