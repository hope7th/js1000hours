import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state:{
    count:0,
  },
  mutations:{
    increment(state){
      state.count++
    }
  },
  actions:{
    increment({commit}){
      setTimeout(()=>{
        commit('increment')
      },2000)
    }
  },
  getters:{
    doubleCount(state){
      return state.count * 2
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
