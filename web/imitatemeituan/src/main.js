// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global from './Global'
import Axios from 'axios'

var instance = Axios.create({
  baseURL: global.baseURL
})
// axios.defaults.baseUrl = global.baseURL
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 挂载axios
Vue.prototype.$axios = instance

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    // console.log(axios.defaults)
    this.$axios.get('/get').then(res => { console.log(res) })
  }
})
