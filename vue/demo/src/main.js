import Vue from 'vue'
import App from './App.vue'
import ref from "vue-ref";
import router from "./router";
import store from "./store"
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false

Vue.use(antd);
Vue.use(ref, { name: "ant-ref" });

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
