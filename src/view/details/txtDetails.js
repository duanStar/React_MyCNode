import React,{Component} from 'react';
import {Card,Avatar} from 'antd';
import TxtTag from '../../component/txtTag';
import {Link} from 'react-router-dom';

class TxtDetails extends Component{
    render(){
        const {data,loading} = this.props;
        console.log(data);
        const title =(<div>
            <h1>{data.title}</h1>
            <TxtTag data={data} />
            <Avatar style={{margin:'0 5px'}} size={40} src={data.author.avatar_url} />
            <Link style={{padding:'0 5px'}} to={`/user/${data.author.loginname}`}>{data.author.loginname}</Link>
            <span>发表于:{data.create_at.substr(0,10)}</span>
        </div>);
        return (
            <Card
                type='inner'
                title={title}
                loading={loading}
            >
                <div dangerouslySetInnerHTML={{
                    __html:data.content
                }}>
                    
                </div>
            </Card>
        )
    }   
}

export default TxtDetails;