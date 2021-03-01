import React,{Component} from 'react';
import {Row,Col,Pagination} from 'antd';
import routes from '../../routes/routes';
import IndexMenu from './indexMenu';
import IndexList from './list';
import {connect} from 'react-redux';

class Index extends Component{
    render(){
        const {location,match} = this.props;
        const tab = match.params.tabs;
        const {pathname} = location;
        let {data,loading} = this.props
        let index = routes.filter(item=>item.isSubNav).findIndex(item=>item.path===pathname);
        let NavKey = (index===-1?0:index) + '';
        return(
            <Row className='wrap'>
                <Col md={6} id='sider' xs={0}>
                    <IndexMenu id="indexMenu" NavKey={NavKey} mode='vertical'/>
                </Col>
                <Col md={0} id='xsSider' xs={24}>
                    <IndexMenu id="indexMenu" NavKey={NavKey} mode='horizontal'/>
                </Col>
                <Col md={18} xs={24} id='content'>
                    <IndexList tab={tab} data={data} loading={loading} />
                </Col>
            </Row>
        );
    }
}
export default connect(state=>state.list)(Index);