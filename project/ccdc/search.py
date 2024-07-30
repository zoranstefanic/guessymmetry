"""
Utility functions for searching the CSD.

There is a need for a subset of CSD which will eventually make 
it to the local database (~ 2000 entries). These entries have to be

"""
import ccdc
from ccdc.io import Entry
from ccdc import io
import numpy as np

def cell_ratios(e):
    axes = np.array(e.crystal.cell_lengths)
    a = axes/e.crystal.cell_volume
    mina, maxa = a.min(), a.max()
    return (maxa/mina)

def is_flat_structure(e):
    """
    Tries to find the structures whose one axis is small
    and the other two are comparable in size
    """
    axes = np.array(e.crystal.cell_lengths)
    axes = sorted(axes) # put the smallest axis as 'a'
    a = axes[0]
    b, c = axes[1], axes[2]
    condition = 5*a<b and 5*a<c and (b/c-1 < 0.1) # a is five times smaller than b or c, while b and c are within 10%.
    return condition

def search_for_flat_structures():
    """First attempt to find suitable structures
    
    Looks for structures which are approx. 2D, i.e. flat.
    Writes the entries list together with cell 
    """
    reader = io.EntryReader('CSD')
    entries = reader.entries()
    f = open('flat_structures.csv','w')
    for e in entries:
        if is_flat_structure(e):
            print(e.identifier)
            f.write('%10s, %.3f, %.3f, %.3f, %s\n' %(e.identifier,
                                                    e.crystal.cell_lengths.a,
                                                    e.crystal.cell_lengths.b,
                                                    e.crystal.cell_lengths.c,
                                                    e.crystal.spacegroup_symbol))
    f.close()
