<template>
  <div class="home">
    <header class="mui-bar mui-bar-nav header navHeader">
      <div class="location">
        <a><span class="mui-icon mui-icon-location"></span>上海</a>
      </div>
      <div class="search">
        <input type="text">
      </div>
      <div class="btnSearch"><a href="">搜索</a></div>
    </header>
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../../static/images/food.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../static/images/outfood.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../static/images/movie.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="mui-content grid">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="">
            <div class="pic"><img src="../../static/images/meishi.jpg" alt=""></div>
            <div class="mui-media-body">美食</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="">
            <div class="pic"><img src="../../static/images/dianying.jpg" alt=""></div>
            <div class="mui-media-body">电影</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="">
            <div class="pic"><img src="../../static/images/waimai.jpg" alt=""></div>
            <div class="mui-media-body">外卖</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="">
            <div class="pic"><img src="../../static/images/jiudian.jpg" alt=""></div>
            <div class="mui-media-body">酒店</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="">
            <div class="pic"><img src="../../static/images/meishi.jpg" alt=""></div>
            <div class="mui-media-body">美食</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="">
            <div class="pic"><img src="../../static/images/dianying.jpg" alt=""></div>
            <div class="mui-media-body">电影</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="">
            <div class="pic"><img src="../../static/images/waimai.jpg" alt=""></div>
            <div class="mui-media-body">外卖</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="">
            <div class="pic"><img src="../../static/images/jiudian.jpg" alt=""></div>
            <div class="mui-media-body">酒店</div>
          </a>
        </li>
      </ul>

        <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">-->
          <!--<a href="#">-->
          <!--&lt;!&ndash;<span class="mui-icon mui-icon-home"></span>&ndash;&gt;-->
            <!--<img src="../../static/images/meishi.jpg" alt="">-->
            <!--<div class="mui-media-body">Home</div>-->
          <!--</a>-->
        <!--</li>-->
        <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
          <!--<span class="mui-icon mui-icon-email"></span>-->
          <!--<div class="mui-media-body">Email</div></a></li>-->
        <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
          <!--<span class="mui-icon mui-icon-chatbubble"></span>-->
          <!--<div class="mui-media-body">Chat</div></a></li>-->
        <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
          <!--<span class="mui-icon mui-icon-location"></span>-->
          <!--<div class="mui-media-body">location</div></a></li>-->
        <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
          <!--<span class="mui-icon mui-icon-search"></span>-->
          <!--<div class="mui-media-body">Search</div></a></li>-->
        <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
          <!--<span class="mui-icon mui-icon-phone"></span>-->
          <!--<div class="mui-media-body">Phone</div></a></li>-->
        <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
          <!--<span class="mui-icon mui-icon-gear"></span>-->
          <!--<div class="mui-media-body">Setting</div></a></li>-->
        <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
          <!--<span class="mui-icon mui-icon-info"></span>-->
          <!--<div class="mui-media-body">about</div></a></li>-->
        <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">-->
          <!--<span class="mui-icon mui-icon-more"></span>-->
          <!--<div class="mui-media-body">more</div></a></li>-->

    </div>
    <div class="today">
      <div><h3>今日推荐</h3></div>
      <div class="todayList" v-for="item in todayListItems" :key="item._id">
        <a href="">
          <img :src="item.picAddr" alt="">
          <div>
            <p class="title">{{item.title}}</p>
            <p class="desc">{{item.desc}}</p>
            <span>{{item.price}}</span><span></span>
            <span class="marketPrice">门市价:{{item.market_price}}</span>
            <span class="sellNum">已售{{item.sellNum}}</span>
          </div>
        </a>
      </div>
    </div>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: 'http://localhost:8888',
      todayListItems: []
    }
  },
  created () {
    this.$axios.get('/storeList')
      .then(res => {
        this.todayListItems = res.data
        console.log(this.todayListItems)
      })
      .catch(err => { console.log(err) })
  }

}
</script>

<style lang="scss" scoped>
  .home{
    width:100%;
  }
  .navHeader{
    margin: 0;
    padding: 0;
    background-color: #06c1ae;
    height: 44px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .location{
      height: 44px;
      width:100px;
    }
    .search{

      width: 100%;
    }
    input{
      margin:0;
      padding:0;
      width: 100%;
    }
    .btnSearch{
      width:80px;
      display: flex;
      justify-content: space-around;
    }
  }
  .swipe{
    margin-top: 44px;
    width: 100%;
    height: 200px;
    img{
      width: 100%;
      height: 200px;
    }
  }
  .grid{
    margin:0;
    padding:0;
    margin-top: 2px;
    border-bottom: 1px solid #DDD8CE;
    .pic{
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
    a>div{
      margin: 0 auto;
      text-align: center;
      /*display: flex;*/
      /*flex-direction: column;*/
      /*justify-content: space-around;*/
    }
  }
  .today{
    width: 100%;
    margin-top: 10px;
    margin-bottom: 50px;
    border-top: 1px solid #DDD8CE;
    h3{
      padding: 10px 0;
      font-size: 16px;
      color: #333;
    }
    img{
      margin-right: 8px;
      height: 90px;
      width: 90px;
    }
    .todayList{
      padding:0 5px;
    }
    a{
      height: 100px;
      width: 100%;
      border-top:1px solid #DDD8CE;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
    }
    .title{
      font-size: 1rem;
    }
    .desc{
      font-size: .5rem;
    }
    .marketPrice{
      font-size: .8rem;
      color: #999;
    }
    .sellNum{
      font-size: .9rem;
      color: #666;
      position: absolute;
      right: 5px;
      bottom: 3px;
    }
  }
</style>
