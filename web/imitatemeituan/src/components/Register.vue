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
export default {
  data () {
    return {
      password: '',
      passwordConform: '',
      email: ''
    }
  },
  computed: {
    userName: function () {
      console.log(this.userName)
      // this.register()
      return this.userName
    }
  },
  methods: {
    register () {
      console.log('test')
      this.$axios.post('/register', {
        userName: this.userName,
        password: this.password,
        passwordConform: this.passwordConform,
        email: this.email
      }, {
        headers: {'Content-Type': 'application/json'}
      }).then(function (res) {
        console.log(res)
      })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  .registerForm{
    margin-top: 44px;
  }
</style>
