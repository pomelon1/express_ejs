<template>
   <div>
       <div id="one">
       <el-form   label-width="80px" class="mt">
           <el-form-item label="左眼度数">
               <el-input  v-model="form.left" ></el-input>
           </el-form-item>
       </el-form>
       <el-form  label-width="80px" class="mt">
           <el-form-item label="右眼度数">
               <el-input  v-model="form.right" ></el-input>
           </el-form-item>
       </el-form>
           <div class="two">
               <span style="text-align: left;font-size: 14px">是否散光</span>
               <template >
               <el-radio class="two2" v-model="radio" label="1">是</el-radio>
               <el-radio class="two2" v-model="radio" label="2">否</el-radio>
           </template>
           </div>
           <div class="two">
               <span style="text-align: left;font-size: 14px">是否患有夜盲症</span>
               <template >
               <el-radio class="two2" v-model="radio2" label="1">是</el-radio>
               <el-radio class="two2" v-model="radio2" label="2">否</el-radio>
           </template>
           </div>
       </div>
       <div>
       <el-button  class="len" @click="ok">确定</el-button>
       </div>
   </div>
</template>

<script>
    import {httppost} from "@/request/http";
    let a=window.localStorage;

    export default {
        name: "Improve",
        data(){
            return{
                radio:"2",
                radio2:"2",
                sta1:'',
                sta2:'',
                form:[
                    {
                        left:"",
                        right:""
                    }
                ]
            }
        },
        methods:{
            ok(){
                if(this.form.left!==undefined&&this.form.right!==undefined){
                if(this.radio==='1')  this.sta1='T';
                else this.sta1='F';
                if(this.radio2==='1')  this.sta2='T';
                else this.sta2='F';
                let rep=new URLSearchParams();
                rep.append('id',a.getItem('uid'));
                rep.append('myopia_left',this.form.left);
                rep.append('myopia_right',this.form.right);
                rep.append('disease1',this.sta1);
                rep.append('disease2',this.sta2);
                rep.append('state',"T");
                httppost('/Upload_information',rep)
                    .then(res=>{
                        window.console.log("123")
                        if(res.state==="T"){
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
                            this.$router.push({ path:'/Main'  })
                        }
                        else{
                            this.$message.error('服务器故障')
                        }
                    })
            }
                else{
                    this.$message.error("请完善信息")
                }
            }

    }
    }
</script>

<style scoped>
#one{
    margin-right: 5%;
}
    .two{
        text-align: left;
        margin-left: 4%;
        margin-top: 22px;
    }
    .two2{
        margin-left: 22px;
    }
    .len{
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 30px;

    }
</style>