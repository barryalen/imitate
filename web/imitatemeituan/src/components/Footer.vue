<template>
  <div class="footer">
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" :to="'/home'">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" :to="'/cart'">
        <span class="mui-icon mui-icon-cart"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" :to="$store.state.loginStatus">
        <span class="mui-icon mui-icon-person" ></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  nav .mui-tab-label{
    font-family: 微软雅黑;
  }
</style>
