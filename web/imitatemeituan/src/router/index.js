import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Cart from '../components/Cart'
import NewsList from '../components/news/NewsList'
import NewsDetail from '../components/news/NewsDetail'
// import NewsFooter from '../components/news/NewsFooter'
import Comments from '../components/Comments'
import Mine from '../components/Mine'
import Password from '../components/Password'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/home/newsList', component: NewsList},
    {path: '/home/newsDetail/:id', component: NewsDetail},
    {path: '/home/comments', component: Comments},
    {path: '/home/mine', component: Mine},
    {path: '/register', component: Register},
    {path: '/cart', component: Cart},
    {path: '/login', component: Login},
    {path: '/password', component: Password},
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log(sessionStorage)
//   console.log(from.path)
//   console.log(to.meta)
//   console.log(to.path)
//   next()
// })
export default router
