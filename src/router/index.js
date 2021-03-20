import Vue from 'vue';
import Router from 'vue-router';
import Search from "@/components/Search";
import Join_us from "@/components/Join_us";
import Login from "@/components/Login";
// import Answer from "@/components/Answer";
import Foot from "@/components/Foot";
import Introduction from "@/components/Introduction";
import Register from "@/components/Register";
import Time_line from "@/components/Time_line";
import usrMain from "@/components/user/usrMain";
import Nav from "@/components/Nav";
import usrNav from "@/components/user/usrNav";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'root',
            components: {
                navi:Nav,
                main:Introduction,
                foot:Foot,
            }
        },
        {
            path:'/search',
            name:'search',
            components: {
                navi:Nav,
                main:Search,
                foot:Foot,
            },

            // children:[{
            //     path:'/:id?keyword=9',
            //     name:'answer',
            //     components:{
            //         main:Search,
            //         content:Answer,
            //     },
            // }
            // ]

        },
        {
            path:'/login',
            name:'login',
            components:{
                navi:Nav,
                main:Login,
                foot:Foot,
            }
        },
        {
            path:'/user',
            name:'user',
            components:{
                navi:usrNav,
                main:usrMain,
            }
        },
        {
            path:'/register',
            name:'register',
            components:{
                navi:Nav,
                main:Register,
                foot:Foot,
            }
        },
        {
            path:'/join_us',
            name:'join',
            components:{
                navi:Nav,
                main:Join_us,
                foot:Foot,
            }
        },
        {
            path:'/timeline',
            name:'recommend',
            components:{
                navi:Nav,
                main:Time_line,
                foot:Foot,
            }
        }
    ]
})
