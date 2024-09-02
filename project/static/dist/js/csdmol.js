const scaleFactor = 30;

// Help on what is what
//mol.mol           ---> original fractional coordinates of one molecule [N x [4]] 
//mol.coords        ---> coordinates of molecule in abc frame [N x [4]]
//mol.sym_frac      ---> fractional coordinates of all sym. eq. positions [z x N x [4]]
//mol.sym_frac_uc   ---> fractional coordinates of all sym. eq. mapped to main unit cell [z x N x [4]]
//mol.sym_coords    ---> coordinates of all sym.eq. points in abc frame [z x N x [5]] <-- 5th element is the fractional z coordinate used for opacity!

function d2r(angle) {
        return (angle/180)*Math.PI;
    }

function mol_coords(mol){
    // 1.
    //creates new array mol.coords
    mol.coords = mol.mol.map(x => [a*x[0]*scaleFactor, b*x[1]*scaleFactor,c*x[2]*scaleFactor, x[3]]);
    }

function draw_molecule(mol) {
    let a = mol.coords.map(toPixel_xy);
    d3.select('.svg-xy').selectAll('.mol').data(a)
    .join("circle")
    .attr("cx", a => a[0])
    .attr("cy", a => a[1])
    .attr("opacity", a => a[2]/scaleFactor) //!FIXME -> this opacity is not right!
    .attr('class', a => 'atom' + a[3] +' mol')
    .attr("r", 22)
    .attr("stroke",'black')
    .attr("stroke-width",'2')
    return mol;
    }

function create_sym_frac(mol,space_group) {
    //Takes frac. coordinates of one molecule and 
    //creates mol.sym_frac array of all symmetry equivalent 
    //positions (not necessarily in the main unit cell!)
    mol.sym_frac = [];
    for (p of mol.mol) {
        let x = p[0], y = p[1], z=p[2], elem = p[3];
        let symops = spacegroups[space_group]['symops'](p);	
            for ( k=0; k < symops.length; k++) {       
               mol.sym_frac = mol.sym_frac.concat([symops[k].concat(elem)]);
            }
        }
    }

function to_main_cell(x) {
    //Helper function which maps the 1.2323 --> 0.232
    //                           and -1.232 --> 0.768
    //it is used to map all the sym. eq. points to the main unit cell
    if (x >= 0) { return x%1} else {return (1+x%1)%1};
    }

function map_to_main_cell() {
    //Maps the array mol.sym_frac array of all symmetry equivalent 
    //positions to the main cell (creates new array mol.sym_frac_uc)
    mol.sym_frac_uc = mol.sym_frac.map(x => [to_main_cell(x[0]), to_main_cell(x[1]), to_main_cell(x[2]), x[3]]);
    mol.sym_frac_uc = mol.sym_frac_uc.map(projection_xy);
    //return mol;
    }

function calc_uc_coord(){
    //Transform the fractional coordinates of all sym.eq. positions
    //to coordinates in the unit cell frame. 
    //creates new array mol.sym_coords
    var numCells = 1;
    var positions = [];
	for (i = -1; i <= numCells; i++) {
		for (j = -1; j <= numCells; j++) {
                for (p of mol.sym_frac_uc) {
                    positions.push([p[0] + i, p[1] + j, p[2], p[3]]);
                }
            }
		}
    mol.sym_frac_uc = positions;
    mol.sym_coords = mol.sym_frac_uc.map(x => [a*x[0]*scaleFactor, b*x[1]*scaleFactor,c*x[2]*scaleFactor, x[3], x[2]]);
    mol.sym_coords.sort( function (a,b) {return a[4]-b[4];} ); // sort by z coordinate 
    }

function draw_sym_mates_xy() {
    let a = mol.sym_coords.map(toPixel_xy);
    d3.select('.svg-xy').selectAll('.sym').data(a)
    .join("circle")
    .attr("cx", a => a[0])
    .attr("cy", a => a[1])
    .attr('class', function(a) { return 'atom' + a[3] + ' sym' })
    .attr('opacity', a => a[4])
    return mol;
    }

function draw_sym_mates_xz() {
    let a = mol.sym_coords.map(toPixel_xz);
    d3.select('.svg-xz').selectAll('.sym').data(a)
    .join("circle")
    .attr("cx", a => a[0])
    .attr("cy", a => a[1])
    .attr('class', function(a) { return 'atom' + a[3] + ' sym' })
    .attr('opacity', a => a[4])
    return mol;
    }

function draw_sym_mates_yz() {
    let a = mol.sym_coords.map(toPixel_yz);
    d3.select('.svg-yz').selectAll('.sym').data(a)
    .join("circle")
    .attr("cx", a => a[0])
    .attr("cy", a => a[1])
    .attr('class', function(a) { return 'atom' + a[3] + ' sym' })
    .attr('opacity', a => a[4])
    return mol;
    }

function center_of_mass(mol) {
    let arr = mol.coords;
    let cx = 0, cy=0, cz = 0;
    for (let i = 0; i< arr.length; i++) { cx += arr[i][0]; cy += arr[i][1]; cz += arr[i][2]};
    //console.log('com',[cx/arr.length,cy/arr.length,cz/arr.length]);
    return [cx/arr.length,cy/arr.length,cz/arr.length];
    }

function move_here() {
    // Moves the molecule at 
    d3.select('.svg-xy').on('click', function() {
        if (d3.event.defaultPrevented) return; // Dragged
        let p = [d3.mouse(this)[0], d3.mouse(this)[1]]; // Mouse click point
        let t = [p[0] - mol.com[0] + com_init[0] ,p[1] - mol.com[1] + com_init[1] ]; // Translation to apply
        d3.selectAll('.mol').raise();
        d3.selectAll('.mol')
        .transition()
        .duration(200)
        .style('transform','translate(' + p[0]+'px,' + p[1] +'px)');
        mol.coords = mol.coords.map(pt => [pt[0] + t[0], pt[1] + t[1], pt[2], pt[3]]);
        mol.com = center_of_mass(mol); // Update the center of mass upon translation
        update();
        });
    }

function toFractional(p) {
    // Returns fractional coordinates of point x,y for a given cell a,b,gammar
    let x = p[0], y = p[1];
    let fractx = (1/a)*(x - y/Math.tan(gammar));
    let fracty = y/Math.sin(gammar)*(1/b);
    return [fractx % 1,fracty % 1]; // x and y in range [0,1] 
    }

function toPixel_xy(p) {
    // Transforms fractional coordinates from the abc coordinate system
    // to orthogonal canvas coordinates.
    var xfrac = p[0], yfrac = p[1], op = p[4];
    var x = (xfrac + Math.cos(gammar)*yfrac);
    var y = Math.sin(gammar)*yfrac;
    return [x,y,op,p[3],op];
    }

function toPixel_xz(p) {
    var xfrac = p[0], zfrac = p[2], op = p[4];
    var x = (xfrac + Math.cos(betar)*zfrac);
    var z = Math.sin(betar)*zfrac;
    return [x,z,op,p[3],op];
    }

function toPixel_yz(p) {
    var yfrac = p[1], zfrac = p[2], op = p[4];
    var y = (yfrac + Math.cos(alphar)*zfrac);
    var z = Math.sin(alphar)*zfrac;
    return [z,y,op,p[3],op];
    }

function projection_xy(p,cell) {
    // Calculates the xy projection of the 3D point p(x,y,z) 
    // given in fractional coordinates
    // Returns [xp, yp, d] where d is the distance from the plane
    let x = p[0], y = p[1], z = p[2], t = p[3];
    //let a, b, c, alphar, betar, gammar = cell[0], cell[1], cell[2], d2r(cell[3]), d2r(cell[4]), d2r(cell[5]); 
    let xp = x + (z*c)/(a*Math.sin(gammar)**2)*(Math.cos(betar)-Math.cos(gammar)*Math.cos(alphar));
    let yp = y + (z*c)/(b*Math.sin(gammar)**2)*(Math.cos(alphar)-Math.cos(gammar)*Math.cos(betar));
    return [xp,yp,z,t];
    }

function projection_xz(p,cell) {
    // Calculates the xz projection of the 3D point p(x,y,z) 
    // given in fractional coordinates
    // Returns [xp, zp, d] where d is the distance from the plane
    let x = p[0], y = p[1], z = p[2], t = p[3];
    // x y z a b c alpha beta gama ---> 
    let xp = x + (y*b)/(a*Math.sin(betar)**2)*(Math.cos(gammar)-Math.cos(betar)*Math.cos(alphar));
    let zp = z + (y*b)/(c*Math.sin(betar)**2)*(Math.cos(alphar)-Math.cos(betar)*Math.cos(gammar));
    return [xp,zp,y,t];
    }

function draw_cell() { 
    let coords = [[0,0,0,''],[1,0,0,''],[0,1,0,''],].map(toPixel_xy);
    coords = coords.map(xx => [a*xx[0]*scaleFactor, b*xx[1]*scaleFactor, c*xx[2]*scaleFactor, '']);
    console.log(coords);
    d3.selectAll('.cell').remove();
    svg.append('line')
            .style("stroke", "blue")
            .style("stroke-width", 5)
            .attr("x1", coords[0][0])
            .attr("y1", coords[0][1])
            .attr("x2", coords[1][0])
            .attr("y2", coords[1][1])
            .attr('class', 'cell');
    svg.append('line')
            .style("stroke", "red")
            .style("stroke-width", 5)
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

function move(direction,amount) {
    switch (direction) {
        case '-x': var t = [-amount,0.0,0.0];
        case '+x': var t = [amount,0.0,0.0];
        case '-y': var t = [0.0,-amount,0.0];
        case '+y': var t = [0.0,amount,0.0];
        case '-z': var t = [0.0,0.0,-amount];
        case '+z': var t = [0.0,0.0,amount];
    }
    function moved () {
        mol.mol = mol.mol.map(a => [a[0] + t[0], a[1] + t[1], a[2] + t[2], a[3]]);
        update();
    }
    return moved; 
    };

function what_is_the_answer(event) {
                var right_answer = $('#right_answer').text();
                $('#click_result').html("<h2 style='color:green'>"+space_group+"</h2>");
                };
