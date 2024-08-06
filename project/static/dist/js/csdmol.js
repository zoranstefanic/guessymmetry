const numCells = 10;
const minCell = 10*scaleFactor;
const maxCell = 15*scaleFactor;
const minGamma = 91;
const maxGamma = 119;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getCell(space_group) {
	var a = getRandom(minCell,maxCell);
	var b = getRandom(minCell,maxCell);
	var gamma = getRandom(minGamma,maxGamma);
	switch(plane_group) {
		case	'p1': return [a,b,gamma];
		case	'p2': return [a,b,gamma];
		case	'pm': return [a,b,90];
		case	'pg': return [a,b,90];
		case 	'cm': return [a,b,90];
		case  'p2mm': return [a,b,90];
		case  'p2mg': return [a,b,90];
		case  'p2gg': return [a,b,90];
		case  'c2mm': return [a,b,90];
		case    'p4': return [a,a,90];
		case  'p4mm': return [a,a,90];
		case  'p4gm': return [a,a,90];
		case    'p3': return [a,a,120];
		case  'p3m1': return [a,a,120];
		case  'p31m': return [a,a,120];
		case    'p6': return [a,a,120];
		case  'p6mm': return [a,a,120];
	}
}

function randomColor () {
    return "hsla(" + Math.random() * 360 + ",90%,50%,0.7)";
    }

function toFractional(p) {
    // Returns fractional coordinates of point x,y for a given cell a,b,gammar
    let x = p[0], y = p[1];
    let fractx = (1/a)*(x - y/Math.tan(gammar));
    let fracty = y/Math.sin(gammar)*(1/b);
    return [fractx % 1,fracty % 1]; // x and y in range [0,1] 
    }

function d2r(angle) {
        return (angle/180)*Math.PI;
    }

function projection(p,cell) {
    // Calculates the xy projection of the 3D point p(x,y,z) 
    // given in fractional coordinates
    // Returns [xp,yp, d] where d is the distance from the plane
    let x = p[0], y = p[1], z = p[2];
    //let a, b, c, alphar, betar, gammar = cell[0], cell[1], cell[2], d2r(cell[3]), d2r(cell[4]), d2r(cell[5]); 
    let xp = x + (z*c)/(a*Math.sin(gammar)**2)*(Math.cos(betar)-Math.cos(gammar)*Math.cos(alpha));
    let yp = y + (z*c)/(b*Math.sin(gammar)**2)*(Math.cos(alphar)-Math.cos(gammar)*Math.cos(betar));
    return [xp,yp];
    }

function toPixel(xfrac,yfrac) {
      var x = a * (xfrac + Math.cos(gammar)*yfrac);
      var y = Math.sin(gammar)*b*yfrac;
      return [x,y];
    }

function draw_cell() { 
    let coords = [[1,1],[2,1],[1,2]].map((aa) => toPixel(aa[0],aa[1]));
    console.log("cell",coords);
    d3.selectAll('.cell').remove();
    svg.append('line')
            .style("stroke", "blue")
            .style("stroke-width", 2)
            .attr("x1", coords[0][0])
            .attr("y1", coords[0][1])
            .attr("x2", coords[1][0])
            .attr("y2", coords[1][1])
            .attr('class', 'cell');
    svg.append('line')
            .style("stroke", "red")
            .style("stroke-width", 2)
            .attr("x1", coords[0][0])
            .attr("y1", coords[0][1])
            .attr("x2", coords[2][0])
            .attr("y2", coords[2][1])
            .attr('class', 'cell');
    svg.append('circle')
            .attr('class','endpoint')
            .attr('cx',coords[1][0])
            .attr('cy',coords[1][1])
            .attr('r',5)
            .attr('class', 'cell');
    svg.append('circle')
            .attr('class','endpoint')
            .attr('cx',coords[2][0])
            .attr('cy',coords[2][1])
            .attr('r',5)
            .attr('class', 'cell');
    }

function generateCells1(p){
    //calculates the symmetry postions of point p=[x,y] given in fractionals
	var x = p[0], y = p[1], elem=p[2];
    var positions = [];
	for (i = -1; i <= numCells; i++) {
		for (j = -1; j <= numCells; j++) {
            // Here again convert to pixel coordinates by inverse transformation
            positions.push([(i + x)*a + (j+y)*b*Math.cos(gammar), (j+y)*b*Math.sin(gammar), elem]);
		}
	}
	return positions;
    }

function generateCells(p){
    //calculates the symmetry postions of point p=[x,y] given in fractionals
	var x = p[0], y = p[1];
    var positions = [];
	for (i = -1; i <= numCells; i++) {
		for (j = -1; j <= numCells; j++) {
            // Here again convert to pixel coordinates by inverse transformation
            positions.push([(i + x)*a + (j+y)*b*Math.cos(gammar), (j+y)*b*Math.sin(gammar), p[2]]);
		}
	}
	return positions;
    }

function draw_symmetry(p,plane_group) {
        //for a given point calculate all symmetry equivalent positions in all cells.
        var coordinates = [];

		var symops = planegroups[plane_group]['symops'](p);	
		for ( k=0; k < symops.length; k++) {       
        	coordinates = coordinates.concat(generateCells(symops[k]));
		}
		return coordinates;
    }

function drawCircles(positions,group) {
    var circles = group.selectAll('circle');
    circles.data(positions)
    .enter().append("circle")
    .attr("cx", function(d) { return d[0]; })
    .attr("cy", function(d) { return d[1]; })
    .attr('class', 'click-circle')
    .attr("r", getRandom( 25,40))
    .style("fill", randomColor());
    }

function draw_random_circles() {
    let xpoints = Array.from({length: 10}, () => Math.random()*500);
    let ypoints = Array.from({length: 10}, () => Math.random()*500);
    const zip = (a, b) => a.map((k, i) => [k, b[i]]);
    let points = zip(xpoints,ypoints);
    svg.on('click', function() {
        if (d3.event.defaultPrevented) return; // Dragged
        var p = [d3.mouse(this)[0], d3.mouse(this)[1]]
		var group = svg.append('g'); //Append another group that will hold this point and it's sym eq.

		//Calculate the fractional position point p in point group pg
	    var x = toFractional(p)[0], y = toFractional(p)[1];
        console.log(x,y)
        //positions = draw_symmetry([x,y],plane_group);
		drawCircles(points,group);
        svg.selectAll("circle").call(drag);
    });
    }

//Dragging part
var drag = d3.drag()
    //.subject(function(d) { return {x: d[0], y: d[1]}; })
    .on("start", dragstart)
    .on("drag", dragged)
    .on("end", dragended);

function dragstart(d) {
    d3.select(this).classed("dragged", true);
    d3.select(this).raise().attr("stroke", "black");
    }

function dragged(d) {
    d3.select(this).attr("cx",d3.event.x).attr("cy", d3.event.y);
    var group = d3.select(this.parentNode).selectAll('circle');
    console.log(group);
    var p = [d3.mouse(this)[0], d3.mouse(this)[1]];
    var x = toFractional(p)[0], y = toFractional(p)[1];
    var new_positions = draw_symmetry([x,y], plane_group);

    group.data(new_positions)
    .attr('cx', function(d) {return d[0];})
    .attr('cy', function(d) {return d[1];});
    }

function dragended(d) {
    d3.select(this).classed("dragged", false);
    }

function draw() {
	//On click draw 
    svg.on('click', function() {
        if (d3.event.defaultPrevented) return; // Dragged
        var p = [d3.mouse(this)[0], d3.mouse(this)[1]]
		var group = svg.append('g'); //Append another group that will hold this point and it's sym eq.

		//Calculate the fractional position point p in point group pg
	    var x = toFractional(p)[0], y = toFractional(p)[1];
        positions = draw_symmetry([x,y],plane_group);
		drawCircles(positions,group);

        svg.selectAll("circle").call(drag);
    });
    }
