<template>
  <div class="hello" >
<!--    <h1>{{ msg }}</h1>-->
    <form action="HelloWorld.vue">
      姓名：<input v-text="msg"/>
      密码：<input v-text="msg"/>
      <input type="submit"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    background-image: url("");
  }
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
