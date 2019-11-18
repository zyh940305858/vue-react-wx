import React,{Component} from 'react';
import '../mock/index';
import axios from 'axios';

class App extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    handleClick = ()=>{
        
    }
    render(){
        return (
            <div className="app">
				
            </div>
        )
    }
    componentDidMount(){
        // axios.post('/goodList',{
        //     page:"1",
        //     pageSize:"5"
        // }).then(res=>{
        //     console.log(res.data)
        // })
        axios.post('/carsouel',{
            count:5
        }).then(res=>{
            console.log(res.data)
        })
    }
}

export default App;

