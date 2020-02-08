<template>
    <div>
        <div id="search">
        <el-input
                placeholder="输入邀请码"
                prefix-icon="el-icon-search"
                v-model="invite">
            <template slot="append">
<!--                <el-tooltip class="item" effect="dark" content="点击此处创建班级" placement="top-start">-->
<!--                <router-link to="/Creat">-->
                    <span @click="Add">加入班级</span>
                <el-dialog
                        title="提示"
                        :visible.sync="centerDialogVisible"
                        width="100%"
                        center>
                    <h4>您要加入的班级是：{{school_name}}</h4>
                    <h4>对应的教室是：{{Classroom_ID}}</h4>
                    <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addok">确 定</el-button>
  </span>
                </el-dialog>
<!--                            class="el-icon-plus"-->
<!--                          v-bind:title="message">-->
<!--                </router-link>-->
<!--                </el-tooltip>-->
            </template>
        </el-input>
        </div>

        <div class="block">
            <el-carousel height="150px">
                <el-carousel-item v-for="item in fit" :key="item.id">
                    <h3 class="small">{{ item.id }}</h3>
<!--                    <img src=item.url/>-->
                </el-carousel-item>
            </el-carousel>
        </div>

        <div id="two">
            <h4>为你推荐</h4>
        </div>
        <div class="demo-image">
            <el-row>
                <el-col :span="12" v-for="fit in data" :key="fit.id">
                    <div class="block"  >
                            <el-image
                                    style="width: 100px; height: 100px"
                                    :src="fit.url"></el-image>
                        <p class="demonstration">班级名称：{{fit.sname}}</p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {httppost} from "@/request/http";
    let a=window.localStorage;
    export default {
        name: "Main",
        data(){
           return{
               invite:"",
               message:"",
               school_name:"",
               Classroom_ID:"",
               centerDialogVisible: false,
               fit:[
                   {   id:"1",
                       sname: 'xxx',
                       desp: 'xxx',
                       num: 'xxx'
                   },
                   {   id:"2",
                       sname: 'xxx',
                       desp: 'xxx',
                       num: 'xxx'
                   }, {   id:"3",
                       sname: 'xxx',
                       desp: 'xxx',
                       num: 'xxx'
                   },
                   {   id:"4",
                       sname: 'xxx',
                       desp: 'xxx',
                       num: 'xxx'
                   }

               ],
               data:[
                   {
                       id:"1",
                       url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                       sname:'xxx',
                       sprice:'xx',
                       cprice:'xx'

                   },
                   {
                       id:"2",
                       url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                       sname:'xxx',
                       sprice:'xx',
                       cprice:'xx'

                   },
                   {
                       id:"3",
                       url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                       sname:'xxx',
                       sprice:'xx',
                       cprice:'xx'

                   },
                   {
                       id:"4",
                       url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                       sname:'xxx',
                       sprice:'xx',
                       cprice:'xx'

                   },
                   {
                       id:"5",
                       url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                       sname:'xxx',
                       sprice:'xx',
                       cprice:'xx'

                   }, {
                       id:"6",
                       url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                       sname:'xxx',
                       sprice:'xx',
                       cprice:'xx'

                   }

               ],

           }
        },
        methods:{
            addok(){
                let rep=new URLSearchParams();
                rep.append('userid',a.getItem('uid'));
                rep.append('','')
                httppost('',rep)
                this.centerDialogVisible = false;
                this.$message({
                message: '加入成功！您可在我的班级中查看',
                type: 'success'
            });},
            Add(){
                if(this.invite!==""&&this.invite!==undefined&&this.invite!==null){
                let rep=new URLSearchParams();
                rep.append('invitationcode',this.invite);
                rep.append('school_name',"school_name");
                rep.append('Classroom_ID',"Classroom_ID");
                httppost('Add',rep).then(res=>{
                    let that=this;
                    that.school_name=res.school_name;
                    that.Classroom_ID=res.Classroom_ID;
                    this.centerDialogVisible=true;
                    window.console.log(res)
                })
            }
                else
                {this.$message.error('您还没有输入邀请码')}
            }
        }
    }
</script>

<style scoped>
#search{
    margin-left: 5%;
    margin-right: 5%;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    /*background-color: #A15ADB;*/
}

.el-carousel__item:nth-child(2n+1) {
    /*background-color: red;*/
    background-image: url("../../src/assets/logo.png");
}
.el-carousel__item:nth-child(2n+2) {
    /*background-color: red;*/
    background-image: url("https://test2346.oss-cn-beijing.aliyuncs.com/anna.jpg");
}
.el-carousel__item:nth-child(2n+1) {
    /*background-color: red;*/
    background-image: url("https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg");
}
.block {
    margin-top: 30px;
    border-radius: 50%;

}
    #two{
        margin-top: 30px;
        text-align: left;
        margin-left: 5%;
    }
</style>