<template>
    <div class="detail">
      <h3 class="title">{{newsDetail.title}}</h3>
      <div class="fg"><span>{{newsDetail.source}}</span><span>{{newsDetail.publishTime}}</span></div>
      <div v-html="newsDetail.content"></div>
      <div class="comments"><comment-vue></comment-vue></div>
      <NewsFooter-Vue></NewsFooter-Vue>
    </div>
</template>

<script>
import NewsFooterVue from './NewsFooter'
export default {
  data () {
    return {
      newsId: '',
      newsDetail: {}
    }
  },
  components: {
    NewsFooterVue
  },
  created () {
    var url = 'http://api.shujuzhihui.cn/api/news/detail?newsId=' + this.$route.query.id + '&appKey=c60d176c33e64f25894f87f8f777e382'
    this.$axios.get(url)
      .then(res => {
        this.newsDetail = res.data.RESULT
      })
      .catch(err => { console.log(err) })
  }
}
</script>

<style lang="scss">
.detail{
  img{
    width: 100%;
  }
  .title{
    padding: 2px 20px;
    text-align: center;
  }
  .fg{
    text-align: center;
  }
  .comments{
    margin-bottom: 50px;
  }
}
</style>
