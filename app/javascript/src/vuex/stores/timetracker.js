import ApiService from '../../services/api.js'

const TimeTracker = {
  namespaced: true,
  state: { 
    logs: []
  },
  getters: {
    logs: (state) => {
      return state.logs
    }
  },
  actions: {
    async loadLogs({ commit }){
      const logData = await ApiService.get('api/timetracker/logs');
      commit('setLogs', logData.data.logs);
    }
  },
  mutations: {
    setLogs(state, logData) {
      state.logs = logData;
    }
  }
}

export default TimeTracker;