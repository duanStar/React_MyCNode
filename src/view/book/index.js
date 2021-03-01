import React,{Component} from 'react';
import data from './data';
import PCard from '../../component/about_book_Card';

class Book extends Component{
    state={
        loading:true
    }
    componentWillMount(){
        this.setState({
            loading:true
        })
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading:false
            });
        },1000);
    }
    render(){
        console.log(data);
        return(
            <PCard id='bookIndex' data={data} loading={this.state.loading} />
        );
    }
}
export default Book;