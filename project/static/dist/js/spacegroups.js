// This is an object containing 39 space groups present in a subset
var spacegroups = 
{
    'P212121':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2-x,-y,1/2+z],
                    [1/2+x,1/2-y,-z],
                    [-x,1/2+y,1/2-z],
                ]
            }   
    }, 
    'P-1':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [-x,-y,-z],
                ]
            }   
    }, 
    

    'Pbca':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2-x,-y,1/2+z],
                    [1/2+x,1/2-y,-z],
                    [-x,1/2+y,1/2-z],
                    [-x,-y,-z],
                    [1/2+x,y,1/2-z],
                    [1/2-x,1/2+y,z],
                    [x,1/2-y,1/2+z],

                ]
            }   
    }, 
    

    'Pnam':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [-x,-y,1/2+z],
                    [1/2+x,1/2-y,1/2-z],
                    [1/2-x,1/2+y,-z],
                    [-x,-y,-z],
                    [x,y,1/2-z],
                    [1/2-x,1/2+y,1/2+z],
                    [1/2+x,1/2-y,z],

                ]
            }   
    }, 
    

    'P21/n':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2-x,1/2+y,1/2-z],
                    [-x,-y,-z],
                    [1/2+x,1/2-y,1/2+z],

                ]
            }   
    }, 
    

    'P21/c':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [-x,1/2+y,1/2-z],
                    [-x,-y,-z],
                    [x,1/2-y,1/2+z],

                ]
            }   
    }, 
    

    'Pna21':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [-x,-y,1/2+z],
                    [1/2-x,1/2+y,1/2+z],
                    [1/2+x,1/2-y,z],

                ]
            }   
    }, 
    

    'P21':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [-x,1/2+y,-z],

                ]
            }   
    }, 
    

    'R-3m':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [-y,x-y,z],
                    [-x+y,-x,z],
                    [y,x,-z],
                    [2/3+x,1/3+y,1/3+z],
                    [2/3-y,1/3+x-y,1/3+z],
                    [2/3-x+y,1/3-x,1/3+z],
                    [2/3+y,1/3+x,1/3-z],
                    [1/3+x,2/3+y,2/3+z],
                    [1/3+y,2/3+x,2/3-z],
                    [x-y,-y,-z],
                    [-x,-x+y,-z],
                    [1/3-y,2/3+x-y,2/3+z],
                    [1/3-x+y,2/3-x,2/3+z],
                    [1/3+x-y,2/3-y,2/3-z],
                    [1/3-x,2/3-x+y,2/3-z],
                    [2/3+x-y,1/3-y,1/3-z],
                    [2/3-x,1/3-x+y,1/3-z],
                    [-x,-y,-z],
                    [y,-x+y,-z],
                    [x-y,x,-z],
                    [-y,-x,z],
                    [1/3-x,2/3-y,2/3-z],
                    [1/3+y,2/3-x+y,2/3-z],
                    [1/3+x-y,2/3+x,2/3-z],
                    [1/3-y,2/3-x,2/3+z],
                    [2/3-x,1/3-y,1/3-z],
                    [2/3-y,1/3-x,1/3+z],
                    [-x+y,y,z],
                    [x,x-y,z],
                    [2/3+y,1/3-x+y,1/3-z],
                    [2/3+x-y,1/3+x,1/3-z],
                    [2/3-x+y,1/3+y,1/3+z],
                    [2/3+x,1/3+x-y,1/3+z],
                    [1/3-x+y,2/3+y,2/3+z],
                    [1/3+x,2/3+x-y,2/3+z],

                ]
            }   
    }, 
    

    'P41212':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2-y,1/2+x,1/4+z],
                    [-x,-y,1/2+z],
                    [1/2+y,1/2-x,3/4+z],
                    [y,x,-z],
                    [1/2+x,1/2-y,3/4-z],
                    [-y,-x,1/2-z],
                    [1/2-x,1/2+y,1/4-z],

                ]
            }   
    }, 
    

    'Pbn21':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2-x,1/2+y,z],
                    [1/2+x,1/2-y,1/2+z],
                    [-x,-y,1/2+z],

                ]
            }   
    }, 
    

    'P1121/b':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [-x,1/2-y,1/2+z],
                    [-x,-y,-z],
                    [x,1/2+y,1/2-z],

                ]
            }   
    }, 
    

    'Pn21a':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2-x,1/2+y,1/2+z],
                    [1/2+x,y,1/2-z],
                    [-x,1/2+y,-z],

                ]
            }   
    }, 
    

    'C2/c':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2+x,1/2+y,z],
                    [-x,y,1/2-z],
                    [1/2-x,1/2+y,1/2-z],
                    [-x,-y,-z],
                    [1/2-x,1/2-y,-z],
                    [x,-y,1/2+z],
                    [1/2+x,1/2-y,1/2+z],

                ]
            }   
    }, 
    

    'Pnma':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2-x,-y,1/2+z],
                    [1/2+x,1/2-y,1/2-z],
                    [-x,1/2+y,-z],
                    [-x,-y,-z],
                    [1/2+x,y,1/2-z],
                    [1/2-x,1/2+y,1/2+z],
                    [x,1/2-y,z],

                ]
            }   
    }, 
    

    'Pnnm':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [-x,-y,z],
                    [1/2-x,1/2+y,1/2-z],
                    [1/2+x,1/2-y,1/2-z],
                    [-x,-y,-z],
                    [x,y,-z],
                    [1/2+x,1/2-y,1/2+z],
                    [1/2-x,1/2+y,1/2+z],

                ]
            }   
    }, 
    

    'P21/m':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [-x,1/2+y,-z],
                    [-x,-y,-z],
                    [x,1/2-y,z],

                ]
            }   
    }, 
    

    'Pa3':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [z,x,y],
                    [y,z,x],
                    [-x,1/2+y,1/2-z],
                    [-z,1/2+x,1/2-y],
                    [-y,1/2+z,1/2-x],
                    [1/2-x,-y,1/2+z],
                    [1/2-z,-x,1/2+y],
                    [1/2-y,-z,1/2+x],
                    [1/2+x,1/2-y,-z],
                    [1/2+z,1/2-x,-y],
                    [1/2+y,1/2-z,-x],
                    [-x,-y,-z],
                    [-z,-x,-y],
                    [-y,-z,-x],
                    [x,1/2-y,1/2+z],
                    [z,1/2-x,1/2+y],
                    [y,1/2-z,1/2+x],
                    [1/2+x,y,1/2-z],
                    [1/2+z,x,1/2-y],
                    [1/2+y,z,1/2-x],
                    [1/2-x,1/2+y,z],
                    [1/2-z,1/2+x,y],
                    [1/2-y,1/2+z,x],

                ]
            }   
    }, 
    

    'Pca21':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2-x,y,1/2+z],
                    [1/2+x,-y,z],
                    [-x,-y,1/2+z],

                ]
            }   
    }, 
    

    'Cc':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2+x,1/2+y,z],
                    [x,-y,1/2+z],
                    [1/2+x,1/2-y,1/2+z],

                ]
            }   
    }, 
    

    'P43212':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2-y,1/2+x,3/4+z],
                    [1/2+x,1/2-y,1/4-z],
                    [-x,-y,1/2+z],
                    [y,x,-z],
                    [1/2+y,1/2-x,1/4+z],
                    [1/2-x,1/2+y,3/4-z],
                    [-y,-x,1/2-z],

                ]
            }   
    }, 
    

    'P21/a':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2-x,1/2+y,-z],
                    [-x,-y,-z],
                    [1/2+x,1/2-y,z],

                ]
            }   
    }, 
    

    'R3c':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [-y,x-y,z],
                    [-y,-x,1/2+z],
                    [-x+y,-x,z],
                    [x,x-y,1/2+z],
                    [-x+y,y,1/2+z],
                    [1/3+x,2/3+y,2/3+z],
                    [1/3-y,2/3+x-y,2/3+z],
                    [1/3-y,2/3-x,1/6+z],
                    [1/3-x+y,2/3-x,2/3+z],
                    [1/3+x,2/3+x-y,1/6+z],
                    [1/3-x+y,2/3+y,1/6+z],
                    [2/3+x,1/3+y,1/3+z],
                    [2/3-y,1/3+x-y,1/3+z],
                    [2/3-y,1/3-x,5/6+z],
                    [2/3-x+y,1/3-x,1/3+z],
                    [2/3+x,1/3+x-y,5/6+z],
                    [2/3-x+y,1/3+y,5/6+z],

                ]
            }   
    }, 
    

    'I4mm':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2+x,1/2+y,1/2+z],
                    [-y,x,z],
                    [1/2-y,1/2+x,1/2+z],
                    [-x,-y,z],
                    [1/2-x,1/2-y,1/2+z],
                    [y,-x,z],
                    [1/2+y,1/2-x,1/2+z],
                    [-x,y,z],
                    [1/2-x,1/2+y,1/2+z],
                    [y,x,z],
                    [1/2+y,1/2+x,1/2+z],
                    [x,-y,z],
                    [1/2+x,1/2-y,1/2+z],
                    [-y,-x,z],
                    [1/2-y,1/2-x,1/2+z],

                ]
            }   
    }, 
    

    'P42/mbc':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [-y,x,1/2+z],
                    [y,-x,1/2+z],
                    [1/2+y,1/2+x,1/2-z],
                    [-x,-y,z],
                    [1/2-x,1/2+y,-z],
                    [1/2+x,1/2-y,-z],
                    [1/2-y,1/2-x,1/2-z],
                    [-x,-y,-z],
                    [y,-x,1/2-z],
                    [-y,x,1/2-z],
                    [1/2-y,1/2-x,1/2+z],
                    [x,y,-z],
                    [1/2+x,1/2-y,z],
                    [1/2-x,1/2+y,z],
                    [1/2+y,1/2+x,1/2+z],

                ]
            }   
    }, 
    

    'R-3':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/3+x,2/3+y,2/3+z],
                    [2/3+x,1/3+y,1/3+z],
                    [-y,x-y,z],
                    [-x+y,-x,z],
                    [1/3-y,2/3+x-y,2/3+z],
                    [1/3-x+y,2/3-x,2/3+z],
                    [2/3-y,1/3+x-y,1/3+z],
                    [2/3-x+y,1/3-x,1/3+z],
                    [-x,-y,-z],
                    [2/3-x,1/3-y,1/3-z],
                    [1/3-x,2/3-y,2/3-z],
                    [y,-x+y,-z],
                    [x-y,x,-z],
                    [2/3+y,1/3-x+y,1/3-z],
                    [2/3+x-y,1/3+x,1/3-z],
                    [1/3+y,2/3-x+y,2/3-z],
                    [1/3+x-y,2/3+x,2/3-z],

                ]
            }   
    }, 
    

    'C2/m':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [-x,y,-z],
                    [1/2+x,1/2+y,z],
                    [1/2-x,1/2+y,-z],
                    [-x,-y,-z],
                    [x,-y,z],
                    [1/2-x,1/2-y,-z],
                    [1/2+x,1/2-y,z],

                ]
            }   
    }, 
    

    'P4/n':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2-y,x,z],
                    [1/2-x,1/2-y,z],
                    [y,1/2-x,z],
                    [-x,-y,-z],
                    [1/2+y,-x,-z],
                    [1/2+x,1/2+y,-z],
                    [-y,1/2+x,-z],

                ]
            }   
    }, 
    

    'P63/mmc':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [-y,x-y,z],
                    [-x+y,-x,z],
                    [-x,-y,1/2+z],
                    [y,-x+y,1/2+z],
                    [x-y,x,1/2+z],
                    [y,x,-z],
                    [x-y,-y,-z],
                    [-x,-x+y,-z],
                    [-y,-x,1/2-z],
                    [-x+y,y,1/2-z],
                    [x,x-y,1/2-z],
                    [-x,-y,-z],
                    [y,-x+y,-z],
                    [x-y,x,-z],
                    [x,y,1/2-z],
                    [-y,x-y,1/2-z],
                    [-x+y,-x,1/2-z],
                    [-y,-x,z],
                    [-x+y,y,z],
                    [x,x-y,z],
                    [y,x,1/2+z],
                    [x-y,-y,1/2+z],
                    [-x,-x+y,1/2+z],

                ]
            }   
    }, 
    

    'Pcab':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [-x,1/2-y,1/2+z],
                    [1/2+x,-y,1/2-z],
                    [1/2-x,1/2+y,-z],
                    [-x,-y,-z],
                    [x,1/2+y,1/2-z],
                    [1/2-x,y,1/2+z],
                    [1/2+x,1/2-y,z],

                ]
            }   
    }, 
    

    'Fdd2':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [x,1/2+y,1/2+z],
                    [1/2+x,y,1/2+z],
                    [1/2+x,1/2+y,z],
                    [1/4-x,1/4+y,1/4+z],
                    [1/4-x,3/4+y,3/4+z],
                    [3/4-x,1/4+y,3/4+z],
                    [3/4-x,3/4+y,1/4+z],
                    [1/4+x,1/4-y,1/4+z],
                    [1/4+x,3/4-y,3/4+z],
                    [3/4+x,1/4-y,3/4+z],
                    [3/4+x,3/4-y,1/4+z],
                    [1/2-x,-y,1/2+z],
                    [1/2-x,1/2-y,z],
                    [-x,-y,z],
                    [-x,1/2-y,1/2+z],

                ]
            }   
    }, 
    

    'Cmc21':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2+x,1/2+y,z],
                    [-x,y,z],
                    [1/2-x,1/2+y,z],
                    [x,-y,1/2+z],
                    [1/2+x,1/2-y,1/2+z],
                    [-x,-y,1/2+z],
                    [1/2-x,1/2-y,1/2+z],

                ]
            }   
    }, 
    

    'Iba2':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [-x,-y,z],
                    [1/2+x,1/2-y,z],
                    [1/2-x,1/2+y,z],
                    [1/2+x,1/2+y,1/2+z],
                    [1/2-x,1/2-y,1/2+z],
                    [x,-y,1/2+z],
                    [-x,y,1/2+z],

                ]
            }   
    }, 
    

    'I41/a':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2+x,1/2+y,1/2+z],
                    [3/4-y,1/4+x,1/4+z],
                    [1/4-y,3/4+x,3/4+z],
                    [1/2-x,-y,1/2+z],
                    [-x,1/2-y,z],
                    [3/4+y,3/4-x,3/4+z],
                    [1/4+y,1/4-x,1/4+z],
                    [-x,-y,-z],
                    [1/2-x,1/2-y,1/2-z],
                    [1/4+y,3/4-x,3/4-z],
                    [3/4+y,1/4-x,1/4-z],
                    [1/2+x,y,1/2-z],
                    [x,1/2+y,-z],
                    [1/4-y,1/4+x,1/4-z],
                    [3/4-y,3/4+x,3/4-z],

                ]
            }   
    }, 
    

    'Pc':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [x,-y,1/2+z],

                ]
            }   
    }, 
    

    'I41':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2+x,1/2+y,1/2+z],
                    [-y,1/2+x,1/4+z],
                    [1/2-y,x,3/4+z],
                    [-x,-y,z],
                    [1/2-x,1/2-y,1/2+z],
                    [y,1/2-x,1/4+z],
                    [1/2+y,-x,3/4+z],

                ]
            }   
    }, 
    

    'Pbcn':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2-x,1/2-y,1/2+z],
                    [1/2+x,1/2-y,-z],
                    [-x,y,1/2-z],
                    [-x,-y,-z],
                    [1/2+x,1/2+y,1/2-z],
                    [1/2-x,1/2+y,z],
                    [x,-y,1/2+z],

                ]
            }   
    }, 
    

    'Aba2':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [x,1/2+y,1/2+z],
                    [1/2-x,1/2+y,z],
                    [1/2-x,y,1/2+z],
                    [1/2+x,1/2-y,z],
                    [1/2+x,-y,1/2+z],
                    [-x,-y,z],
                    [-x,1/2-y,1/2+z],

                ]
            }   
    }, 
    

    'I2/m':
        {
        'symops': 
            function (p) { 
                var x = p[0], y = p[1], z = p[2];
                return [
                    [x,y,z],
                    [1/2+x,1/2+y,1/2+z],
                    [-x,y,-z],
                    [1/2-x,1/2+y,1/2-z],
                    [-x,-y,-z],
                    [1/2-x,1/2-y,1/2-z],
                    [x,-y,z],
                    [1/2+x,1/2-y,1/2+z],

                ]
            }   
    },

}
