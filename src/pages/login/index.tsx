import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './index.less';


interface IReponse {
    data: string;
    status: number;
}

interface IState {
    uname: string;
    pass: string;
    submitting: boolean;
}



class LoginPage extends React.Component<{}, IState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            uname: '',
            pass: '',
            submitting: false,
        }
    }


    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { uname, pass } = this.state;

        console.log(this.state);
        axios({
            url: '/1.1/login',
            method: 'post',
            headers: {
                'X-LC-Id': 'awgkVY8XvUY5oWtvmzRH6ylj-gzGzoHsz',
                'X-LC-Key': 'GJnJ1a8KVnaVLquMKj6uSllD'
            },
            data: {
                username: uname,
                password: pass,
            }
        }).then((response) => {
            console.log(response.data);
            if(response.data.sessionToken){
                window.location.assign('/home')
            }
            this.setState({
                uname:'',
                pass:'',
                submitting:false
            })
            return {
                success: response.data === 'success' ? true : false,
            };
        }).catch((error) => {
            console.log(error);
            return {
                success: false
            };
        });
    };
    private unameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            uname: e.currentTarget.value,
        })
    }
    private passChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            pass: e.currentTarget.value,
        })
    }
    public render() {
        const { uname, pass } = this.state;
        return (
            <div className="page-container">
                <div className="login-head">
                    <h2>Today</h2>
                </div>
                <div className="login-form">
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div className="form-row">
                            <label htmlFor="username">用户名</label>
                            <input type="text" value={uname} id="username"
                                onChange={e => this.unameChange(e)}
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="pwd">密码</label>
                            <input type="password" id="pwd"
                                value={pass} onChange={e => this.passChange(e)} />
                        </div>
                        <div className="form-row">
                            <button disabled={this.state.submitting} >登录</button>
                        </div>
                    </form>
                </div>
                <div className="footer">
                    <Link to={`/sign`}>去注册</Link>
                </div>
            </div>
        )
    }
}



export default LoginPage;