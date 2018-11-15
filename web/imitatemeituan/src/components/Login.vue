<template>
    <div class="login">
      <mt-header fixed title="登录">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="loginSelect">
        <a href="">账号登录</a>
        <a href="">手机验证</a>
      </div>
      <div class="account">
        <form action="" >
          <input type="text" placeholder="账号名/手机号/Email">
          <input type="text" placeholder="请输入您的密码">
          <input type="submit" value="登录">
        </form>
      </div>
      <div class="mobile">
        <div>
          <input type="text" placeholder="请输入手机号">
          <button>获取验证码</button>
        </div><input type="text" placeholder="请输入短信验证码">
        <input type="submit" value="登录">
      </div>
      <router-link :to="'/register'">立即注册</router-link>
    </div>
</template>

<script>
export default {

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
    a{
      text-align: center;
      width: 50%;
      display: inline-block;
      border-bottom: 2px solid ;
    }
  }
</style>
