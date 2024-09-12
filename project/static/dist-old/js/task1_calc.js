function randomColor () {
  return "hsla(" + Math.random() * 360 + ",90%,50%,0.7)";
   };

function toFractional(p) {
  // Returns fractional coordinates of point x,y for a given cell a,b,gammar
  var x = p[0], y = p[1];
  var fractx = (1/a)*(x - y/Math.tan(gammar));
  var fracty = y/Math.sin(gammar)*(1/b);
  return [fractx % 1,fracty % 1]; // x and y in range [0,1] 
}

function toPixel(xfrac,yfrac) {
  var x = (a*xfrac + Math.cos(gammar)*yfrac);
  var y = Math.sin(gammar)*b*yfrac;
  return [x,y];
}

function generateCells(p){
	var x = p[0], y = p[1];
    var positions = [];
	for (i = -1; i <= numCells; i++) {
		for (j = -1; j <= numCells; j++) {
            // Here again convert to pixel coordinates by inverse transformation
            positions.push([(i + x)*a + (j+y)*b*Math.cos(gammar), (j+y)*b*Math.sin(gammar)]);
		}
	}
	return positions;
}

function draw_symmetry(p,plane_group) {
        var coordinates = [];

		var symops = planegroups[plane_group]['symops'](p);	
		for ( k=0; k < symops.length; k++) {       
        	coordinates = coordinates.concat(generateCells(symops[k]));
		}
		return coordinates;
};

function drawCircles(positions,group) {
    var circles = group.selectAll('circle');
    circles.data(positions)
    .enter().append("circle")
    .attr("cx", function(d) { return d[0]; })
    .attr("cy", function(d) { return d[1]; })
    .attr('class', 'click-circle')
    .attr("r", getRandom(10,30))
    .style("fill", randomColor());
};

