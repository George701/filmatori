import React, { Fragment } from 'react';
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
                <Fragment>
                    <AppNav />
                    <Route exact path="/" component={Landing} />
                    <div className="container">
                        <Switch>
                            <Route exact path='/hall' component={Hall} />
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        </Provider>
    )
};

export default App;
