<template>
  <div id="app">
      <el-page-header v-show="showt" @back="goBack" :content=title class="top">
      </el-page-header>
      <router-view></router-view>
      <TabBar v-show="show"></TabBar>
  </div>
</template>

<script>
import TabBar from "./components/TabBar";
// import top from './components/top'
export default {
  name: 'app',
  components: {
    TabBar,
      // top
      // Main
  },
    data(){
      return{
          title:"",
          show:true,
          showt:false
      }
    },
    methods:{
        goBack(){
               this.$router.go(-1)
        }
    },
    mounted(){
      window.console.log(this.$route.path);
        if(this.$route.path=== '/' ||this.$route.path=== '/Res' ||this.$route.path=== '/Resg' ){
            this.show=false;
        }else{
            this.show=true;

        }
    },
    watch:{
      // if(this.$route.path==='/a')
        $route(to){
            if(to.path === '/' || to.path === '/Res' || to.path === '/Resg'||to.path === '/#/' ){
                this.show=false;
            }else{
                this.show=true;

            }
            if(to.path==='/Improve')
            {this.showt=true;this.title="完善资料"}
            if(to.path==='/Creat')
            {this.showt=true;this.title="创建班级"}
            if(to.path==='/Myclass')
            {this.showt=true;this.title="我的班级"}
            if(to.path==='/Mine'||to.path==='/Main')
            {this.showt=false;}

        }
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
    font-size: 15px;
}
    .top{
        margin-bottom: 25px;
    }
</style>
