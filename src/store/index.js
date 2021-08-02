import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {
        id: 1,
        item: 'Call to Mars',
        isCheck: false
      },
      {
        id: 2,
        item: 'Clean up the desk',
        isCheck: false
      },
      {
        id: 3,
        item: 'Work out',
        isCheck: true
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
