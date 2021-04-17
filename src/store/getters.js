const getGnomeData = state => {
  return state.gnomeData
}

const getGnomeDataFiltered = (state, getters) => {
  let gnomeDataFiltered = getters.getGnomeData
  let filterByName = new RegExp(state.nameFilter, 'i')

  gnomeDataFiltered = gnomeDataFiltered.filter((profile) => {
    return profile.name.match(filterByName) &&
      (profile.age >= state.ageFilter[0] && profile.age <= state.ageFilter[1]) &&
      (state.professionFilter.length !== 0
        ? profile.professions.some(r => state.professionFilter.includes(r.trim()))
        : profile)
  })

  gnomeDataFiltered.sort(function (a, b) {
    if (state.sort === 'az') {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
      return 0;
    } else if (state.sort === 'za') {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
      if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
      return 0;
    } else if (state.sort === 'yo') {
      if (a.age > b.age) return 1
      if (a.age < b.age) return -1
      return 0;
    } else if (state.sort === 'oy') {
      if (a.age < b.age) return 1
      if (a.age > b.age) return -1
      return 0;
    }
  });

  return gnomeDataFiltered
}

const getGnomeDataFilteredSliced = (state, getters) => {
  return getters.getGnomeDataFiltered.slice(0, state.gnomesToShow)
}

const getFriends = (state) => (friends) => {
  return state.gnomeData.filter((friend) => friends.includes(friend.name))
}

export default {
  getGnomeData,
  getGnomeDataFiltered,
  getGnomeDataFilteredSliced,
  getFriends
}