const axios = require('axios');
import ApiService from '../../services/api.js'

const Session = {
  namespaced: true,
  state: { 
    current_user: {
      email: "",
      avatar: ""
    }
  },
  getters: {
    current_user: (state) => {
      return state.current_user
    }
  },
  actions: {
    async logout(context) {
      return await ApiService.delete('users/sign_out');
    },

    async loadCurrentUserData({ commit }){
      const userData = await ApiService.get('api/users/self');
      commit('setCurrentUser', userData.data.user);
    }
  },
  mutations: {
    setCurrentUser(state, userData) {
      state.current_user = userData;
    }
  }
};

export default Session;