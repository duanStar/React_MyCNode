import React,{Component} from 'react';
import {Col,Row,Divider,Dropdown,Button} from 'antd';
import {UnorderedListOutlined} from '@ant-design/icons';
import  {Link,withRouter} from 'react-router-dom';
import routes from '../routes/routes';
import Nav from './nav';

class Header extends Component{
    render(){
        const {location} = this.props;
        const {pathname} = location;
        let  NavKey='/'+pathname.split('/')[1];
        return(
            <Row className='wrap'>  
                <Col md={6} xs={24}>
                    <Link to='/index'>
                        <h1 id='logo'>CNode</h1>
                    </Link>
                </Col>
                <Col md={18} xs={0}>
                    <Divider type="vertical" className='headerDivider' />
                    <Nav NavKey={NavKey} mode="horizontal" id="nav" />
                </Col>
                <Col md={0} xs={24} className='xsNav'>
                        <Dropdown 
                            overlay={<Nav mdoe='vertical' id='xsNav' NavKey={NavKey} /> }
                            trigger={['click','touchend']}
                            placement="bottomRight"
                            arrow
                        >
                            <Button icon={<UnorderedListOutlined />}></Button>
                        </Dropdown>
                </Col>
            </Row>
        );
    }
}

Header = withRouter(Header);

export default Header;