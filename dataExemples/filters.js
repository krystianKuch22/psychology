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
  {
    filterPlaceholder: "Język",
    filterName: "language",
    values: ["Polski", "Angielski", "Hiszpański"],
  },
  {
    filterPlaceholder: "Najbliższy termin",
    filterName: "nearestDate",
    values: ["Dzisiaj", "Jutro", "Pojutrze"],
  },
  {
    filterPlaceholder: "Stopień naukowy",
    filterName: "degree",
    values: ["Magister", "Doktor", "Profesor"],
  },
  {
    filterPlaceholder: "Certyfikaty",
    filterName: "certificates",
    values: ["Magii", "Czarodziejstwa"],
  },
  {
    filterPlaceholder: "Placówki/Specjalista",
    filterName: "institution",
    values: ["ScanMed", "LuxMed"],
  },
  {
    filterPlaceholder: "Ubezpieczenie",
    filterName: "insurance",
    values: ["Podstawowe", "Deluxe"],
  },
  {
    filterPlaceholder: "Umawianie prze portal",
    filterName: "appointmentViaPortal",
    values: ["Tak", "Nie"],
  },
  {
    filterPlaceholder: "Metoda płatności",
    filterName: "paymentMethod",
    values: ["Przelew", "Blik", "Gotówka"],
  },
  {
    filterPlaceholder: "Płeć",
    filterName: "sex",
    values: ["Mężczyzna", "Kobieta"],
  },
  {
    filterPlaceholder: "Wiek",
    filterName: "age",
    values: ["20-30", "40-50"],
  },
  {
    filterPlaceholder: "Ocena",
    filterName: "rate",
    values: [1, 2, 3, 4, 5],
  },
  {
    filterPlaceholder: "Liczba opinii",
    filterName: "numberOfRate",
    values: ["10-20", "20-40", "Powyżej 40"],
  },
  {
    filterPlaceholder: "Inny filtr",
    filterName: "another",
    values: ["10-20", "20-40", "Powyżej 40"],
  },
  {
    filterPlaceholder: "Jeszcze inniejszy",
    filterName: "more another",
    values: ["10-20", "20-40", "Powyżej 40"],
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
  {
    filterName: "childrenAppointment",
    filterPlaceholder: "Przyjmuje dzieci",
  },
  {
    filterName: "disabilities",
    filterPlaceholder: "Udogodnienia dla niepełnosprawnych",
  },
  {
    filterName: "supervizor",
    filterPlaceholder: "Superwizor",
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
