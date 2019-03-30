import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router';


import { Tabs, WhiteSpace } from 'antd-mobile';

import NoMatch from './components/NoMatch';
import Home from './components/Home';
import Message from './pages/message';
import User from './pages/user';
import './main.css';


function renderTabBar(props) {
    return (
        <Tabs.DefaultTabBar {...props} />
    );
}
const tabs = [
    { title: 'First Tab' },
    { title: 'Second Tab' },
    { title: 'Third Tab' },
];


const App = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            {(
                <div className="main">
                     <section>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/message" component={Message} />
                            <Route path="/user" component={User} />
                            <Route component={NoMatch} />
                        </Switch>
                    </section>
                    <div style={{ height: 50 }}>
                        <Tabs tabs={tabs}
                            initalPage={'t2'}
                            tabBarPosition="bottom"
                            renderTabBar={renderTabBar}
                        >
                        </Tabs>
                    </div>
                </div>
            )}
        </ConnectedRouter>
    )
}


export default App