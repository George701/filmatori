import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import AppNav from './layout/AppNav'

import Landing from './Landing'
import Hall from './Hall';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <AppNav />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path='/hall' component={Hall} />
                </Switch>
            </Router>
        </Provider>
    )
};

export default App;
