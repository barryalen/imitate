// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Footer from './components/Footer'
import Mint from 'mint-ui'
import '../static/lib/mui/css/mui.css'
import '../static/lib/mui/css/icons-extra.css'
import '../node_modules/mint-ui/lib/style.css'
import Comments from './components/Comments'

Vue.use(Mint)

var instance = Axios.create({
  baseURL: 'http://localhost:8888'
})
// Axios.defaults.baseUrl = global.baseURL
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 挂载axios
Vue.prototype.$axios = instance

Vue.config.productionTip = false

// 全局组件
Vue.component('footerVue', Footer)
Vue.component('commentVue', Comments)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
