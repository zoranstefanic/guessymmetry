var numCells = 10;
var minCell = 200;
var maxCell = 400;
var minGamma = 91;
var maxGamma = 119;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getCell(plane_group) {
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


// This is an object containing all 17 plane groups
var planegroups = 
{
	'p1':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
				]
			}
    },
	'p2':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
                    [-x,-y],
				]
			}
    },
	'pm':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
                    [-x,y],
				]
			}
    },
	'pg':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
                    [-x,y+0.5],
				]
			}
    },
	'cm':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
                    [-x,y],
                    [x+0.5,y+0.5],
                    [-x+0.5,y+0.5],
				]
			}
    },
	'p2mm':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
                    [-x,-y],
                    [-x,y],
                    [x,-y],
				]
			}
    },
	'p2mg':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
                    [-x,-y],
                    [-x+0.5,y],
                    [x+0.5,-y],
				]
			}
    },
	'p2gg':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
                    [-x,-y],
                    [-x+0.5,y+0.5],
                    [x+0.5,-y+0.5],
				]
			}
    },
	'c2mm':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
                    [-x,-y],
                    [-x,y],
                    [x,-y],
                    [x+0.5,y+0.5],
                    [-x+0.5,-y+0.5],
                    [-x+0.5,y+0.5],
                    [x+0.5,-y+0.5],
				]
			}
    },
	'p4':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
                    [-x,-y],
                    [-y,x],
                    [y,-x],
                    ]
			}
    },
	'p4mm':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
                    [-x,-y],
                    [-y,x],
                    [y,-x],
                    [-x,y],
                    [ x,-y],
                    [ y,x],
                    [-y,-x],
                    ]
			}
    },
	'p4gm':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
                    [-x,-y],
                    [-y,x],
                    [y,-x],
                    [-x+0.5,y+0.5],
                    [ x+0.5,-y+0.5],
                    [ y+0.5,x+0.5],
                    [-y+0.5,-x+0.5],
                    ]
			}
    },
	'p3':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
                    [-y,x-y],
                    [y-x,-x],
                    ]
			}
    },
	'p3m1':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
                    [-y,x-y],
                    [y-x,-x],
                    [-y,-x],
                    [y-x,y],
                    [x,x-y],
                    ]
			}
    },
	'p31m':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
                    [-y,x-y],
                    [y-x,-x],
                    [y,x],
                    [x-y,-y],
                    [-x,y-x],
                    ]
			}
    },
	'p6':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
                    [-y,x-y],
                    [y-x,-x],
                    [-x,-y],
                    [y,y-x],
                    [x-y,x],
                    ]
			}
    },
	'p6mm':
		{
        'symops': 
			function (p) { 
            	var x = p[0], y = p[1];
                return [
                    [x,y],
                    [-y,x-y],
                    [y-x,-x],
                    [-x,-y],
                    [y,y-x],
                    [x-y,x],
                    [-y,-x],
                    [y-x,y],
                    [x,x-y],
                    [ y, x],
                    [x-y,-y],
                    [-x,y-x],
                    ]
			}
    }
}
