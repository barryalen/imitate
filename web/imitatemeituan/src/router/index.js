import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Cart from '../components/Cart'
import NewsList from '../components/news/NewsList'
import NewsDetail from '../components/news/NewsDetail'
import NewsFooter from '../components/news/NewsFooter'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/home/newsList', component: NewsList},
    {path: '/home/newsDetail', component: NewsDetail},
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: NewsFooter
    }
  ]
})
