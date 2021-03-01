import React,{Component} from 'react';
import {Card,Avatar,List} from 'antd';
import {Link} from 'react-router-dom';

class UserList extends Component{
    render(){
        const {loading,data,title}  = this.props;
        return (
            <Card
                type='inner'
                loading={loading}
                title={title}
                id='userList'
            >
                <List
                    dataSource={data}
                    renderItem={(item)=>(
                        <List.Item>
                            <Avatar src={item.author.avatar_url} />
                            <Link className='userName' to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>
                            <h4><Link to={`/details/${item.id}`}>{item.title}</Link></h4>
                            <time>最后回复:{item.last_reply_at.substr(0,10)}</time>
                        </List.Item>
                    )}
                >

                </List>
            </Card>
        );
    }
}

export default UserList;