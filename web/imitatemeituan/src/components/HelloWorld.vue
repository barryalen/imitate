<template>
  <div class="hello">
    <button @click="test">test</button>
  </div>
</template>

<script>
// var instance = this.$axios.create({
//   baseURL: 'https://api.example.com'
// })
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    test () {
      // console.log(this.$axios.default.baseUrl)
      this.$axios.get('/get')
        .then(res => { console.log(res) })
    }
  },
  created () {
    this.$axios.get('http://localhost:8888/get')
      .then(res => { console.log(res) })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
