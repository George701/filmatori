import React from 'react';
import { shallow } from '../enzyme';
import Landing from './Landing';

describe('Landing', () => {
    const landing = shallow(<Landing />);

    it('renders properly', () => {
        expect(landing).toMatchSnapshot();
    });

    it('displays the background-image container', () => {
        expect(landing.find('.landing-image').exists()).toBe(true);
    });

    it('displays the title', () => {
        expect(landing.find('.landing-head').text()).toEqual('FILMATORI');
    });

    it('displays the description', () => {
        const desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati similique fugiat, quisquam quas quia aspernatur perferendis tempora dolore. Numquam praesentium velit exercitationem. Laboriosam sit dolor suscipit repellendus quia iusto!'
        expect(landing.find('.landing-desc').text()).toEqual(desc);
    });
});