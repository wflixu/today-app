import * as React from 'react';
import axios from 'axios';

import './sign.less';

export interface IState {
    username: string;
    password: string;
    password2: string;

}

class SignPage extends React.Component<{}, IState>{
    constructor(props:{}) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: ''
        }
    }
    private nameChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            ...this.state,
            username:e.currentTarget.value,
        })
    }
    private passChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            ...this.state,
            password:e.currentTarget.value,
        })
    }
    private pass2Change(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            ...this.state,
            password2:e.currentTarget.value,
        })
    }
    private submitHandle(e:React.FormEvent) {
        e.preventDefault();
        if(!this.validate()){
            return ;
        }
       const data = {
           uname:this.state.username,
           pass:this.state.password,
       } 
       axios.post('/user/sign',data).then((response)=>{
            console.log(response.data);
       }).catch((error)=>{
           console.log(error);   
       })
    }
    private validate ():boolean {
         const {username,password,password2} = this.state;
        return username.length>3 && password ===password2 && password.length>3;
    }
    public render() {
        return (
            <div className="page-sign">
               <div className="login-head">
                     <h2>Today</h2>   
                 </div>
                <form className="form">
                    <div className="form-field">
                        <label htmlFor="username">用户名：</label>
                        <input type="text" value={this.state.username}
                            onChange={e => this.nameChange(e)} id="username" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="psw">密码：</label>
                        <input type="password" value={this.state.password}
                         onChange={e=>this.passChange(e)}
                        id="psw" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="psx">确认密码：</label>
                        <input type="password" value={this.state.password2}
                         onChange={e=>this.pass2Change(e)}
                        id="psx" />
                    </div>
                    <div >
                        <button className="btn-submit" onClick={e=>this.submitHandle(e)}>注册</button>
                    </div>

                </form>
            </div>
        )
    }
}


export default SignPage;
