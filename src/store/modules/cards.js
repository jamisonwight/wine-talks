import api from '../../api';
import * as types from '../mutation-types';

// initial state
const state = {
  cards: []
};

// getters
const getters = {
  allCards: (state) => state.cards
};

// actions
const actions = {
  getCards({ commit }) {
    api.getCards(cards => {
        commit(types.SET_CARDS, { cards })
    });
  },
};

// mutations
const mutations = {
    [types.SET_CARDS] (state, { cards }) {
        state.cards = cards
    },
}

export default {
  state,
  getters,
  actions,
  mutations,
};
