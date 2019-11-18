import React, { Component } from 'react'
import './login.css';
import axios from 'axios';
import Header from '../../components/Header';

export default class Login extends Component {
    state = {
        user:'',
        pwd:''
    }
    render() {
        return (
            <>
                <Header leftbtn="iconfont icon-cuo" title="登陆" bg="#efeff4"></Header>
                <div className="main">
                    <img src="./images/user.jpg" alt="" className="user" />
                    <p><input type="user" name="user" onChange={this.changestate.bind(this)} placeholder="请输入用户名" /></p>
                    <p><input type="password" name='pwd' onChange={this.changestate.bind(this)} placeholder="请输入密码" /></p>
                    <button className="loginbtn" onClick={this.submit.bind(this)}>登陆</button>
                </div>
            </>
        )
    }
    changestate(e){
        let names = e.target.name;
        this.setState({
            [names]:e.target.value
        })
    }
    submit(){
        let {user,pwd} = this.state;
        if (user === "" || pwd === ""){
            alert('用户名或密码为空');
        }else{
            axios.post('/login',{
                user,
                pwd
            }).then(res=>{
                let {code} = res.data;
                if (code === 0){
                    localStorage.setItem("token",res.data.token);
                    this.props.history.push("/home");
                }else{
                    alert(res.data.message)
                }
            })
        }
    }
}
