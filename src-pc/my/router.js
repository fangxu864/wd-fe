import Vue from 'vue'
import VueRouter from 'vue-router'
import frame from "./components/frame/main.vue";
import my from "./pages/my/index.vue";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/my' },  
    {
      path: '/my',
      component: frame,
      children: [
        {
            path: '/',
            component: my
        },
    ]
    }, 
  ]
})
