<template>
    <div>
      <mt-header fixed title="时事新闻">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="newsList" >
        <ul class="mui-table-view" v-for="(news, index) in newsList" :key="index">
          <li class="mui-table-view-cell mui-media">
            <router-link :to="'/home/newsDetail?id=' + news.newsId">
              <img class="mui-media-object mui-pull-left" :src="news.newsImg">
              <div class="mui-media-body">
                <p class="mui-ellipsis">{{news.title}}</p>
                <p class="clickAndTime"><span>发表时间：{{news.publishTime}}</span><span>点击：0次</span></p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      newsList: []
      // newsList: [{title: '商家发来可视对讲', publishTime: '2018-12-12', newsId: '1'},
      //   {title: '商家发来可视对讲', publishTime: '2018-12-12', newsId: '2'},
      //   {title: '商家发来可视对讲', publishTime: '2018-12-12', newsId: '3'},
      //   {title: '商家发来可视对讲', publishTime: '2018-12-12', newsId: '4'},
      //   {title: '商家发来可视对讲', publishTime: '2018-12-12', newsId: '5'}]
    }
  },
  created () {
    // "'http://api.shujuzhihui.cn/api/news/detail?newsId='
    // + news.newsId +'&appKey=c60d176c33e64f25894f87f8f777e382'"
    // http://api.shujuzhihui.cn/api/news/list
    this.$axios.get('http://api.shujuzhihui.cn/api/news/list?appKey=c60d176c33e64f25894f87f8f777e382')
      .then(res => {
        console.log(res.data.RESULT.newsList)
        this.newsList = res.data.RESULT.newsList
      })
      .catch(err => { console.log(err) })
  }
}
</script>

<style lang="scss" scoped>
.newsList{
  margin-top: 44px;
  .mui-ellipsis{
    color: #666;
    font-size: 1rem;
    font-weight: bold;
  }
  .clickAndTime{
    display: flex;
    justify-content: space-between;
  }
}
</style>
