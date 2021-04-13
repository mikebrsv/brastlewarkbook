import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gnomeData: []
  },

  mutations: {
    SET_GNOME_DATA(state, data) {
      state.gnomeData = data
    }
  },

  actions: {
    getGnomeData({ commit }) {
      axios.get('https://bitbucket.org/fenix-group-international/frontend-test/raw/80d1664d5db3a516537a3bbbb4f3fca968d18b2e/data.json')
        .then((response) => {
          // console.log("response", response.data.Brastlewark);
          commit('SET_GNOME_DATA', response.data.Brastlewark)
        })
        .catch((error) => {
          console.log(error)
        })
      // .finally(() => {})
    }
  },

  modules: {
  }
})
