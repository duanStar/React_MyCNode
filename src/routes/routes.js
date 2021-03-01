import React from 'react';
import Index from '../view/index';
import About from '../view/about';
import Book from '../view/book';
import Details from '../view/details';
import User from '../view/user';
import View404 from '../view/view404';
import { HomeOutlined,BookOutlined,InfoCircleOutlined} from '@ant-design/icons';

const routes=[
    {
        title:"首页",
        path:'/index/:tabs',
        to:'/index',
        isNav:true,
        exact:true,
        Icon:HomeOutlined,
        render(props){
            return <Index {...props} />
        }
    },
    {
        title:"关于",
        path:'/about',
        isNav:true,
        exact:true,
        Icon:InfoCircleOutlined,
        render(props){
            return <About {...props} />
        }
    },
    {
        title:"教程",
        path:'/book',
        isNav:true,
        exact:true,
        Icon:BookOutlined,
        render(props){
            return <Book {...props} />
        }
    },
    {
        title:"文章详情",
        path:'/details/:id',
        isNav:false,
        exact:true,
        render(props){
            return <Details {...props} />
        }
    },
    {
        title:"用户详情",
        path:'/user/:username',
        isNav:false,
        exact:true,
        render(props){
            return <User {...props} />
        }
    },
    {
        title:'全部',
        path:'/index/all',
        isSubNav:true,
        render(props){
            return <Index {...props} />
        }
    }
    ,
    {
        title:'精华',
        path:'/index/good',
        isSubNav:true,
        render(props){
            return <Index {...props} />
        }
    },
    {
        title:'问题',
        path:'/index/ask',
        isSubNav:true,
        render(props){
            return <Index {...props} />
        }
    },
    {
        title:'分享',
        path:'/index/share',
        isSubNav:true,
        render(props){
            return <Index {...props} />
        }
    },
    {
        title:'招聘',
        path:'/index/job',
        isSubNav:true,
        render(props){
            return <Index {...props} />
        }
    },
    {
        title:'客户端测试',
        path:'/index/dev',
        isSubNav:true,
        render(props){
            return <Index {...props} />
        }
    },
    {
        title:"404",
        path:'',
        isNav:false,
        exact:true,
        render(props){
            return <View404 {...props} />
        }
    }
];

export default routes;