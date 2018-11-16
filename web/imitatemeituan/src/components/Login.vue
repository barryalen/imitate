<template>
    <div class="login">
      <mt-header fixed title="登录">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="loginSelect">
        <a :class="flag ? 'active' : 'inactive'" @click="change('account')">账号登录</a>
        <a :class="!flag ? 'active' : 'inactive'" @click="change('mobile')">手机验证</a>
      </div>
      <div class="account" v-if="flag">
        <form action="" >
          <input type="text" placeholder="账号名/手机号/Email" v-model="userName" @blur="trimSelf">
          <input type="password" placeholder="请输入您的密码" v-model="password">
          <input type="button" value="登录" class="loginBtn" @click="login">
        </form>
      </div>
      <div class="mobile" v-if="!flag">
        <div>
          <input type="text" placeholder="请输入手机号">
          <button>获取验证码</button>
        </div>
        <input type="text" placeholder="请输入短信验证码">
        <input type="submit" value="登录" class="loginBtn">
      </div>
      <div class="loginFooter">
        <router-link :to="'/register'">立即注册</router-link>
        <router-link :to="'/password'">找回密码</router-link>
      </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      flag: true,
      changeFlag: 'account',
      userName: '',
      password: ''
    }
  },
  methods: {
    // remove user's space string
    trimSelf () {
      this.userName = this.userName.trim()
    },
    // account and mobile style switch
    change (value) {
      if (value !== this.changeFlag) {
        this.flag = !this.flag
        this.changeFlag = value
      }
    },
    // login
    login () {
      var _this = this
      if (this.userName === '') {
        Toast({
          message: '用户名不能为空',
          position: 'top',
          duration: 1000
        })
      } else if (this.password === '') {
        Toast({
          message: '密码不能为空',
          position: 'top',
          duration: 1000
        })
      } else {
        this.$axios.post('/login', {
          userName: this.userName,
          password: this.password
        }, {headers: {'Content-Type': 'application/json'}})
          .then(function (res) {
            if (res.data === 0) {
              Toast({
                message: '用户名或密码错误',
                position: 'top',
                duration: 1000
              })
            } else {
              // this.$set.
              _this.$router.push('/home/mine')
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .login{
    width: 100%;
    .loginSelect{
      width: 100%;
      margin-top: 44px;
      display: flex;
      flex-direction: row;
    }
    .loginSelect a{
      text-align: center;
      width: 50%;
      display: inline-block;
    }
    a.active{

      border-bottom: 3px solid ;
    }
    a.inactive{
      border-bottom: 3px solid #aaa;
    }
    .mobile>div{
      display: flex;
      flex-direction: row;
    }
    .mobile button{
      height: 40px;
    }
    .loginBtn{
      width: 100%;
      text-align: center;
      color: #fff;
      background-color: #26a2ff;
    }
    .loginFooter{
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
