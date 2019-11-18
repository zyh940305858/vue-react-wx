import React, { Component } from 'react'
import {withRouter,NavLink} from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <footer>
                <NavLink to="/home">首页</NavLink>
                <NavLink to="/list">商品</NavLink>
                <NavLink to="#">成交</NavLink>
                <NavLink to="/collect">收藏</NavLink>
                <NavLink to="#">我的</NavLink>
            </footer>
        )
    }
}
export default withRouter(Footer);
