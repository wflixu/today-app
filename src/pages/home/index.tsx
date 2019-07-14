import React from "react";

import Post,{IPost} from '../../components/post/index';
import {posts as postsDate } from '../../assets/data/posts'; 

export interface IState {
   posts:IPost[];
}


export default class Home extends React.Component<{},IState> {
    constructor(){
        super(arguments);
        this.state = {
            posts:postsDate
        }
    }
    public render() {
        const {posts} = this.state;
        return (
            <div className="home_content">
            <div className="content">
               <div className="post_list" >
                   {posts.map((post,index)=><Post post={post} key={index} />)}
               </div>
            </div>
         </div>
        )
    }
}