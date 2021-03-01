import React,{Component} from 'react';
import {Card} from 'antd';

class PCard extends Component{
    render(){
        const {data,loading,id} = this.props;
        return (
            <div className='wrap' id={id}>
                {data.map((item,index)=><Card loading={loading} type='inner' key={index} title={item.title} >
                    <div className={item.className?item.className:''} dangerouslySetInnerHTML={{
                        __html:item.content
                    }}></div>
                </Card>)}
            </div>
        )
   }
}

export default PCard;