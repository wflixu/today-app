import React from "react";
import './index.css';
import logo from '../../assets/logo.png';

export default class Post extends React.Component {
    constructor(){
        super(arguments);
    }
    render() {
        const {post} = this.props
        return (
            <div className="post" >
                <div className="post_header">
                    <img src={logo} alt="" />
                    <div>
                        <div>{post.name}</div>
                        <div> {post.from}</div>
                    </div>
                </div>
                <div className="post_body">
                     <div className="post_body_imgs">
                        {post.photos.map(photo=> <img  src={photo} /> )}
                    </div>
                    <div className="post_body_text"> {post.text}</div>
                </div>
                <div className="post_footer">
                    <div className="lf">
                         <span>{post.love_num}</span> 热度
                    </div>
                    <div className="rf">
                        <a href="http://" className="send"></a>
                        <a href="http://" className="relay"></a>
                        <a href="http://" className="love"></a>
                    </div>
                 </div>
            </div>
        )
    }
}


