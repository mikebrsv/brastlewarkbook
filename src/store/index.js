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
    ageRange: [],

    gnomesToShow: 16
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

    SET_AGE_RANGE(state, data) {
      state.ageRange = data
    },

    COPE_AGE_RANGE(state, { i, payload }) {
      state.ageRange[i] = payload
    },

    LOAD_MORE(state) {
      state.gnomesToShow += 16;
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
        commit('SET_AGE_RANGE', [min, max])

        let professions = [...new Set([].concat.apply([], data.map(item => item.professions)))]
        commit('SET_PROFESSIONS', professions)
      } catch (error) {
        console.error(error)
      }
    },

    setCurrentProfileById({ commit }, id) {
      commit('SET_CURRENT_PROFILE_BY_ID', id)
    },

    loadMore({ commit }) {
      commit("LOAD_MORE")
    }
  },

  getters: {
    getGnomeData: state => {
      return state.gnomeData.slice(0, state.gnomesToShow)
      // return state.gnomeData
    },

    getFriends: (state) => (friends) => {
      return state.gnomeData.filter((friend) => friends.includes(friend.name))
    },

    getAgeRange: state => {
      return state.ageRange
    }
  },

  modules: {
  }
})
