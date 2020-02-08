<template>
    <!-- 顶部tab栏 -->
    <div class="top-bar">
        <div class="tabbar">
            <footer class="footer">
                    <router-link to='/Improve' tag='li' class="footer__li--1">
                        <span class="el-icon-edit iconself"></span>
                        <h6>完善资料</h6>
                </router-link>
                <router-link to='/Main' tag='li' class="footer__li--2">
                    <span class="el-icon-s-home iconself"></span>
                    <h6>首页</h6>
                </router-link>
                <router-link to='/Mine' tag='li' class="footer__li--3">
                    <span class="el-icon-user iconself"></span>
                    <h6>我的</h6>
                </router-link>
            </footer>
            <div style="height:50px;"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabBar',


    }
</script>

<style lang='less'>
    *{margin:0;padding:0;}
    li,ol,ul{list-style: none;}
    .tabbar {

        .footer {
            background-color: white;
            width:100%;
            position: fixed;
            left:0;
            bottom:0;
            border-top:1px solid #ddd;
            &__li--1{
                width: 33%;
                height:50px;
                /*background:url('../assets/logo.png') center no-repeat;*/
                background-size: 35%;
                float: left;
                &.router-link-active {
                    /*background:url('../assets/logo.png') center no-repeat;*/
                    background-size: 35%;
                }
            }
            &__li--2{
                width: 33%;
                height:50px;
                /*background:url('../assets/logo.png') center no-repeat;*/
                background-size: 35%;
                float: left;
                &.router-link-active {
                    /*background:url('../assets/logo.png') center no-repeat;*/
                    background-size: 35%;
                }
            }
            &__li--3{
                width: 33%;
                height:50px;
                /*background:url('../assets/logo.png') center no-repeat;*/
                background-size: 35%;
                float: left;
                &.router-link-active {
                    /*background:url('../assets/logo.png')center no-repeat;*/
                    background-size: 35%;
                }
            }
        }
    }
    .iconself{
        width: 20px;
        margin-top:8px
    }
</style>



















































































































