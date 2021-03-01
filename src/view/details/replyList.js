import React,{Component} from 'react';
import {Card,Avatar,List} from 'antd';
import {Link} from 'react-router-dom';
class ReplyList extends Component{
    render(){
        const {replies,replyCounts,loading} = this.props;
        return (
            <Card
                type='inner'
                title={`共计${replyCounts}条回复`}
                loading={loading}
            >
                <List
                    itemLayout='vertical'
                    dataSource={replies}
                    renderItem={(item)=>(
                        <List.Item
                            extra={item.ups.length?<span>有{item.ups.length}个人觉得他很赞</span>:''}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.author.avatar_url}/>}
                                description={<div><Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link><span style={{margin:'0 5px'}}>发表于:{item.create_at.substr(0,10)}</span></div>}
                            ></List.Item.Meta>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:item.content
                                }}
                            ></div>
                        </List.Item>
                    )}
                >

                </List>
            </Card>
        );
    }
}

export default ReplyList;