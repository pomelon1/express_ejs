import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from "@/components/HelloWorld";
import Login from './components/Login'
import Res from './components/Res'
import Resg from './components/Resg'
// import App from './App'
import Main from './components/Main'
import Mine from './components/Mine'
import Creatclass from "@/components/Creatclass";
import CreatOk from "@/components/CreatOk";
import Myclass from "@/components/Myclass";
import Over from "@/components/Over"
import DespitionM from "@/components/DespitionM";
import Improve from "@/components/Improve";
Vue.use(VueRouter);
const routes=[
    // {
    //     path:"/",
    //     component:App
    // },
    {
        path:"/",
        component:Login
    },
    {
        path:"/HelloWorld",
        component:HelloWorld
    },
    {
        path:"/Res",
        component:Res
    },
    {
        query:"",
        path:"/Resg",
        component:Resg
    },
    {
        path:"/Main",
        component:Main
    },
    {
        path:"/Mine",
        component:Mine
    },
    {
        path:"/Creat",
        component:Creatclass
    },
    {
        path:"/CreatOk",
        component:CreatOk
    },
    {
        path:"/Myclass",
        component:Myclass
    },
    {
        path:"/Over",
        component:Over
    },
    {
        // query:"",
        path:"/DesM",
        component:DespitionM
    },
    {
        path:"/Improve",
        component:Improve
    },

]
const  router=new VueRouter({
    routes
})
export default router;