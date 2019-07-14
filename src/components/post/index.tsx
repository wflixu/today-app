import React from "react";
import './index.css';
import logo from '../../assets/logo.png';

export interface IPost {
    avatar:string;
    user_name: string;
    user_id: string;
    is_followed: boolean,
    photos: string[];
    post_id:string;
    text:string;
    love_num: number;
    notes_num: number;
}
interface IProps {
    post:IPost
}

const Post: React.SFC<IProps>= (props) => {
    const post = props.post;
    return (
        <div className="post" >
            <div className="post_header">
                <img src={logo} alt="" />
                <div>
                    from to
                </div>
            </div>
            <div className="post_body">
                <div className="post_body_imgs">
                    {post.photos.map(photo => <img key={photo} src={photo} />)}
                </div>
                <div className="post_body_text"> {post.text}</div>
            </div>
            <div className="post_footer">
                <div className="lf">
                    <span>{post.love_num}</span> 热度
                    </div>
                <div className="rf">
                    <a href="http://" className="send"/>
                    <a href="http://" className="relay"/>
                    <a href="http://" className="love"/>
                </div>
            </div>
        </div>
    )
}

export default Post;


