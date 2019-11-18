import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo"><img src="../logo.png" alt="" /></div><div className="search"><a href="##"><i className="iconfont icon-fangdajing"></i>抖音</a></div>
            </header>
        )
    }
}
