import React from 'react';
import { shallow } from '../enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('renders properly', () => {
        expect(app).toMatchSnapshot();
    });

    it('contains a Provider react-redux component', () => {
        expect(app.find('Provider').exists()).toBe(true);
    });

    it('contains a Router react-router-dom component', () => {
        expect(app.find('BrowserRouter').exists()).toBe(true);
    });

    it('contains an AppNav component', () => {
        expect(app.find('AppNav').exists()).toBe(true);
    });

    it('contains a Switch react-router-dom component', () => {
        expect(app.find('Switch').exists()).toBe(true);
    });

    it('contains two Routes react-router-dom component', () => {
        expect(app.find('Route').length).toEqual(2);
    });
});