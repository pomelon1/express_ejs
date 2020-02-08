<template>
    <div>
        <div class="big">
            <el-form ref="form" :model="form" label-width="80px" class="mt">
                <el-form-item label="学校名称">
                    <el-input  v-model="form.school"></el-input>
                </el-form-item>
            </el-form>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="班级名称">
                    <el-input v-model="form.class">
                    </el-input>
                </el-form-item>
            </el-form>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="教室号码">
                    <el-input v-model="form.Classroom" ></el-input>
                </el-form-item>
            </el-form>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="座位详情">
                    <el-input v-model="form.des" type="textarea" style=""></el-input>
                </el-form-item>
            </el-form>
             <el-button  @click="Creat"  id="le">立即创建</el-button>
        </div>
        <div id="pur">
            <h5>
                在创建班级后，会自动生成邀请码，班级同学只需在首页输入邀请码，即可加入班级
            </h5>
        </div>
    </div>
</template>

<script>
    import {httppost} from "@/request/http";

    export default {
        name: "Creatclass",
        data(){
            return{
                form:{
                    school:"",
                    class:"",
                    Classroom:"",
                    des:"",
                },
                show: true,
                count: '',
                timer: null,
                num:1
            }
        },
        methods: {
           Creat(){
               if(this.form.school!==""&&this.form.class!==""&&this.form.Classroom!==""&&this.form.des!==""){
               let rep=new URLSearchParams();
               rep.append('school_name',this.form.school);
               rep.append('Classroom _ID',this.form.Classroom);
               rep.append('invitationcode','XDDFCFRGTRGERWFQERAEFGWETRGETREREFAVERGRTHYHERTSGERGERVEGRHGTYJYHY');
               httppost('/Create',rep).then(res=>{
                   let a=window.localStorage;
                   a.setItem("ycode",res.invitationcode)
                   this.$router.push('/CreatOK')
                   alert(a.getItem("ycode"))
               })}
               else {this.$message.error("请完善信息")}
           }
        }}
</script>

<style scoped>
    .len{
        width: 100%;
    }
    .mt{
        margin-top: 30px;
    }
    .big{
        width: 90%;
        margin-left: 5%;
    }
    #le{
        width:100%;
    }
    #pur{
        color: #A15ADB;
        margin-top: 25px;
        margin-left: 5%;
        margin-right: 5%;
        text-align: left;
        line-height: 22px;
    }

</style>