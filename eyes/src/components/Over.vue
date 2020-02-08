<template>
    <div>
<!--        <el-page-header @back="goBack" content="详情页面">-->
<!--        </el-page-header>-->
        <div >
        <router-link class="a" to="/Myclass" ><span style="margin-right: 10px;margin-left: 10px;">已创建的班级 </span></router-link>
            <router-link class="a" to="/Myclass" ><span style="color: #A15ADB">/</span></router-link>
        <router-link class="a" to="/Over" ><span style="color: #A15ADB;margin-left: 10px;">已创建的班级</span></router-link>
        </div>
        <p v-show="show" @click="show=!show,showctr=!showctr">管理</p>
        <p v-show="!show" @click="show=!show,showctr=!showctr">取消</p>
        <div id="uk">
        <div v-for="item in fit" :key="item.id">
            <el-button class="but2">
                <span class="lef" @click="go(item.id)">{{item.cname}}</span>
                <sapn  class=" rig" v-show="showctr" @click="del(item.id,item.cname,item.classroom)">删除</sapn>
            </el-button>
        </div>
        </div>
    </div>
</template>

<script>
    import {httppost} from "@/request/http";

    export default {
        name: "Myclass",
        data(){
            return{
                show:true,
                showctr:false,
                fit:[
                    {
                        id:"1",
                        cname:"计科1711",
                        url:"",
                        classroom:""
                    }, {
                        id:"2",
                        cname:"计科1711",
                        url:"",
                        classroom:""
                    }, {
                        id:"3",
                        cname:"计科1711",
                        url:"",
                        classroom:""
                    }
                ]
            }
        },
        create(){
            let a=window.localStorage;
            let rep=new URLSearchParams();
            rep.append('id',a.getItem('uid'));
            httppost('/posts',rep).then(res=>{
                this.fit=res;
            })
        },
     methods: {
         goBack() {
             // console.log('go back');
         },
         go(id){
             this.$router.push({path:'/DesM',query:{cid:id}})
         },
         del(id,name,classroom){
             let rep=new URLSearchParams();
             let a=window.localStorage;
             rep.append('id',a.getItem('uid'));
             rep.append('school_name',name);
             rep.append('Classroom _ID',classroom);
             rep.append('deleteall',"F");
             rep.append('state',"T");
             httppost('/Exit',rep).then(res=>{
                 if(res.state==='T'){
                     // alert(id)
                     this.$message({
                         message: '删除成功',
                         type: 'success'
                     });
                     for(let i=0;i<this.fit.length;i++){
                         if(this.fit[i].id===id){
                             this.fit.splice(i,1);
                         }
                     }
                     window.console.log(this.fit)
                 }
             })
         }

     }
    }
</script>

<style scoped>
    .but2{
        width: 100%;
        border: none;
        border-bottom: 1px ghostwhite solid;
        text-align: left;
        margin-top: 5px;
    }
    .lef{
        margin-right: 70%;
    }
    .rig{
        text-align: right;
        color: #A15ADB;
    }
    .el-breadcrumb__item:last-child{
        color: #A15ADB;
    }
    .a{
        text-decoration: none;
        color: black;
        float: left;
    }
    #uk{
        margin-top: 10px;}
</style>