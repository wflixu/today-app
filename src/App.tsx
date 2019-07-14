import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, RouteComponentProps } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

import homePage from "./pages/home/index";
import messagePage from "./pages/message";
import myPage from './pages/my/My';
import Login from './pages/login';
// import Header from "./components/Header";
// import LoginPage from './pages/LoginPage';
// import ContactUsPage from './pages/ContactUsPage';



const Routes: React.SFC<RouteComponentProps> = (props) => {
    const [loggedIn, setLoggedIn] = React.useState(true);

    return (
        <div>
            {/* <Header /> */}
         
                    <Switch>
                        <Redirect exact={true} from="/" to="/login" />
                        <Route exact={true} path="/home" component={homePage} />
                        <Route  path="/message" component={messagePage} />
                        <Route  path="/my" component={myPage} />
                        <Route  path="/login" component={Login} />
                       
                    </Switch>
            
        </div>
    );
};
const RoutesWrap: React.SFC = () => {
    return (
        <Router>
            <Route component={Routes}/>
        </Router>
    )
}
export default RoutesWrap; 