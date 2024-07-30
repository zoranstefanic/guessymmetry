from cc
from ccdc import io
teaching_reader = io.EntryReader(subset=io.Subsets.TEACHING)
teaching_reader
teaching_reader.entries()
list(teaching_reader.entries())
entry_one = teaching_reader.entries()[0]
entry_one = teaching_reader.identifier
teaching_reader.identifier
teaching_reader.identifier()
teaching_reader.identifier('ABABEL')
teaching_reader.identifier?
teaching_reader.identifier(0)
teaching_reader.identifier(100)
teaching_reader.identifier(1)
teaching_reader.entries(0)
teaching_reader.entries?
ababel = teaching_reader.entry('ABABEL')
ababel
ababel.chemical_name
ababel.formula
ababel.crystal
ababel.crystal.cell_angles
ababel.crystal.cell_lengths
ababel.crystal.spacegroup_symbol
ababel.crystal
ababel.crystal.symmetry_operator
ababel.crystal.symmetry_operators
from ccdc.diagram import DiagramGenerator
mol = ababel.molecule
mol.atoms
mol.molecular_volume()
mol.molecular_volume
dg = DiagramGenerator()
img = dg.image(mol)
img.save?
img.save('img.png')
ls -lrt
pwd
dg.settings.line_width
dg.settings.line_width = 3.0
dg.settings.image_height = 500
dg.settings.image_width = 500
img = dg.image(mol)
cd
img.save('img.png')
ls -lrt
dg.settings.font_size
dg.settings.font_size = 30
img = dg.image(mol)
img.save('img.png')
mol.all_atoms_have_sites
mol.atoms
mol.centre_of_geometry()
ababel
ababel.crystal
ababel.crystal.asymmetric_unit_molecule
for a in ababel.molecule.atoms():
    print a
for a in ababel.molecule.atoms():
    print(a)
for a in ababel.molecule.atoms:
    print(a)
a
a.fractional_coordinates
c = a.fractional_coordinates
c.x
miller = ababel.crystal.miller_indices(1,0,0)
hkl100 = ababel.crystal.miller_indices(1,0,0)
hkl100
hkl100.crystal
hkl100.d_spacing
hkl100.plane
a.coordinates
from ccdc.crystal import PackingSimilarity
PackingSimilarity?
ps = PackingSimilarity()
ps.compare?
ababel.crystal
c1 = ababel.crystal
c1
abegiy = teaching_reader.entry('ABEGIY')
c1 = abegiy.crystal
c1 = ababel.crystal
c2 = abegiy.crystal
c1.cell_lengths
c2.cell_lengths
ps.compare(c1,c2)
c1_c2_compare = ps.compare(c1,c2)
c1_c2_compare
ps.settings
ps.settings.allow_molecular_differences
ps.settings.allow_molecular_differences = True
c1_c2_compare = ps.compare(c1,c2)
c1_c2_compare
c1_c2_compare.rmsd
c1_c2_compare.reference
from ccdc.descriptors import GeometricDescriptors
GeometricDescriptors.Plane()
p = GeometricDescriptors.Plane()
p = GeometricDescriptors.Plane([1,0,0])
p = GeometricDescriptors.Plane([1,0,0],1)
p
p.from_points?
abegiy.molecule.atoms
[a.fractional_coordinates for a in abegiy.molecule.atoms]
coords = [a.fractional_coordinates for a in abegiy.molecule.atoms]
p = GeometricDescriptors.Plane.from_points(coords)
coords[0]
coords[0].x
coords
[[c.x, c.y,c.z] for c in coords]
points = tuple([[c.x, c.y,c.z] for c in coords])
points
p = GeometricDescriptors.Plane.from_points(*points)
p
p
[p.plane_distance(c) for c in points]
pointe
points
p.plane_distance?
p.point_distance?
[p.point_distance(c) for c in points]
hk
hkl100.plane
hkl100.plane
hkl100
hkl100.plane.plane_distance(p)
[hkl100.point_distance(c) for c in points]
[hkl100.plane.point_distance(c) for c in points]
pointa
points
whos
mol
mol.remove_hydrogens()
for a in ababel.molecule.atoms:
    print(a)
for a in mol.atoms:
    print(a)
/len mol.atoms
mol.identifier
ls
for s in teaching_reader.entries():
    print(s)
s.chemical_name_as_html
s.crystal.packing_coefficient
s.crystal.symmetry_operators
s.crystal.spacegroup_symbol
s.doi
s.attributes
s.molecule
s.molecule
s.molecule.centre_of_geometry()
s.molecule.components
for s in teaching_reader.entries():
    print(s.identifier,len(s.molecule.components))
for s in teaching_reader.entries():
    if len(s.molecule.components) < 2:
        print(s.component_inchis)
for s in teaching_reader.entries():
    if len(s.molecule.components) < 2:
        print(s.identifier)
        m = s.molecule.remove_hydrogens()
        print(m.formula)
for s in teaching_reader.entries():
    if len(s.molecule.components) < 2:
        print(s.identifier)
        s.molecule.remove_hydrogens()
        print(s.formula)
for s in teaching_reader.entries():
    if len(s.molecule.components) < 2:
        print(s.identifier)
        n_atoms = len(s.atoms)
        s.molecule.remove_hydrogens()
        n_nonh_atoms = len(s.atoms)
        print(n_atoms,n_nonh_atoms)
for s in teaching_reader.entries():
    if len(s.molecule.components) < 2:
        print(s.identifier)
        n_atoms = len(s.molecule.atoms)
        s.molecule.remove_hydrogens()
        n_nonh_atoms = len(s.molecule.atoms)
        print(n_atoms,n_nonh_atoms)
s
s.molecule.components
s
s.molecule.atoms
s.molecule.remove_hydrogens?
s.molecule.remove_hydrogens()
s.molecule.atoms
s.molecule.remove_hydrogens??
s.molecule
s.molecule.atoms
for a in s.molecule.atoms:
    a.element
for a in s.molecule.atoms:
    a.element
for a in s.molecule.atoms:
    a.atomic_symbol
for a in s.molecule.atoms:
    print(a.atomic_symbol)
s
s.identifier
s.molecule.re
s.molecule.remove_hydrogens??
m = s.molecule
m.atoms
m.remove_hydrogens()
m
m.atoms
s.molecule
s.molecule.atoms
s.molecule.remove_hydrogens()
s.molecule.atoms
for s in teaching_reader.entries():
    if len(s.molecule.components) < 2:
        print(s.identifier)
        m = s.molecule
        n_atoms = len(m.atoms)
        m.remove_hydrogens()
        n_nonh_atoms = len(m.atoms)
        print(n_atoms,n_nonh_atoms)
for s in teaching_reader.entries():
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    if len(m.components) < 2 and n_nonh_atoms < 10:
        print(s.identifier)
        print(n_atoms,n_nonh_atoms)
for s in teaching_reader.entries():
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    if len(m.components) < 2 and n_nonh_atoms < 15:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
m
m.heavy_atoms?
m.heavy_atoms??
m.heavy_atoms
m.largest_ring_size
for s in teaching_reader.entries():
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    if len(m.components) < 2 and n_nonh_atoms < 15:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        print(m.largest_ring_size)
for s in teaching_reader.entries():
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    if len(m.components) < 2 and n_nonh_atoms < 15:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        print(m.largest_ring_size, s.crystal.spacegroup_symbol)
for s in teaching_reader.entries():
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        print(m.largest_ring_size, s.crystal.spacegroup_symbol)
for s in teaching_reader.entries():
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
for s in teaching_reader.entries():
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        print(s.crystal.spacegroup_symbol)
for s in teaching_reader.entries():
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        print(s.crystal.spacegroup_symbol)
        print(s.crystal.symmetry_operators)
for so in s.crystal.symmetry_operators:
    print(so)
type(so)
s.crystal.packing()
s.crystal.packing?
p = s.crystal.packing()
p.components
p
p.components
s
s.crystal
s.crystal.slicing?
c
for so in s.crystal.symmetry_operators:
    print(so)
so
so*c
so
c
d = {}
for s in teaching_reader.entries():
    dd = {}
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        dd['sg'] = s.crystal.spacegroup_symbol()
        dd['so'] = s.crystal.symmetry_operators()
        d[s] = dd
d = {}
for s in teaching_reader.entries():
    dd = {}
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        dd['sg'] = s.crystal.spacegroup_symbol
        dd['so'] = s.crystal.symmetry_operators
        d[s] = dd
d
d = {}
for s in teaching_reader.entries():
    dd = {}
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        dd['sg'] = s.crystal.spacegroup_symbol
        dd['so'] = s.crystal.symmetry_operators
        d[s.identifier] = dd
d
d = {}
for s in teaching_reader.entries()[:10]:
    dd = {}
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        dd['sg'] = s.crystal.spacegroup_symbol
        dd['so'] = s.crystal.symmetry_operators
        dd['mol'] = m
        d[s.identifier] = dd
d = {}
for s in teaching_reader.entries():
    dd = {}
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        dd['sg'] = s.crystal.spacegroup_symbol
        dd['so'] = s.crystal.symmetry_operators
        dd['mol'] = m
        d[s.identifier] = dd
d
[a.fractional_coordinates for a in m.atoms]
[list(a.fractional_coordinates) for a in m.atoms]
[list(a.fractional_coordinates) for a in m.atoms]
[list(map(float,a.fractional_coordinates)) for a in m.atoms]
[list(map(lambda i: round(i,3),a.fractional_coordinates)) for a in m.atoms]
d = {}
for s in teaching_reader.entries():
    dd = {}
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        dd['sg'] = s.crystal.spacegroup_symbol
        dd['so'] = s.crystal.symmetry_operators
        dd['mol'] = [list(map(lambda i: round(i,3),a.fractional_coordinates)) for a in m.atoms]
        d[s.identifier] = dd
s.has_3d_structure
d = {}
for s in teaching_reader.entries():
    if not s.has_3d_structure:
        break
    dd = {}
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        dd['sg'] = s.crystal.spacegroup_symbol
        dd['so'] = s.crystal.symmetry_operators
        dd['mol'] = [list(map(lambda i: round(i,3),a.fractional_coordinates)) for a in m.atoms]
        d[s.identifier] = dd
d = {}
for s in teaching_reader.entries():
    if not s.has_3d_structure:
        continue
    dd = {}
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        dd['sg'] = s.crystal.spacegroup_symbol
        dd['so'] = s.crystal.symmetry_operators
        dd['mol'] = [list(map(lambda i: round(i,3),a.fractional_coordinates)) for a in m.atoms]
        d[s.identifier] = dd
d
d = {}
for s in teaching_reader.entries():
    if not s.has_3d_structure:
        continue
    dd = {}
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        dd['sg'] = s.crystal.spacegroup_symbol
        dd['so'] = s.crystal.symmetry_operators
        dd['mol'] = [list(map(lambda i: round(i,3),a.fractional_coordinates)) for a in m.atoms]
        dd['uc'] = list(s.crystal.cell_lengths) + list(s.crystal.cell_angles)
        d[s.identifier] = dd
d
d = {}
for s in teaching_reader.entries():
    if not s.has_3d_structure:
        continue
    dd = {}
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        dd['sg'] = s.crystal.spacegroup_symbol
        dd['so'] = s.crystal.symmetry_operators
        dd['mol'] = [list(map(lambda i: round(i,3),a.fractional_coordinates)) + [a.atomic_symbol] for a in m.atoms]
        dd['uc'] = list(s.crystal.cell_lengths) + list(s.crystal.cell_angles)
        
        d[s.identifier] = dd
d
m.centre_of_geometry
m.centre_of_geometry()
d = {}
for s in teaching_reader.entries():
    if not s.has_3d_structure:
        continue
    dd = {}
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        dd['sg'] = s.crystal.spacegroup_symbol
        dd['so'] = s.crystal.symmetry_operators
        dd['mol'] = [list(map(lambda i: round(i,3),a.fractional_coordinates)) + [a.atomic_symbol] for a in m.atoms]
        dd['uc'] = list(s.crystal.cell_lengths) + list(s.crystal.cell_angles)
        dd['cog'] = m.centre_of_geometry()
        d[s.identifier] = dd
d
d = {}
for s in teaching_reader.entries():
    if not s.has_3d_structure:
        continue
    dd = {}
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        dd['sg'] = s.crystal.spacegroup_symbol
        dd['so'] = s.crystal.symmetry_operators
        dd['mol'] = [list(map(lambda i: round(i,3),a.fractional_coordinates)) + [a.atomic_symbol] for a in m.atoms]
        dd['uc'] = list(s.crystal.cell_lengths) + list(s.crystal.cell_angles)
        dd['cog'] = list(m.centre_of_geometry())
        d[s.identifier] = dd
d
d = {}
for s in teaching_reader.entries():
    if not s.has_3d_structure:
        continue
    dd = {}
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        dd['sg'] = s.crystal.spacegroup_symbol
        dd['so'] = s.crystal.symmetry_operators
        dd['mol'] = [list(map(lambda i: round(i,3),a.fractional_coordinates)) + [a.atomic_symbol] for a in m.atoms]
        dd['uc'] = list(s.crystal.cell_lengths) + list(s.crystal.cell_angles)
        dd['cog'] = map(lambda i: round(i,3),m.centre_of_geometry())
        d[s.identifier] = dd
d
d = {}
for s in teaching_reader.entries():
    if not s.has_3d_structure:
        continue
    dd = {}
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        dd['sg'] = s.crystal.spacegroup_symbol
        dd['so'] = s.crystal.symmetry_operators
        dd['mol'] = [list(map(lambda i: round(i,3),a.fractional_coordinates)) + [a.atomic_symbol] for a in m.atoms]
        dd['uc'] = list(s.crystal.cell_lengths) + list(s.crystal.cell_angles)
        dd['cog'] = list(map(lambda i: round(i,3),m.centre_of_geometry()))
        d[s.identifier] = dd
d
d = {}
for s in teaching_reader.entries():
    if not s.has_3d_structure:
        continue
    dd = {}
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        dd['sg'] = s.crystal.spacegroup_symbol
        dd['so'] = s.crystal.symmetry_operators
        dd['mol'] = [list(map(lambda i: round(i,3),a.fractional_coordinates)) + [a.atomic_symbol] for a in m.atoms]
        dd['uc'] = list(s.crystal.cell_lengths) + list(s.crystal.cell_angles)
        dd['cog'] = list(map(lambda i: round(i,3),s.crystal.orthogonal_to_fractional(m.centre_of_geometry())))
        d[s.identifier] = dd
d = {}
for s in teaching_reader.entries():
    if not s.has_3d_structure:
        continue
    dd = {}
    m = s.molecule
    n_atoms = len(m.atoms)
    m.remove_hydrogens()
    n_nonh_atoms = len(m.atoms)
    ring_size = m.largest_ring_size
    if len(m.components) < 2 and n_nonh_atoms < 15 and ring_size:
        print(s.identifier)
        #print(n_atoms,n_nonh_atoms)
        #print(m.largest_ring_size, s.crystal.spacegroup_symbol)
        dd['sg'] = s.crystal.spacegroup_symbol
        dd['so'] = s.crystal.symmetry_operators
        dd['mol'] = [list(map(lambda i: round(i,3),a.fractional_coordinates)) + [a.atomic_symbol] for a in m.atoms]
        dd['uc'] = list(s.crystal.cell_lengths) + list(s.crystal.cell_angles)
        dd['cog'] = list(map(lambda i: round(i,3),s.crystal.orthogonal_to_fractional * m.centre_of_geometry()))
        d[s.identifier] = dd
d
d.keys()
/len d.keys()
d.keys()
s.crystal.orthogonal_to_fractional
round(s.crystal.orthogonal_to_fractional)
s.crystal.orthogonal_to_fractional
import json
json.dumps(d)
json.dumps(d,indent=4)
mjson = json.dumps(d,indent=4)
print(mjson)
pwd
%history -f 3Dmolecules.py
