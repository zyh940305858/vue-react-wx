import React, { Component } from 'react'
import  Header from '../../components/Header';
import Nav from '../../components/Nav';
import RouterView from '../../router/routerview';

export default class Home extends Component {
    render() {
        let children = this.props.children;
        console.log(this.props.children)
        return (
            <div>
                <Header></Header>
                <Nav></Nav>
                <RouterView routes={children}></RouterView>
            </div>
        )
    }
}
