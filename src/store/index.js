import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cocs: [],
    coc: {},
    random: [],
  },
  getters: {
    getCocs(state) {
      return state.cocs;
    },
  },
  mutations: {
    SET_COCS(state, newValue) {
      state.cocs = newValue;
    },
  },
  actions: {
    obtenerCocs({ commit }, palabra) {
      axios
        .get(
          `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${palabra}`
        )
        .then((response) => {
          console.log("response", response.data.drinks);
          commit("SET_COCS", response.data.drinks);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    },
    obtenerCoc({ commit }, id) {
      axios
        .get(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => {
          console.log("response", response.data.drinks[0]);
          commit("SET_COCS", response.data.drinks[0]);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    },
    randomCoc({ commit }) {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then((response) => {
          console.log("response", response.data.drinks[0]);
          commit("SET_COCS", response.data.drinks[0]);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    },

    limpiarCocs({ commit }) {
      commit("SET_COCS", []);
    },
  },
  modules: {},
});
