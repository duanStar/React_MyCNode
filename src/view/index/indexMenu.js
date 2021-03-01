import React,{Component} from 'react';
import {Menu} from 'antd';
import routes from '../../routes/routes';
import {Link} from 'react-router-dom';

class IndexMenu extends Component{
    render(){
        const {id,NavKey,mode} = this.props;
        return (
            <Menu
                        mode={mode}
                        defaultSelectedKeys={['0']}
                        selectedKeys={[NavKey]}
                        id={id}
                    >
                        {routes.filter(item=>item.isSubNav).map((item,index)=>{
                            return <Menu.Item key={index}><Link to={item.path}>{item.title}</Link></Menu.Item>
                        })}
                    </Menu>
        )
    }
}

export default IndexMenu;