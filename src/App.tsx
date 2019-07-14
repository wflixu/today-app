import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, RouteComponentProps } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

import homePage from "./pages/home/index";
import exporePage from "./pages/expore/expore";
import myPage from './pages/my/My';
import Login from './pages/login';
import SignPage from './pages/sign';
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
                        <Route  path="/expore" component={exporePage} />
                        <Route  path="/my" component={myPage} />
                        <Route  path="/login" component={Login} />
                        <Route  path="/sign" component={SignPage} />
                       
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