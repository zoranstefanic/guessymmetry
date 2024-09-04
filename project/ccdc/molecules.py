import json
import pickle
from ccdc import io
from random import sample

def get_random_set_of_molecules(n=1000):
    csdcodes = pickle.load(open('csdcodes.pkl','rb'))
    csdcodes = sorted(sample(csdcodes,n))
    csd_er = io.EntryReader('CSD')
    l = []
    for s in csdcodes:
        e = csd_er.entry(s)
        l.append(e)
    return l

def extract_molecules(random=False,n=1000):
    """
    Extracts the molecules from the CSD database
    It uses teaching subset or a random subset of all structures in the CSD.
    """
    d = {}
    if not random:
        entries_set = io.EntryReader(subset=io.Subsets.TEACHING).entries()
    else:
        entries_set = get_random_set_of_molecules(n=n) 
    for s in entries_set:
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
    return d

def molecules_to_json(d,fname):
    open(fname,'w').write(json.dumps(d,indent=4))
