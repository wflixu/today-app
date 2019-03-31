import React from 'react'
import { Link } from 'react-router-dom';
import { TabBar } from 'antd-mobile';

import iconHome from '../../assets/icon/home.png';
import iconHomeActive from '../../assets/icon/home_active.png';
import iconMy from '../../assets/icon/user.png';
import iconMyActive from '../../assets/icon/user_active.png';

export default class TabBarContainer extends React.Component {
    constructor() {
        super(arguments);
        this.state = {
            selectedTab: 'home',
            hidden: false,
            fullScreen: false,
        };
    }

    render() {
        return (
            <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    tabBarPosition="bottom"
                    hidden={this.state.hidden}
                >

                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={
                            <Link to="/">
                                <img src={iconHome} style={{ width: '22px', height: '22px' }} />
                            </Link>
                        }
                        selectedIcon={
                            <img src={iconHomeActive} style={{ width: '22px', height: '22px' }} />
                        }
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'home',
                            });

                        }}
                    >
                    </TabBar.Item>


                    <TabBar.Item
                        icon={
                            <Link to="/message">
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            </Link>

                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="消息"
                        key="message"
                        dot
                        selected={this.state.selectedTab === 'message'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'message',
                            });
                        }}
                    >
                        <Link to="/message">test</Link>
                    </TabBar.Item>


                    <TabBar.Item
                        icon={<Link to="/my" style={{ width: '44px', height: '22px' }}>
                            <img src={iconMy} style={{ width: '44px', height: '22px' }} />
                        </Link>}
                        selectedIcon={<img src={iconMyActive} style={{ width: '44px', height: '22px' }}/>}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'my'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'my',
                            });
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div >
        );
    }
}