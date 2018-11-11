<template>
  <div class="newsComment">
    <div class="header">
      <h4>网友评论 <span>文明上网理性发言</span></h4>
      <p v-if="commentListNum !== 0">{{commentListNum}}条发言</p>
    </div>
    <p v-if="commentListNum === 0">暂无评论！</p>
    <div v-for="(comment, index) in commentsList" :key="index">
      <div class="list">
        <div>
          <span>{{comment.c_name}}</span>
          <span>{{comment.c_data}}</span>
        </div>
        <div>{{comment.c_content}}</div>
        <div class="cFooter">
          <a>赞{{comment.c_good}}</a>
          <a href="">回复</a>
          <a href="">举报</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      commentListNum: 0,
      commentsList: []
    }
  },
  methods: {
    getComments (url) {
      this.$axios.get('/commentsList?id=' + url)
        .then(res => {
          this.commentsList = res.data
          this.commentListNum = this.commentsList.length
        })
        .catch(err => { console.log(err) })
    }
  },
  created () {
    this.getComments(this.$route.query.id)
  }
}
</script>

<style lang="scss" scoped>
  .newsComment{
    border-top: 1px solid #888;
    span{
      color: #888;
      font-size: .7rem;
    }
    .header{
      display: flex;
      justify-content: space-between;
    }
    .header p{
      padding-right: 5px;
    }
    .cFooter{
      text-align: right;
    }
    .cFooter a{
      color: #666;
    }
    .list{
      border-top: 1px dotted #999;
    }
  }
</style>
