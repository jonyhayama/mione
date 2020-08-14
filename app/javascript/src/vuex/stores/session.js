const axios = require('axios');
import ApiService from '../../services/api.js'

const Session = {
  namespaced: true,
  actions: {
    async logout(context) {
      return await ApiService.delete('users/sign_out');
    }
  }
};

export default Session;