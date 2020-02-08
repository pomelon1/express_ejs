<template>
    <div>
    <div id="one">
         <h5>推荐座位</h5>
        <img id="set" :src=url>
    </div>
    <div id="two">
        <h5>班级成员</h5>
    </div>
        <div>
            <div v-for="item in fit" :key="item.id">
                <el-button class="but2">
                    <span class="lef">{{item.cname}}</span>
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {httppost} from "@/request/http";

    export default {
        name: "DespitionM",
        data(){
            return{
                url:"https://test2346.oss-cn-beijing.aliyuncs.com/anna.jpg",
                fit:[
                    {
                        id:"1",
                        cname:"1711",
                        url:""
                    }, {
                        id:"1",
                        cname:"1711",
                        url:""
                    }, {
                        id:"1",
                        cname:"1711",
                        url:""
                    }, {
                        id:"1",
                        cname:"1711",
                        url:""
                    }, {
                        id:"1",
                        cname:"1711",
                        url:""
                    }, {
                        id:"1",
                        cname:"1711",
                        url:""
                    },
                ]
            }
        },
        create(){
            let rep=new URLSearchParams();
            let id = this.$route.query.id;
            rep.append('school_name','');
            rep.append('Classroom _ID','');
            rep.append('id',id);
            httppost('/',rep).then(res=>{
                window.console.log(res)
                this.fit=res.data;
                this.url=res.url;
            }

            )
        }

    }
</script>

<style scoped>
#one,#two{
    text-align: left;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 22px;
}
    #set{
        width: 100%;
        height: 150px;
        margin-top: 15px;
    }
.but2{
    width: 100%;
    border: none;
    border-bottom: 1px ghostwhite solid;
    border-top: 1px ghostwhite solid;
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

</style>