const periodicTable = [
  {
    name: "Hydrogen",
    symbol: "H",
    atomicNumber: 1,
    atomicMass: 1.008,
    state: "gas",
    famliy: "Nonmetal",
    valenceE: 1,
    valenceShell: "s"
  },
  {
    name: "Helium",
    symbol: "He",
    atomicNumber: 2,
    atomicMass: 4.003,
    state: "gas",
    famliy: "Noble Gas",
    valenceE: 2,
    valenceShell: "s"
  },
  {
    name: "Lithium",
    symbol: "Li",
    atomicNumber: 3,
    atomicMass: 6.941,
    state: "solid",
    famliy: "Alkali Metal",
    valenceE: 1,
    valenceShell: "s"
  },
  {
    name: "Berylium",
    symbol: "Be",
    atomicNumber: 4,
    atomicMass: 9.012,
    state: "solid",
    famliy: "Alkaline Earth Metal",
    valenceE: 2,
    valenceShell: "s"
  },
  {
    name: "Boron",
    symbol: "B",
    atomicNumber: 5,
    atomicMass: 10.811,
    state: "solid",
    famliy: "Metalloid",
    valenceE: 3,
    valenceShell: "p"
  },
  {
    name: "Carbon",
    symbol: "C",
    atomicNumber: 6,
    atomicMass: 12.011,
    state: "solid",
    famliy: "Nonmetal",
    valenceE: 4,
    valenceShell: "p"
  },
  {
    name: "Nitrogen",
    symbol: "N",
    atomicNumber: 7,
    atomicMass: 14.007,
    state: "gas",
    famliy: "Nonmetal",
    valenceE: 5,
    valenceShell: "p"
  },
  {
    name: "Oxygen",
    symbol: "O",
    atomicNumber: 8,
    atomicMass: 15.999,
    state: "gas",
    famliy: "Metalloid",
    valenceE: 6,
    valenceShell: "p"
  },
  {
    name: "Fluorine",
    symbol: "F",
    atomicNumber: 9,
    atomicMass: 18.998,
    state: "gas",
    famliy: "Halogen",
    valenceE: 7,
    valenceShell: "p"
  },
  {
    name: "Neon",
    symbol: "Ne",
    atomicNumber: 10,
    atomicMass: 20.180,
    state: "gas",
    famliy: "Noble Gas",
    valenceE: 8,
    valenceShell: "p"
  },
  {
    name: "Sodium",
    symbol: "Na",
    atomicNumber: 11,
    atomicMass: 22.990,
    state: "solid",
    famliy: "Alkali Metal",
    valenceE: 1,
    valenceShell: "s"
  },
  {
    name: "Magnesium",
    symbol: "Mg",
    atomicNumber: 12,
    atomicMass: 24.305,
    state: "solid",
    famliy: "Alkaline Earth Metal",
    valenceE: 2,
    valenceShell: "s"
  },
  {
    name: "Aluminum",
    symbol: "Al",
    atomicNumber: 13,
    atomicMass: 26.982,
    state: "solid",
    famliy: "Basic Metal",
    valenceE: 3,
    valenceShell: "p"
  },
  {
    name: "Silicon",
    symbol: "Si",
    atomicNumber: 14,
    atomicMass: 28.086,
    state: "solid",
    famliy: "Metalloid",
    valenceE: 4,
    valenceShell: "p"
  },
  {
    name: "Phosphorus",
    symbol: "P",
    atomicNumber: 15,
    atomicMass: 30.974,
    state: "solid",
    famliy: "Nonmetal",
    valenceE: 5,
    valenceShell: "p"
  },
  {
    name: "Sulfur",
    symbol: "S",
    atomicNumber: 16,
    atomicMass: 32.066,
    state: "solid",
    famliy: "Nonmetal",
    valenceE: 6,
    valenceShell: "p"
  },
  {
    name: "Chlorine",
    symbol: "Cl",
    atomicNumber: 17,
    atomicMass: 35.453,
    state: "gas",
    famliy: "Halogen",
    valenceE: 7,
    valenceShell: "p"
  },
  {
    name: "Argon",
    symbol: "Ar",
    atomicNumber: 18,
    atomicMass: 39.948,
    state: "gas",
    famliy: "Noble Gas",
    valenceE: 8,
    valenceShell: "p"
  },
  {
    name: "Potassium",
    symbol: "K",
    atomicNumber: 19,
    atomicMass: 39.098,
    state: "solid",
    famliy: "Alkali Metal",
    valenceE: 1,
    valenceShell: "s"
  },
  {
    name: "Calcium",
    symbol: "Ca",
    atomicNumber: 20,
    atomicMass: 40.078,
    state: "solid",
    famliy: "Alkaline Earth Metal",
    valenceE: 2,
    valenceShell: "s"
  },
  {
    name: "Scandium",
    symbol: "Sc",
    atomicNumber: 21,
    atomicMass: 44.956,
    state: "solid",
    famliy: "Transition Metal",
    valenceE: 2,
    valenceShell: "s"
  },
  {
    name: "Titanium",
    symbol: "Ti",
    atomicNumber: 22,
    atomicMass: 47.88,
    state: "solid",
    famliy: "Transition Metal",
    valenceE: 2,
    valenceShell: "s"
  },
  {
    name: "Vanadium",
    symbol: "V",
    atomicNumber: 23,
    atomicMass: 50.942,
    state: "solid",
    famliy: "Transition Metal",
    valenceE: 2,
    valenceShell: "s"
  },
  {
    name: "Chromium",
    symbol: "Cr",
    atomicNumber: 24,
    atomicMass: 51.996,
    state: "solid",
    famliy: "Transition Metal",
    valenceE: 1,
    valenceShell: "s"
  },
  {
    name: "Manganese",
    symbol: "Mn",
    atomicNumber: 25,
    atomicMass: 54.938,
    state: "solid",
    famliy: "Transition Metal",
    valenceE: 2,
    valenceShell: "s"
  },
  {
    name: "Iron",
    symbol: "Fe",
    atomicNumber: 26,
    atomicMass: 55.845,
    state: "solid",
    famliy: "Transition Metal",
    valenceE: 2,
    valenceShell: "s"
  },
  {
    name: "Cobalt",
    symbol: "Co",
    atomicNumber: 27,
    atomicMass: 58.933,
    state: "solid",
    famliy: "Transition Metal",
    valenceE: 2,
    valenceShell: "s"
  },
  {
    name: "Nickel",
    symbol: "Ni",
    atomicNumber: 28,
    atomicMass: 58.693,
    state: "solid",
    famliy: "Transition Metal",
    valenceE: 2,
    valenceShell: "s"
  },
  {
    name: "Copper",
    symbol: "Cu",
    atomicNumber: 29,
    atomicMass: 63.546,
    state: "solid",
    famliy: "Transition Metal",
    valenceE: 1,
    valenceShell: "s"
  },
  {
    name: "Zinc",
    symbol: "Zn",
    atomicNumber: 30,
    atomicMass: 65.38,
    state: "solid",
    famliy: "Transition Metal",
    valenceE: 2,
    valenceShell: "s"
  },
  {
    name: "Gallium",
    symbol: "Ga",
    atomicNumber: 31,
    atomicMass: 69.723,
    state: "solid",
    famliy: "Basic Metal",
    valenceE: 3,
    valenceShell: "p"
  },
  {
    name: "Germanium",
    symbol: "Ge",
    atomicNumber: 32,
    atomicMass: 72.631,
    state: "solid",
    famliy: "Metalloid",
    valenceE: 4,
    valenceShell: "p"
  },
  {
    name: "Arsenic",
    symbol: "As",
    atomicNumber: 33,
    atomicMass: 74.922,
    state: "solid",
    famliy: "Metalloid",
    valenceE: 5,
    valenceShell: "p"
  },
  {
    name: "Selenium",
    symbol: "Se",
    atomicNumber: 34,
    atomicMass: 78.971,
    state: "solid",
    famliy: "Nonmetal",
    valenceE: 6,
    valenceShell: "p"
  },
  {
    name: "Bromine",
    symbol: "Br",
    atomicNumber: 35,
    atomicMass: 79.904,
    state: "liquid",
    famliy: "Halogen",
    valenceE: 7,
    valenceShell: "p"
  },
  {
    name: "Krypton",
    symbol: "Kr",
    atomicNumber: 36,
    atomicMass: 84.798,
    state: "gas",
    famliy: "Noble Gas",
    valenceE: 8,
    valenceShell: "p"
  },
];
