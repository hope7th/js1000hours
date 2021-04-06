import Vue from 'vue'
import Router from 'vue-router'
import Home from "./view/Home.vue";
Vue.use(Router)
export default new Router({
  mode:'history',
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
    },
    {
      path: "/1.2",
      name: "双向绑定还是单向数据流",
      component: () => import("./view/1.2")
    },
    {
      path: "/1.3",
      name: "虚拟dom",
      component: () => import("./view/1.3")
    },
    {
      path: "/1.4",
      name: "触发组件的更新",
      component: () => import("./view/1.4")
    },
    {
      path: "/1.5",
      name: "计算属性和侦听器",
      component: () => import("./view/1.5")
    },
    {
      path: "/1.6",
      name: "生命周期的应用场景和函数式组件",
      component: () => import("./view/1.6")
    },
    {
      path: "/1.7",
      name: "内置指令和自定义指令",
      component: () => import("./view/1.7")
    },
    {
      path: "/1.8",
      name: "provie/inject",
      component: () => import("./view/1.8")
    },
    {
      path: "/1.9",
      name: "如何优雅的获取跨层级组件(拒绝递归)",
      component: () => import("./view/1.9")
    }
  ]
})