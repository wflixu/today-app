import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
// import { Provider } from "react-redux";
// import { Store } from "redux";
// import configureStore from "./Store";
// import { IApplicationState } from "./Store";





import './main.css';

// const store = configureStore();

// interface IProps { store: Store<IApplicationState>; }
const Root: React.SFC = () => {
    return (
        // <Provider store={props.store}>
        <App/>
        // </Provider>
    );
};


ReactDOM.render(<Root/>,
    document.getElementById('root') as HTMLElement);