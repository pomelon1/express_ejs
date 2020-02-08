<template>
    <div>
        <div id="one">
        <el-row >
            <el-col :span="5" id="inform">
                <img  id="cicrle" :src='url'/>
            </el-col>
            <el-col :span="19" id="right">
                <h5 style="margin-top: 25px;">姓名：{{name}}</h5>
            </el-col>
        </el-row>
        </div>
         <div>
             <router-link to="/Creat">
             <el-button class="but">
               <span class="lef">创建班级</span>
               <sapn  class="el-icon-arrow-right rig"></sapn>
           </el-button>
             </router-link>
         </div>
        <div>
            <router-link to="/Myclass">
            <el-button class="but2">
               <span class="lef">我的班级</span>
               <sapn  class="el-icon-arrow-right rig"></sapn>
           </el-button>
            </router-link>
        </div>
        <div>
<!--            <router-link to="/Myclass">-->
            <el-button class="but2">
               <span class="lef">关于我们</span>
               <sapn  class="el-icon-arrow-right rig"></sapn>
           </el-button>
<!--            </router-link>-->
    </div>
        <div>
            <el-button id="exit">
                退出登录
            </el-button>
        </div>
   </div>
</template>

<script>
    import {httppost} from "@/request/http";

    export default {
        name: "Mine",
        data(){
            return{
                name:"张三",
                url:"https://test2346.oss-cn-beijing.aliyuncs.com/anna.jpg"
                // sanme:"xxx",
            }
        },
        create(){
            let rep=new URLSearchParams();
            let a=window.localStorage;
            rep.append('id',a.getItem('uid'));
            httppost('/mking',rep).then(res=>{
                       this.name=res.name;
                       this.url=res.url
            })
        }
    }
</script>

<style scoped>
    #cicrle{
        border-radius: 50%;
        width: 80px;
        height: 80px;
    }
    #one{
        margin-left: 10%;
        margin-right: 10%;
    }
    .but,.but2{
        width: 100%;
        border: none;
        border-bottom: 1px ghostwhite solid;
        text-align: left;
        margin-top: 30px;
    }
    .but2{
        margin-top: 0px;
    }

    .lef{
        margin-right: 70%;
    }
    .rig{
        text-align: right;
    }
    #exit{
        width:100%;
        margin-top: 75px;
        border: none;
        color: #A15ADB;
    }
</style>