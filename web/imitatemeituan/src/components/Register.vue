<template>
    <div class="register">
      <mt-header fixed title="注册">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="registerForm">
        <form>
          <label for="">
            用户名：<input type="text" v-model="userName">
            <p v-if="flag">用户名已存在</p>
          </label>
          <label for="">
            密码：<input type="password" v-model="password">
          </label>
          <label for="">
            确认密码：<input type="password" v-model="passwordConform">
          </label>
          <label for="">
            邮箱：<input type="email" v-model="email">
          </label>
          <input type="submit" value="注册" @click="register">
        </form>

      </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      userName: '',
      password: '',
      passwordConform: '',
      email: '',
      flag: false
    }
  },
  watch: {
    userName: function (cVal, oVal) {
      this.registerConnect()
    }
  },
  methods: {
    registerConnect () {
      var _this = this
      this.$axios.post('/register', {
        userName: this.userName,
        password: this.password,
        passwordConform: this.passwordConform,
        email: this.email
      }, {
        headers: {'Content-Type': 'application/json'}
      }).then(function (res) {
        if (res.data === -1) {
          _this.flag = !_this.flag
        } else if (res.data === 2) {
          _this.flag = false
        } else if (res.data === 0) {
          Toast({
            message: '邮箱已被注册',
            position: 'top',
            duration: 1000
          })
        } else if (res.data === 1) {
          Toast({
            message: '注册成功',
            position: 'top',
            duration: 1000
          })
          _this.$router.push('/login')
        }
      })
        .catch(function (error) {
          console.log(error)
        })
    },
    register () {
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
      } else if (this.password !== this.passwordConform) {
        Toast({
          message: '密码不一致',
          position: 'top',
          duration: 1000
        })
      } else if (this.email === '') {
        Toast({
          message: '邮箱不能为空',
          position: 'top',
          duration: 1000
        })
      } else {
        this.registerConnect()
      }
    }
  }
}
</script>

<style scoped>
  .registerForm{
    margin-top: 44px;
  }
</style>
