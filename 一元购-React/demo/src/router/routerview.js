import React from 'react';
import {Switch,Redirect,Route} from 'react-router-dom';

export default function RouterView (props) {
    let {routes} = props;
    let routerArr = routes && routes.filter(item => !item.redirect);
    let redirectArr = routes && routes.filter(item => item.redirect).map((item,index)=><Redirect key={index} from={item.path} to={item.redirect} />);
    return (<Switch>
        {
            routerArr.map((item,index)=>{
                return <Route key={index} path={item.path} render={(props)=>{
                    return <item.component {...props} children={item.children} />
                }} />
            }).concat(redirectArr)
        }
    </Switch>)
}
