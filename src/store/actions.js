import axios from 'axios'

const setInitialData = async ({ commit }) => {
  try {
    const response = await axios.get('https://bitbucket.org/fenix-group-international/frontend-test/raw/80d1664d5db3a516537a3bbbb4f3fca968d18b2e/data.json')
    const data = await response.data.Brastlewark

    commit('SET_GNOME_DATA', data)

    let ages = data.map(a => a.age)
    let min = Math.min.apply(null, ages)
    let max = Math.max.apply(null, ages)
    commit('SET_AGE_SPECTRUM', [min, max])
    commit('SET_AGE_FILTER', [min, max])

    let professions = [...new Set([].concat.apply([], data.map(item => item.professions)))]
    commit('SET_PROFESSIONS', professions)
  } catch (error) {
    console.error(error)
  }
}

const setCurrentProfileById = ({ commit }, id) => {
  commit('SET_CURRENT_PROFILE_BY_ID', id)
}

const removeCurrentProfile = ({ commit }) => {
  commit('REMOVE_CURRENT_PROFILE')
}

const copeAgeFilter = ({ commit, state }, i) => {
  if (parseInt(state.ageFilter[0]) > parseInt(state.ageFilter[1])) {
    commit('COPE_AGE_FILTER', {
      i: i,
      payload: i === 0 ? state.ageFilter[1] : state.ageFilter[0],
    });
  }
}

const updateProfessionFilter = ({ commit }, data) => {
  commit('UPDATE_PROFESSION_FILTER', data)
}

const loadMore = ({ commit }) => {
  commit('LOAD_MORE')
}

export default {
  setInitialData,
  setCurrentProfileById,
  removeCurrentProfile,
  copeAgeFilter,
  updateProfessionFilter,
  loadMore
}