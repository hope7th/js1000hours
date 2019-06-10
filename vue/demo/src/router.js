import Vue from 'vue'
import Router from 'vue-router'
import Home from "./view/Home.vue";
Vue.use(Router)
export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path: "/1.1",
      name: "Vue三大核心概念(属性、事件、插槽)",
      component: () => import("./view/1.1")
    }
  ]
})