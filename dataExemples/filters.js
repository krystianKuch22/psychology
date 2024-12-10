export const filtersTab = {
  specialization: ["Terapeuta", "Psycholog", "Psychiatra"],
  therapicTrend: [
    "Psychoanalityczny",
    "Psychodynamiczny",
    "Poznawczo-behawioralny",
  ],
  diseases: ["Depresja", "Borderline", "Omamy"],
  language: ["Polski", "Angielski", "Hiszpański"],
  nearestDate: ["Dzisiaj", "Jutro", "Pojutrze"],
  degree: ["Magister", "Doktor", "Profesor"],
  certificates: ["Magii", "Czarodziejstwa"],
  institution: ["ScanMed", "LuxMed"],
  insurance: ["Podstawowe", "Deluxe"],
  appointmentViaPortal: ["Tak", "Nie"],
  paymentMethod: ["Gotówka", "Blik", "Przelew"],
  sex: ["Mężczyzna", "Kobieta"],
  age: ["20-30", "40-50"],
  rate: [1, 2, 3, 4, 5],
  numberOfRate: ["10-20", "20-40", "Powyżej 40"],
};

export const filters = [
  {
    filterPlaceholder: "Specjalizacja",
    filterName: "specialization",
    values: ["Terapeuta", "Psycholog", "Psychiatra"],
  },
  {
    filterPlaceholder: "Nurt Terapeutyczny",
    filterName: "therapicTrend",
    values: ["Psychoanalityczny", "Psychodynamiczny", "Poznawczo-behawioralny"],
  },
  {
    filterPlaceholder: "Choroby",
    filterName: "diseases",
    values: ["Depresja", "Borderline", "Omamy"],
  },
];

export const filtersBoolTab = {
  stationaryVisits: [true, false],
  onlineVisits: [true, false],
  children: [true, false],
  facilitiesForDisabled: [true, false],
  supervisor: [true, false],
};

export const filtersBool = [
  {
    filterName: "stationaryVisits",
    filterPlaceholder: "Wizyty stacjonarne",
  },
  {
    filterName: "onlineVisits",
    filterPlaceholder: "Wizyty online",
  },
];

export const namesOfFilters = [
  "Specjalizacja",
  "Nurt Terapeutyczny",
  "Choroby",
  "Język",
  "Najbliższy termin",
  "Stopień Naukowy",
  "Certyfikaty",
  "Placówka/Specjalista",
  "Ubezpieczenia",
  "Umawianie przez portal",
  "Metoda płatności",
  "Płeć terapeuty",
  "Wiek terapeuty",
  "Ubezpieczenia",
  "Ocena profilu",
  "Liczba ocen",
];
