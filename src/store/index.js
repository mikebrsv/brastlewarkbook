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

    SET_AGE_FILTER(state, data) {
      state.ageFilter = data
    },

    COPE_AGE_FILTER(state, { i, payload }) {
      state.ageFilter[i] = payload      
    },

    LOAD_MORE(state) {
      state.gnomesToShow += 16
    },

    UPDATE_NAME_FILTER(state, data) {
      state.nameFilter = data
    }
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

    copeAgeFilter({commit, state},i) {
      if(parseInt(state.ageFilter[0]) > parseInt(state.ageFilter[1])) {
        commit("COPE_AGE_FILTER", {
          i: i,
          payload: i === 0 ? state.ageFilter[1] : state.ageFilter[0],
        });
      }
    },

    loadMore({ commit }) {
      commit("LOAD_MORE")
    }
  },

  getters: {
    getGnomeData: state => {
      return state.gnomeData
    },

    // getGnomeDataLength: (state, getters) => {
    //   return getters.getGnomeData.length
    // },

    getGnomeDataFilterByName: (state, getters) => {
      let gnomeDataFilterByName = getters.getGnomeData

      let filterByName = new RegExp(state.nameFilter, 'i')
      gnomeDataFilterByName = gnomeDataFilterByName.filter((profile) => {
        return profile.name.match(filterByName)
      })

      gnomeDataFilterByName = gnomeDataFilterByName.slice(0, state.gnomesToShow)

      return gnomeDataFilterByName
    },

    getGnomeDataFilterByAge: (state, getters) => {
      let gnomeDataFilterByAge = getters.getGnomeData
      
      gnomeDataFilterByAge = gnomeDataFilterByAge.filter((profile) => {
        return profile.age >= state.ageFilter[0] && profile.age <= state.ageFilter[1]
      })
      
      return gnomeDataFilterByAge
    },

    getGnomeDataFilterByAgeSliced: (state, getters) => {
      let gnomeDataFilterByAgeSliced = getters.getGnomeDataFilterByAge
      gnomeDataFilterByAgeSliced = gnomeDataFilterByAgeSliced.slice(0, state.gnomesToShow)
      return gnomeDataFilterByAgeSliced
    },
    
    getFriends: (state) => (friends) => {
      return state.gnomeData.filter((friend) => friends.includes(friend.name))
    },

    getAgeFilter: state => {
      return state.ageFilter
    }
  },

  modules: {
  }
})
