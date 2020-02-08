<template>
    <div>
        <div id="p">
        <h5 >
            恭喜你创建成功！以下为班级邀请码，把他发送给需要加入的同学吧
        </h5>
        </div>
        <div id="two">
            <textarea v-model="Ycode" readonly="true" class="text"></textarea>
        </div>
<!--        <div>-->
<!--            <el-popover-->
<!--                    placement="bottom"-->
<!--                    title="提示"-->
<!--                    width="200"-->
<!--                    trigger="click"-->
<!--                    content="恭喜你复制成功！">-->
<!--                <el-button slot="reference" id="copy">点击复制</el-button>-->
<!--            </el-popover>-->
<!--        </div>-->
<!--        <button class="tag-read" data-clipboard-text="我是可以复制的内容，请点击复制" @click="copy">立即阅读</button>-->
    </div>
</template>

<script>
    export default {
        name: "CreatOk",
        data(){
            return{
                Ycode:"XDDFCFRGTRGERWFQERAEFGWETRGETREREFAVERGRTHYHERTSGERGERVEGRHGTYJYHY"
            }
        },
        mounted(){
            let a=window.localStorage;
            // let bus=

            // for(let i=0;i<bus.length;i++)

            this.Ycode=a.getItem('ycode');

        },
        methods:{}
    }
</script>

<style scoped>
#p,#two{
    margin-top: 20px;
    text-align: left;
    margin-left: 10%;
    margin-right: 10%;
}
    #two{
        margin-top: 20px;
        color: #A15ADB;
    }
    #copy{
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 30px;
    }
    .text{
        width: 100%;
        color: #A15ADB;
        border:none;
        height: 100px;
        text-decoration: none;
        font-size: 20px;
        resize: none;
        cursor: pointer;
        /*outline:none;*/

    }
</style>