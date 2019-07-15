import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/user',
      component:()=>import("./layouts/UserLayout.vue"),
      children:[
        {
          path:'/user',
          redirect:'/user/login'
        },
        {
          path:'/user/login',
          name:'login',
          component:()=>import("./views/user/login.vue")
        },
        {
          path:'/user/register',
          name:'register',
          component:()=>("./views/user/register.vue")
        }
      ]
    }
  ]
});
