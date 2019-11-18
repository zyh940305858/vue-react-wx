import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        let {leftbtn,rightbtn,title,bg} = this.props;
        return (
            <header style={{backgroundColor:bg}}>
                {
                    leftbtn !== undefined ? <div className="hd_left"><i className={leftbtn}></i></div> :null
                }
                {
                    title !== undefined ? <div className="hd_center">{title}</div> : <div className="hd_center"></div>
                }
                {
                    rightbtn !== undefined ? <div className="hd_right"><i className={rightbtn}></i></div> :null
                }
            </header>
        )
    }
}

