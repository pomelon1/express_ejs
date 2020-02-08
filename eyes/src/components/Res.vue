<template>
    <div>
        <div id="one">
            <H2>Welcome To!</H2>
            <h4 id="wel">欢迎使用！</h4>
            <h3 id="part1">Part 1 个人信息</h3>
        </div>
        <div id="two">
            <el-form ref="form" :model="form" label-width="90px" class="mt">
                <el-form-item label="真实姓名：">
                    <el-input  v-model="form.names" ></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div id="there">
<!--            <router-link :to="{path:'/Resg', query: {sname:form.names}}" >-->
                <el-button  class="len" @click="next">下一步</el-button>
            <router-link to="/" id="q"> <p id="purple">返回登陆</p></router-link>
<!--            </router-link>-->
        </div>
    </div>
</template>
<script>
    export default {
        name: "Res",
        data(){
            return {
                form: {
                names:""
            }
            }
        },
        methods:{
            next(){
                if(this.names!==""&&this.names!==null){
                    this.$router.push({path: '/Resg',query:{ sname:this.form.names}});
                }
                else
                {this.$message.error('请输入姓名')}
            }
        }
    }
</script>

<style scoped>
    #one{
        margin-top: 110px;
        text-align: left;
        margin-left: 10%;
    }
    #wel{
        margin-top: 20px;
    }
    #part1{
        margin-top: 30px;
        color: #A15ADB;

    }
    #two{
        margin-left: 5%;
        text-align: left;
        margin-right: 10%;
        margin-top: 40px;
    }
    #there{
        margin-left: 10%;
        margin-top: 30px;
        margin-right: 10%;

    }
    .len{
        width: 100%;
    }
    #purple{
        margin-top: 20px;
        color:#A15ADB;
        text-align: left;
        text-decoration: none;
    }
</style>