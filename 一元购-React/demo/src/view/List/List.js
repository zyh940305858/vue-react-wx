import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {connect} from 'react-redux';
import './list.css'
import axios from 'axios'


 class List extends Component {
    state = {
        btns: [],
        data: [],
        idx:0
    }
    render() {
        let { btns, data,idx } = this.state;
        return (
            <>
                <Header title="商品列表"></Header>
                <div className="main">
                    <div className="m_left">
                        {
                            btns && btns.map((item, index) => {
                                return <span className={idx === index ? "active":""} key={index} onClick={this.clickbtn.bind(this,index,item.title)}>{item.title}</span>
                            })
                        }
                    </div>
                    <div className="m_right">
                        <div className="m_header"><span onClick={this.changedata.bind(this)}>低价</span><span onClick={this.changedata.bind(this)}>高价</span></div>
                        <div className="m_main">
                            {
                                data && data.map((item, index) => {
                                    return <div key={index}>
                                        <img src={item.imgUrl} alt="" />
                                        <p>{item.title}</p>
                                        <p><b>{item.price}</b>元</p>
                                        <button onClick={this.addFn.bind(this,item)}>收藏</button>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </>
        )
    }
    componentDidMount() {
        axios.post('/list',{title:"全部"}).then(res => {
            console.log(res.data)
            this.setState({
                btns: res.data[0].btns,
                data: res.data[0].data
            })
        })
    }
    clickbtn(idx,title){
        this.setState({
            idx
        },()=>{
            axios.post('/list',{title}).then(res=>{
                if(title === "全部"){
                    this.setState({
                        btns: res.data[0].btns,
                        data: res.data[0].data
                    })
                }else{
                    this.setState({
                        data: res.data
                    })
                }
            })
        })
    }
    changedata(e){
        let {data} = this.state;
        if(e.target.innerHTML === "低价"){
            this.setState({
                data:data.sort((a,b)=>{return a.price-b.price})
            })
        } else if (e.target.innerHTML === "高价"){
            this.setState({
                data: data.sort((a, b) => { return b.price - a.price })
            })
        }
    }
    addFn(obj){
        this.props.addFn(obj);
    }
}


export default connect(
    (state)=>{
        return {

        }
    },
    (dispatch)=>{
        return {
            addFn: (obj)=>{
                dispatch({
                    type:"ADD",
                    obj
                })
            }
        }
    }
)(List)
