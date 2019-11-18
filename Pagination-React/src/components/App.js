import React,{Component} from 'react';

import Pagination from './Pagination';

class App extends Component{
    constructor(){
        super();
        this.state = {
            list:[]
        };
    }
    render(){
        //只传入pageSize每页显示多少个自动算出多少页  默认进去请求第一页的数据
        return (
            <div className="app">
				<Pagination pageSize={8} ></Pagination> 
            </div>
        )
    }
}

export default App;

