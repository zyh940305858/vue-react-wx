import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './home.css';
import Swiper from 'swiper';
import axios from 'axios';
import Loadable from 'react-loadable';

const LoadScrollbar = Loadable({
    loader: () => import('../../components/Scrollbar'),
    loading: () => <div>Loading...</div>
})

export default class Home extends Component {

    componentWillMount() {
        if (!localStorage.getItem('token')) {
            this.props.history.push("/login")
        }
    }

    state = {
        banner: []
    }

    render() {
        let { banner } = this.state;
        return (
            <>
                <Header leftbtn="iconfont icon-fangdajing" title="首页" rightbtn="iconfont icon-set"></Header>
                <div className="main">
                    <LoadScrollbar banner={banner}></LoadScrollbar>
                </div>
                <Footer></Footer>
            </>
        )
    }

    componentDidMount() {
        axios.get('/home').then(res => {
            this.setState({
                banner: res.data.banner
            }, () => {
                new Swiper('.swiper-container', {
                    loop: true,
                    autoplay: true,//可选选项，自动滑动
                })
            })
        })
    }

}
