import Vue from 'vue'
import App from './App.vue'
import Vuex from './min-vuex2'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state:{
    count:0
  },
  // mutations:{
  //   increment(state) { 
  //     state.count++
  //   }
  // },
  // getters:{
  //   doubleCount(state){
  //     debugger
  //     return state.count * 2
  //   }
  // }
})
// Vue.prototype.$store = store;
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
