import React,{Component} from 'react';
import {List,Avatar} from 'antd';
import {Link} from 'react-router-dom';
import TxtTag from '../../component/txtTag';
import {getData} from '../../store/action/index';
import {connect} from 'react-redux';

class IndexList extends Component {
    constructor(props){
        super(props);
        this.state={
            page:1,
        }
        this.isStart=true;
        this.getData(this.props.tab);
    }
    shouldComponentUpdate(nextProps,nextState){
        this.isStart=false;
        if(this.props.tab!==nextProps.tab){
            this.setState({
                page:1,
            });
            this.getData(nextProps.tab);
            return false; //由redux数据触发更新而不是tab改变触发更新
        }else if(this.state.page!==nextState.page){
            this.getData(nextProps.tab);
            return true;
        }else{
            return true;
        }
        
    }
    getData(tab){
        let {page} = this.state;
        this.props.dispatch((dispatch)=>{
            getData({dispatch,tab,page});
        });
    }
    render(){
        const {data,loading} = this.props;
        let pageConfig={
            current:this.state.page,
            pageSize:15,
            total:1500,
            onChange:(page)=>{
                this.setState({
                    page
                });
            },
            showSizeChanger:false
        }
        return (<div>
            <List
                bordered
                style={{borderBottom:'none'}}
                pagination={this.isStart?false:pageConfig}
                loading={loading}
                dataSource={data}
                renderItem={item => (
                  <List.Item
                    actions={[`回复：${item.reply_count}`,`访问：${item.visit_count}`]}
                  >
                    <List.Item.Meta
                        avatar={<Avatar src={item.author.avatar_url} ></Avatar>}
                        title={<div><TxtTag data={item} /><Link to={`/details/${item.id}`}>{item.title}</Link></div>}
                        description={<p><Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>发表于：{item.create_at.substr(0,10)}</p>}
                    ></List.Item.Meta>
                  </List.Item>
                )}
            />
        </div>)
    }
}

export default connect(state=>state.list)(IndexList);