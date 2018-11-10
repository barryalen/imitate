<template>
    <div class="newsFoot">
      <nav class="mui-bar mui-bar-tab">
        <input type="text" class="input" placeholder="写评论">
        <a  href="#tabbar-with-chat">
          <!--<span>mui-icon-extra mui-icon-extra-heart-filled</span>-->
          <span class="mui-icon mui-icon-extra mui-icon-extra-comment"><span class="mui-badge">119</span></span>
        </a>
        <a  href="#tabbar-with-contact">
          <span class="mui-icon-extra mui-icon-extra-heart"></span>
        </a>
        <a  href="#tabbar-with-map" class="share">
          <span class="mui-icon-extra mui-icon-extra-share"></span>
        </a>
      </nav>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .newsFoot{
    .mui-bar-tab{
      height: 40px;
    }
    nav{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .input{
      margin: 0;
      padding: 0;
      height: 36px;
      width: 50%;
    }
    .mui-icon-extra .mui-badge {
      font-size: 10px;
      line-height: 1.4;
      position: absolute;
      top: 1px;
      left: 80%;
      margin-left: -10px;
      padding: 1px 5px;
      color: white;
      background: red;
    }
    .share{
      padding-right: 10px;
    }
  }
</style>
