import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gnomeData: [],
    professions: [],
    ageSpectrum: [],

    currentProfile: null,
    ageRange: []
  },

  mutations: {
    SET_GNOME_DATA(state, data) {
      state.gnomeData = data
    },

    SET_CURRENT_PROFILE(state, profile) {
      state.currentProfile = profile
    },

    SET_PROFESSIONS(state, data) {
      state.professions = data
    },

    SET_AGE_SPECTRUM(state, data) {
      state.ageSpectrum = data
    },

    SET_AGE_RANGE(state, data) {
      state.ageRange = data
    },

    // UPDATE_AGE_MIN(state, data) {
    //   state.ageRange[0] = data
    // },

    // UPDATE_AGE_MAX(state, data) {
    //   state.ageRange[1] = data
    // },

    COPE_AGE_RANGE(state, { i, payload }) {
      state.ageRange[i] = payload
    }
  },

  actions: {
    setInitialData({ commit }) {
      axios.get('https://bitbucket.org/fenix-group-international/frontend-test/raw/80d1664d5db3a516537a3bbbb4f3fca968d18b2e/data.json')
        .then((response) => {
          let data = response.data.Brastlewark
          commit('SET_GNOME_DATA', data)

          let ages = data.map(a => a.age)
          let min = Math.min.apply(null, ages)
          let max = Math.max.apply(null, ages)

          commit('SET_AGE_SPECTRUM', [min, max])
          commit('SET_AGE_RANGE', [min, max])

          let professions = [...new Set([].concat.apply([], data.map(item => item.professions)))]
          commit('SET_PROFESSIONS', professions)

        })
        .catch((error) => {
          console.log(error)
        })
      // .finally(() => {})
    },

    setCurrentProfile(context, param) {
      context.commit('SET_CURRENT_PROFILE', param)
    }
  },

  getters: {
    getGnomeData: state => {
      return state.gnomeData.slice(0, 12)
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
