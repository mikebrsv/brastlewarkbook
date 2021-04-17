import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gnomeData: [],
    professions: [],
    ageSpectrum: [],

    currentProfile: null,

    nameFilter: '',
    ageFilter: [],
    professionFilter: [],

    gnomesToShow: 16,
  },

  mutations: {
    SET_GNOME_DATA(state, data) {
      state.gnomeData = data
    },

    SET_PROFESSIONS(state, data) {
      data.forEach(function (profession, index) {
        this[index] = profession.trim();
      }, data);
      data.sort()
      state.professions = data
    },

    SET_AGE_SPECTRUM(state, data) {
      state.ageSpectrum = data
    },

    SET_CURRENT_PROFILE_BY_ID(state, id) {
      let profile = state.gnomeData.find(profile => profile.id === id)
      state.currentProfile = profile
    },

    REMOVE_CURRENT_PROFILE(state) {
      state.currentProfile = null
    },

    UPDATE_NAME_FILTER(state, data) {
      state.nameFilter = data
    },

    UPDATE_PROFESSION_FILTER(state, data) {
      state.professionFilter = data
    },

    SET_AGE_FILTER(state, data) {
      state.ageFilter = data
    },

    COPE_AGE_FILTER(state, { i, payload }) {
      state.ageFilter[i] = payload
    },

    LOAD_MORE(state) {
      state.gnomesToShow += 16
    },
  },

  actions: {
    async setInitialData({ commit }) {
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
    },

    setCurrentProfileById({ commit }, id) {
      commit('SET_CURRENT_PROFILE_BY_ID', id)
    },

    removeCurrentProfile({ commit }) {
      commit('REMOVE_CURRENT_PROFILE')
    },

    copeAgeFilter({ commit, state }, i) {
      if (parseInt(state.ageFilter[0]) > parseInt(state.ageFilter[1])) {
        commit('COPE_AGE_FILTER', {
          i: i,
          payload: i === 0 ? state.ageFilter[1] : state.ageFilter[0],
        });
      }
    },

    updateProfessionFilter({ commit }, data) {
      commit('UPDATE_PROFESSION_FILTER', data)
    },

    loadMore({ commit }) {
      commit('LOAD_MORE')
    }
  },

  getters: {
    getGnomeData: state => {
      return state.gnomeData
    },

    getGnomeDataFiltered(state, getters) {
      let gnomeDataFiltered = getters.getGnomeData
      let filterByName = new RegExp(state.nameFilter, 'i')

      gnomeDataFiltered = gnomeDataFiltered.filter((profile) => {
        return profile.name.match(filterByName) &&
          (profile.age >= state.ageFilter[0] && profile.age <= state.ageFilter[1]) &&
          (state.professionFilter.length !== 0
            ? profile.professions.some(r => state.professionFilter.includes(r.trim()))
            : profile)
      })

      return gnomeDataFiltered
    },

    getGnomeDataFilteredSliced(state, getters) {
      return getters.getGnomeDataFiltered.slice(0, state.gnomesToShow)
    },

    getFriends: (state) => (friends) => {
      return state.gnomeData.filter((friend) => friends.includes(friend.name))
    },
  },

  modules: {
  }
})
