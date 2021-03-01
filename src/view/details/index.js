import React,{Component} from 'react';
import TxtDetails from './txtDetails';
import ReplyList from './replyList';
import {connect} from 'react-redux';
import {getDetailsData} from '../../store/action/index';

class Details extends Component{
    constructor(props){
        super(props);
        let {id} = this.props.match.params;
        this.getData(id);
    }
    getData(id){
        this.props.dispatch((dispatch)=>{
            getDetailsData({
                dispatch,
                id
            });
        });
    }
    render(){
        let {data,loading} = this.props;
        console.log(this.props);
        return(
            <div className='wrap'>
                <TxtDetails data={data} loading={loading} />
                <ReplyList loading={loading} replies={data.replies} replyCounts={data.reply_count} />
            </div>
        );
    }
}
export default connect(state=>state.details)(Details);