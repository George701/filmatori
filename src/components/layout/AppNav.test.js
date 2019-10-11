import React from 'react';
import { shallow } from '../../enzyme';
import AppNav from './AppNav';

describe('AppNav', () => {
    const appNav = shallow(<AppNav />);

    it('renders properly', () => {
        expect(appNav).toMatchSnapshot();
    });

    it('displays NavbarBrand Reactstrap component', () => {
        expect(appNav.find('NavbarBrand').exists()).toBe(true);
    });

    it('displays NavbarBrand Reactstrap component, which refers to route `/`', () => {
        expect(appNav.find('NavbarBrand').props().href).toEqual('/');
    });

    it('displays two NavItem Reactstrap components', () => {
        expect(appNav.find('NavItem').length).toEqual(2);
    });

    it('displays first NavLink Reactstrap component, which refers to route `/hall`', () => {
        expect(appNav.find('NavLink').at(0).props().href).toEqual('/hall');
    });

    it('displays second NavLink Reactstrap component, which refers to github repository', () => {
        const link = 'https://github.com/George701/filmatori';
        expect(appNav.find('NavLink').at(1).props().href).toEqual(link);
    });
});