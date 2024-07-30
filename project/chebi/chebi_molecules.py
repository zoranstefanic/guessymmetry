from rdkit import Chem
from rdkit.Chem import Draw
import pickle
import re

coor_re = re.compile(r"\s+(-?\d\.\d+)\s+(-?\d\.\d+)\s+(-?\d\.\d+)\s(\D)")
bond_re = re.compile(r"\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)$")

def extract_molecules(num):
    molecules = pickle.load(open('molecules.pkl','rb'))
    mols = molecules['NAME'][:num].dropna()
    d = dict(mols)
    d1 = {}
    for k,v in d.items():
        print(k)
        d1[k] = {}
        try:
            m = Chem.MolFromSmiles(v)
            mol = Chem.MolToMolBlock(m)
            lines = mol.split('\n')
            d1[k]['atoms'] = []
            d1[k]['bonds'] = []
            for l in lines:
                coor = coor_re.match(l)
                bond = bond_re.match(l)
                if coor:
                    print(l)
                    d1[k]['atoms'].append((coor.groups()))
                elif bond:
                    d1[k]['bonds'].append((bond.groups()))
        except:
            pass
    return d1 
