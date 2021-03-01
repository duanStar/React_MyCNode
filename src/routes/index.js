import React,{Component} from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import routes from './routes.js';

class Router extends Component{
    render(){
        return (
            <Switch>
                <Route path='/' exact render={()=>{
                   return <Redirect to='/index/all'></Redirect>
                }}></Route>
                <Route path='/index' exact render={()=>{
                   return <Redirect to='/index/all'></Redirect>
                }}></Route>
                {routes.map((item,index)=>{
                    return <Route key={index} path={item.path} exact={item.exact} render={item.render}></Route>
                })}
            </Switch>
        );
    }
}
export default Router;