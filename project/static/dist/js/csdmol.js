const scaleFactor = 200;
const numCells = 2;
const minCell = 10*scaleFactor;
const maxCell = 15*scaleFactor;
const minGamma = 91;
const maxGamma = 119;

function center_of_mass(mol) {
    let arr = mol.coords;
    let cx = 0, cy=0, cz = 0;
    for (let i = 0; i< arr.length; i++) { cx += arr[i][0]; cy += arr[i][1]; cz += arr[i][2]};
    console.log('com',[cx/arr.length,cy/arr.length,cz/arr.length]);
    return [cx/arr.length,cy/arr.length,cz/arr.length];
    }

function draw_molecule(mol) {
    let a = mol.coords;
    d3.select('.svg').selectAll('.mol').data(a)
    .join("circle")
    .attr("cx", a => a[0])
    .attr("cy", a => a[1])
    .attr("opacity", a => a[2])
    .attr('class', a => 'atom' + a[3] +' mol')
    .attr("r", 22)
    .attr("stroke",'black')
    .attr("stroke-width",'1')
    return mol;
    }

function draw_sym_mates() {
    let a = mol.sym_positions;
    d3.select('.svg').selectAll('.sym').data(mol.sym_positions)
    .join("circle")
    .attr("cx", function(a) { return  a[0]; })
    .attr("cy", function(a) { return  a[1]; })
    //.attr('class', function (a) { return 'atom' + a[2] +' sym' })
    .attr('class', function (a) { return 'atomO' +' sym' })
    //.attr('class', 'sym')
    .attr("r", 22)
    return mol;
    }

function generate_symmetry_mates(mol,space_group) {
    mol.sym_positions = [];
    for (p of mol.coords) {
        let x = p[0], y = p[1], z=p[2];
        p = toFractional([x,y],space_group).concat(p[2]);
        let symops = spacegroups[space_group]['symops'](p);	
        //console.log('symops',symops);
            for ( k=0; k < symops.length; k++) {       
               mol.sym_positions = mol.sym_positions.concat(generateCells(symops[k].concat(p[2])));
            }
    }
    return mol;
    }

function generate_symmetry_mates1(mol,space_group) {
    mol.sym_positions = [];
    for (p of mol.mol) {
        let x = p[0], y = p[1], z=p[2], elem = p[3];
        let symops = spacegroups[space_group]['symops'](p);	
            console.log('symops',symops);
            for ( k=0; k < symops.length; k++) {       
               mol.sym_positions = mol.sym_positions.concat([symops[k].concat(elem)]);
            }
    }
    return mol;
    }

function move_here() {
    // Moves the molecule at 
    d3.select('.svg').on('click', function() {
        if (d3.event.defaultPrevented) return; // Dragged
        let p = [d3.mouse(this)[0], d3.mouse(this)[1]]; // Mouse click point
        let t = [p[0] - mol.com[0] + com_init[0] ,p[1] - mol.com[1] + com_init[1] ]; // Translation to apply
        d3.selectAll('.mol').raise();
        d3.selectAll('.mol')
        .transition()
        .duration(200)
        .style('transform','translate(' + p[0]+'px,' + p[1] +'px)');
        mol.coords = mol.coords.map(pt => [pt[0] + t[0], pt[1] + t[1], pt[2]]);
        mol.com = center_of_mass(mol); // Update the center of mass upon translation
        generate_symmetry_mates1(mol,space_group);
        draw_sym_mates();
    });
    }

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
      //console.log(x,y);
      return [x*scaleFactor,y*scaleFactor];
    }

function draw_cell() { 
    let coords = [[a,b],[2*a,b],[a,2*b]].map((aa) => toPixel(aa[0],aa[1]));
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
            .attr('r',1)
            .attr('class', 'cell');
    svg.append('circle')
            .attr('class','endpoint')
            .attr('cx',coords[2][0])
            .attr('cy',coords[2][1])
            .attr('r',1)
            .attr('class', 'cell');
    }

function generateCells(p){
    //calculates the symmetry postions of point p=[x,y] given in fractionals
	var x = p[0], y = p[1], elem=p[2];
    var positions = [];
	for (i = -1; i <= numCells; i++) {
		for (j = -1; j <= numCells; j++) {
            // Here again convert to pixel coordinates by inverse transformation
            positions.push([(i + x)*a + (j+y)*b*Math.cos(gammar), (j+y)*b*Math.sin(gammar), elem]);
		}
	}
    //console.log('positions',positions);
	return positions;
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
		drawCircles(points,group);
        svg.selectAll("circle").call(drag);
    });
    }
