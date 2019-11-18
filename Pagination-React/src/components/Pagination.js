import React, { Component } from 'react'
import axios from 'axios';


//分页器组件
export default class Pagination extends Component {
    state = {
        list: [],  //列表渲染的数据
        total: "", //数据总条数
        showindex: 0  //当前显示的页数的下标
    }
    topage(index) {
        let { pageSize } = this.props;
        let page = index;
        axios.post('/list', { page, pageSize })
            .then(res => {
                console.log(res.data.list)
                this.setState({
                    total: res.data.total,
                    list: res.data.list,
                    showindex: index - 1
                })
            })
    }
    render() {
        let count = Math.ceil(this.state.total / this.props.pageSize);   //利用返回的数据总数和每页显示条数算出页数;
        let dom = [];  //设置空dom数组用来渲染dom元素
        for (var i = 0; i < count; i++) {  //循环渲染分页按钮
            dom.push(<span 
                key={i} 
                class={this.state.showindex === i ? "active" : ""} 
                onClick={this.topage.bind(this, i + 1)}>
                {i}
                </span>)
        }
        return <div>
            <ul>
                {
                    this.state.list && this.state.list.map((item, index) => {
                        return <li key={index}>{item.name}</li>
                    })
                }
            </ul>
            {
                dom
            }
        </div>;
    }
    componentDidMount() {
        let { pageSize } = this.props;  //初次结构出pageSize
        axios.post('/list', { pageSize })
            .then(res => {
                console.log(res.data.list)
                this.setState({
                    total: res.data.total,   //返回数据总数
                    list: res.data.list     //返回第一页数据  
                })
            })
    }
}
