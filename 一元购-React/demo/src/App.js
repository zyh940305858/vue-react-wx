import React,{Component} from 'react';
import Router from './router';
import {Provider} from 'react-redux'
import store from './store';

class App extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    render(){
        return (
            <Provider store={store}>
                <Router></Router>
            </Provider>
        )
    }
}

export default App;

