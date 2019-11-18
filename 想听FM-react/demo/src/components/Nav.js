import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <NavLink to="/home/my">我的</NavLink>
                <NavLink to="/home/hot">热门</NavLink>
                <NavLink to="/home/class">分类</NavLink>
                <NavLink to="/home/boutique">精品</NavLink>
            </nav>
        )
    }
}
