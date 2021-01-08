import Vue from 'vue'
import Vuex from 'vuex'
import Session from './stores/session';
import TimeTracker from './stores/timetracker';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Session,
    TimeTracker,
  }
})