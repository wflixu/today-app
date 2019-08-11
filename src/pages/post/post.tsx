import * as React from 'react';

import axios from 'axios';
import './post.less';


interface IReponse {
    data: string;
    status: number;
}

interface IState {
    text: string;
    img: any;
    submitting: boolean;
}



class PostPage extends React.Component<{}, IState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            text: '',
            img: '',
            submitting: false,
        }
    }


    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { text, img } = this.state;
        const formData = new FormData();
        formData.append('text', text);
        formData.append('uname', 'test');
        formData.append('pass', '123');
        formData.append('file', img);

        console.log(this.state);
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        // 发送 POST 请求
        axios({
            headers: {
                'Content-Type': 'multipart/form-data',
                'uname': 'test',
                'pass': '123'
            },
            method: 'post',
            url: '/user/post',
            // ContentType: 'multipart/form-data',
            data: formData
        }).then((response) => {
            console.log(response.data);
            if (response.data === 'success') {
                window.location.assign('/home')
            }
            this.setState({
                text: '',
                img: null,
                submitting: false
            })
            return {
                success: response.data === 'success' ? true : false,
            };
        }).catch((error) => {
            console.log(error);
            return {
                success: false
            };
        });;
        // axios.post('/user/post', data).then((response) => {
        //     console.log(response.data);
        //     if (response.data === 'success') {
        //         window.location.assign('/home')
        //     }
        //     this.setState({
        //         text: '',
        //         img: null,
        //         submitting: false
        //     })
        //     return {
        //         success: response.data === 'success' ? true : false,
        //     };
        // }).catch((error) => {
        //     console.log(error);
        //     return {
        //         success: false
        //     };
        // });
    };
    private textChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            ...this.state,
            text: e.currentTarget.value,
        })
    }
    private imgChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        console.log(e.currentTarget.files)
        const file = (e.currentTarget.files && e.currentTarget.files.length > 0) ? e.currentTarget.files[0] : null;
        this.setState({
            ...this.state,
            img: file,
        })
    }
    public render() {
        const { text, img } = this.state;
        return (
            <div className="page-container">
                <div className="login-head">
                    <h2>Today</h2>
                </div>
                <div className="login-form">
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div className="form-row">
                            <label htmlFor="text">用户名</label>
                            <textarea value={text} id="text"
                                onChange={e => this.textChange(e)}
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="img">密码</label>
                            <input type="file" id="img"
                                onChange={e => this.imgChange(e)}
                            />
                        </div>
                        <div className="form-row">
                            <button disabled={this.state.submitting} >登录</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default PostPage;