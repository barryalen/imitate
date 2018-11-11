<template>
    <div class="newsFoot">
      <nav class="mui-bar mui-bar-tab">
        <div class="publish">
          <input type="text" class="input" placeholder="写评论" v-model="content" @keyup.enter="publish">
          <a href="" @click.prevent="publish">发表</a>
        </div>
        <router-link  :to="'/home/comments?id=' + newsId">
          <!--<span>mui-icon-extra mui-icon-extra-heart-filled</span>-->
          <span class="mui-icon mui-icon-extra mui-icon-extra-comment"><span class="mui-badge">{{cNum}}</span></span>
        </router-link>
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
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      index: 1,
      content: '',
      cNum: 0
    }
  },
  props: ['newsId', 'bus'],
  methods: {
    publish () {
      this.$axios.get('/addContent?id=' + this.newsId + '&name=张三' +
        this.index++ + '&content=' + this.content)
        .then(res => {
          if (res.data === 'success') {
            Toast({
              message: '发表成功',
              position: 'middle',
              duration: 2000
            })
          }
        })
        .catch()
      this.bus.$emit('publishBus', 'send')
    }
  },
  mounted () {
    var _this = this
    this.bus.$on('commentListNumBus', function (msg) {
      _this.cNum = msg
    })
  }
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
    .publish{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .input{
      margin: 0;
      padding: 0;
      height: 36px;
      width: 80%;
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
