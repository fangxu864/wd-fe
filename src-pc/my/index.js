import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import {
  Button,
  Select,
  ButtonGroup
} from 'element-ui';

Vue.use(Button)
Vue.use(Select)
Vue.use(ButtonGroup)


require("./index.scss");

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})