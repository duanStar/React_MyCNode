import React,{Component} from 'react';
import routes from '../routes/routes';
import {Menu} from 'antd';
import {NavLink} from 'react-router-dom';

class Nav extends Component{
    
    render(){
        const {NavKey,mode,id} = this.props;
        return (
            <Menu theme="dark" mode={mode} id={id} selectedKeys={[NavKey]} >
                        {routes.filter(item=>item.isNav).map((item)=>{
                            const {Icon} = item;
                            return <Menu.Item key={item.to?item.to:item.path} icon={Icon?<Icon />:''}><NavLink to={item.to?item.to:item.path}>{item.title}</NavLink></Menu.Item>
                        })}
            </Menu>
        )
    }
}

export default Nav;