import React from 'react';

import './my.css';

export default class User extends React.Component {
   public render() {
        return (
            <div>
                <div className="my-info">
                    <div className="info-top">
                        <div className="top-bar">
                            <a href="#" className="set"/>
                        </div>
                        <div className="avatar" />
                    </div>
                    <div className="user-name">geront</div>
                </div>
                <ul className="my-tabs">
                    <li >发布</li>
                    <li>喜欢</li>
                    <li className="active">关注</li>
                </ul>
                <div className="tab-content">
                    <ul className="contact-list">
                        <li className="contact">
                            <div className="contact-avatar"/>
                            <div className="detail">
                                <div className="message">
                                    <p className="contact-name">user name</p>
                                    <p className="contact-text">message</p>
                                </div>
                                <div className="contact-icon">icon</div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}