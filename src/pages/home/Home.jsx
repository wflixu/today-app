import React from "react";

import Post from '../../components/post/post.jsx';
import PostsData from '../../assets/data/posts.json'; 

export default class Home extends React.Component {
    constructor(){
        super(arguments);
        this.state = {
            posts:PostsData
        }
    }
    render() {
        const {posts} = this.state;
        return (
            <div className="home_content">
            <div className="content">
               <div className="post_list" >
                   {posts.map((post,index)=>{return <Post post={post} key={index}  />})}
               </div>
            </div>
         </div>
        )
    }
}