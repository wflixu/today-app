import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import NoMatch from './components/NoMatch';
import Home from './pages/home/Home';
import Message from './pages/message';
import My from './pages/my/My';
import TabBar from './components/tabBar/TabBar';

import './main.css';

const App = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            {(
                <div className="main">
                    <section>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/message" component={Message} />
                            <Route path="/my" component={My} />
                            <Route component={NoMatch} />
                        </Switch>
                    </section>
                    <TabBar />
                </div>
            )}
        </ConnectedRouter>
    )
}

export default App