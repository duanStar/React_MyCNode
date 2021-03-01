import React,{Component} from 'react';
import {Tag} from 'antd';
import tab from './tab'

function getTab(data){
    if(data.top){
        return tab.top;
    }else if(data.good){
        return tab.good;
    }else{
        return tab[data.tab];
    }
}
class TxtTag extends Component{
    render(){
        const {data} = this.props;
        const tab = getTab(data);
        // console.log(tab);
        return (
            <Tag color={tab.color}>{tab.txt}</Tag>
        );
    }
}

export default TxtTag;