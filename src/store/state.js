const state = {
  gnomeData: [],
  professions: [],
  ageSpectrum: [],
  sortOptions: {
    az: 'A-Z',
    za: 'Z-A',
    yo: 'Youngest-Oldest',
    oy: 'Oldest-Youngest',
    ns: 'Not Sorted'
  },

  currentProfile: null,

  nameFilter: '',
  ageFilter: [],
  professionFilter: [],
  sort: null,

  gnomesToShow: 16,
}

export default state