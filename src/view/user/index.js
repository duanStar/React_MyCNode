import React,{Component} from 'react';
import {Row,Col,Avatar} from 'antd';
import UserList from './userList';
import {getUserData} from '../../store/action/index';
import {connect} from 'react-redux';
 
class User extends Component{
    constructor(props){
        super(props);
        let {username} = this.props.match.params;
        this.getData(username);
    }
    getData(username){
        this.props.dispatch((dispatch)=>{
            getUserData({
                dispatch,
                username
            });
        });
    }
    shouldComponentUpdate(nextProps){
        if(nextProps.match.params.username!==this.props.match.params.username){
            this.getData(nextProps.match.params.username);
            return false;
        }else{
            return true;
        }
    }
    render(){
        const {loading,data} = this.props;
        let {avatar_url,loginname,create_at,score} = data;
        return(
            <div className='wrap'>
                <Row>
                    <Col md={24} xs={24}>
                        <Avatar src={avatar_url} className='userAvatar' size={100}></Avatar>
                        <Row className='userinfo'>
                            <Col md={8} xs={8} sm={8}>
                                用户名：<a>{loginname}</a>
                            </Col>
                            <Col md={8} xs={8} sm={8}>
                                积分：<a>{score}</a>
                            </Col>
                            <Col md={8} xs={8} sm={8}>
                                注册时间：<a>{create_at.substr(0,10)}</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <UserList loading={loading} data={data.recent_topics} title={"最近创建的话题"} />
                <UserList loading={loading} data={data.recent_replies} title={"最近参与的话题"} />
            </div>
        );
    }
}
export default connect(state=>state.user)(User);