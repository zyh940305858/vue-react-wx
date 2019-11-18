import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {connect} from 'react-redux';

class Collect extends Component {
    render() {
        console.log(this.props.list)
        let {list} = this.props;
        return (
            <>
                <Header title="收藏"></Header>
                <div className="main">
                    {
                        list && list.map((item,index)=>{
                            return <div key={index}>
                                <h3>{item.title}</h3>
                                <button onClick={this.subFn.bind(this,item)}>删除</button>
                                </div>
                        })
                    }
                </div>
                <Footer></Footer>
            </>
        )
    }
    subFn(obj){
        this.props.subFn(obj)
    }
}

export default connect(
    (state)=>{
        return {
            list: state.collectReducer
        }
    },
    (dispatch)=>{
        return {
            subFn:(obj)=>{
                dispatch({
                    type:"SUB",
                    obj
                })
            }
        }
    }
)(Collect)

