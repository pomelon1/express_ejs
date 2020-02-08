<template>
    <div>
        <div id="one">
            <H2>Welcome To!</H2>
            <h4 id="wel">欢迎使用！</h4>
            <h3 id="part1">Part 2 绑定手机号</h3>
        </div>
        <div id="two">
            <el-form ref="form" :model="form" label-width="90px" class="mt">
                <el-form-item label="手机号：">
                    <el-input  v-model="form.phone" ></el-input>
                </el-form-item>
            </el-form>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="验证码">
                    <el-input v-model="form.code">
                        <template slot="append">
                            <el-button  v-show="show"  @click="ifCode">发送验证码</el-button>
                            <el-button v-show="!show" class="count">{{count}} s</el-button>
                        </template>
                    </el-input>
                </el-form-item>
            </el-form>
        </div>
        <div id="there">
           <el-button  class="len" @click="login">完成注册</el-button>
            <router-link to="/" id="q"> <p id="purple">返回登陆</p></router-link>

        </div>
    </div>
</template>
<script>
    import {httppost} from "@/request/http";
    let  storage=window.localStorage
    export default {
        name: "Res",
        data(){
            return{
                form:{
                    phone:"",
                    code:"",
                },
                resd:{},
                on:"",
                show: true,
                count: '',
                timer: null,
                num:1,
            }
        },
        methods:{
            login(){
                if(this.form.phone!==""&&this.form.phone!==null&&this.form.code!==""&&this.form.code!==null){
                    let rep=new URLSearchParams();
                    rep.append('phone',this.form.phone);
                    rep.append('code',this.form.code);
                    rep.append('state',"T");
                    rep.append('userid',"01348");
                    httppost("/Login",rep).then(res => {
                        // eslint-disable-next-line no-console
                        console.log(res)
                        if(res.state==='T'){
                            this.$router.push({ path:'/Main'});
                            storage.setItem('uid',res.userid)
                            // alert(storage.getItem('uid'))
                        }
                        else {this.$message.error("验证码输入错误")}
                        // this.resd=res;
                        // eslint-disable-next-line no-console
                        // console.log("-------------"+this.resd.code)
                        // let storage = window.localStorage
                        // storage.setItem('key', 'value')
                    })}
                else{
                    this.$message.error("请完善信息")
                }
            },
            ifCode(){
                if (!(/^1[34578]\d{9}$/.test(this.form.phone))) {
                    this.$message.error("电话格式错误")
                } else if (this.form.phone ===""&&this.form.phone ===null) {
                    this.$message.error("请输入电话")
                } else {
                    // eslint-disable-next-line no-undef
                    this.getCode();
                }
            },

            getCode(){

                let rep=new URLSearchParams()
                rep.append('phone',this.form.phone)
                rep.append('state','T')
                httppost('/Send',rep).then(res=>{
                    if(res.state==='T'){
                        window.console.log(res);
                        if (this.num < 4) {
                            this.num++;
                            const TIME_COUNT = 60;
                            if (!this.timer) {
                                this.count = TIME_COUNT;
                                this.show = false;
                                this.timer = setInterval(() => {
                                    if (this.count > 0 && this.count <= TIME_COUNT) {
                                        this.count--;
                                    } else {
                                        this.show = true;
                                        clearInterval(this.timer);
                                        this.timer = null;
                                    }
                                }, 1000)
                            }
                        }
                        else {
                            this.$message.error("该手机今日不可继续发送！")
                        }
                    }
                    else {
                        this.$message.error('服务器错误');
                    }
                })
                // if(this.form.code!=="") {
                //     if (this.form.code === this.resd.code) {
                //         // alert("2")
                //         this.$router.push("/Main")
                //     } else {
                //         alert("您输入的验证码有误")
                //     }
                // }
                // else{
                //     alert("请输入验证码")
                // }
            },

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