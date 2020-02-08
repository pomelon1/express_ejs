import Login from "@/components/Login";
// import App from "@/App";
import HelloWorld from "@/components/HelloWorld";
import Vue from 'vue';
import VueRouter from 'vue-router';
import shopping from "@/components/shopping";
import despition from "@/components/despition";
import shopcart from "@/components/shopcart";
import Mine from "@/components/Mine"
import Odes from "@/components/odespition"
import Myahopcar from "@/components/Myahopcar";
import Myorder from "@/components/Myorder";
import ShunF from "@/components/ShunF";
// import WEN from "@/components/WEN";
import Myorder2 from "@/components/Myorder2";
import test from "@/components/test";
Vue.use(VueRouter);
const routes=[
    {
        path:"/",
        component:Login
    },
   {
       path: "/Hello",
       component: HelloWorld
   },
    {
        path: "/Shop",
        component: shopping
    },
    {
        params:"id",
        path: "/des",
        component: despition,
    },
    {
        path: "/shopcart",
        component: shopcart,
    },
    {
        path: "/Mine",
        component: Mine,
    },
    {
        params:"id",
        path:"/odes",
        component:Odes
    },
    {
        path:"/Myshopcar",
        component:Myahopcar
    },
 {
        path:"/Myorder",
        component:Myorder
    },{
        path:"/Myorder2",
        component:Myorder2
    },
{
        path:"/S",
        component:ShunF
    },{
        path:"/WEN",
        component:test
    },
]
 const  router=new VueRouter({
     routes
 })
export default router;