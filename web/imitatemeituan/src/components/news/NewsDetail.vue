<template>
    <div class="detail">
      <h3 class="title">{{newsDetail.title}}</h3>
      <div class="fg"><span>{{newsDetail.source}}</span><span>{{newsDetail.publishTime}}</span></div>
      <div v-html="newsDetail.content"></div>
      <div class="comments">
        <NewsComments-Vue :newsId="newsId" :bus="bus"></NewsComments-Vue>
      </div>
      <NewsFooter-Vue :newsId="newsId" :bus="bus"></NewsFooter-Vue>
    </div>
</template>

<script>
import NewsFooterVue from './NewsFooter'
import NewsCommentsVue from './NewsComments'
import Vue from 'vue'
export default {
  data () {
    return {
      newsId: '',
      newsDetail: {},
      bus: new Vue()
    }
  },
  components: {
    NewsFooterVue,
    NewsCommentsVue
  },
  created () {
    this.newsId = this.$route.params.id
    var url = 'http://api.shujuzhihui.cn/api/news/detail?newsId=' + this.newsId + '&appKey=c60d176c33e64f25894f87f8f777e382'
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
