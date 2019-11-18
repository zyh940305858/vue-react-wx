import React, { Component } from 'react'
import axios from 'axios';
import Swiper from 'swiper/dist/js/swiper';
import "./css/Hot.css";
import {connect} from 'react-redux';

class Hot extends Component {

    state = {
        data: {}
    }

    render() {
        console.log(this.state)
        let data = this.state.data;
        return (
            <>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            data.banner && data.banner.map((item, index) => {
                                return <div key={index} className="swiper-slide"><img src={item.imgUrl} alt="" /></div>
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="nav">
                    {
                        data.nav && data.nav.map((item,index)=>{
                            return (<dl key={index}>
                                <dt><img src={item.navicon} alt=""/></dt>
                                <dd><p>{item.navtitle}</p></dd>
                            </dl>)
                        })
                    }
                </div>
                <div className="nav2">
                    <div className="nav2_content">
                        {
                            data.nav2 && data.nav2.map((item, index) => {
                                return (<div className="nav2_item" key={index}>
                                    <img src={item.bg} alt=""/>
                                    <p>{item.navtitle}</p>
                                </div>)
                            }) 
                        }
                    </div>
                </div>
                <div className="list">
                    <ul>
                        {
                            data.list && data.list.map((item,index)=>{
                                return (
                                    <div key={index} onClick={this.addFn.bind(this,item)}>
                                        <h3>{item.title}</h3>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </>
        )
    }

    componentDidMount() {
        axios.get('/hotdata').then(res => {
            this.setState({
                data: res.data
            })
        })
        setTimeout(()=>{
            new Swiper('.swiper-container', {
                loop: true,  //循环
                autoplay: {   //滑动后继续播放（不写官方默认暂停）
                    disableOnInteraction: false,
                },
                pagination: {  //分页器
                    el: '.swiper-pagination'
                }
            })
        },100)
    }

    addFn(obj){
        this.props.save(obj)
    }

}


export default connect(
    (state)=>{
        return {

        }
    },
    (dispatch)=>{
        return {
            save:function(obj){
                dispatch({
                    type:"ADD",
                    obj
                })
            }
        }
    }
)(Hot);
