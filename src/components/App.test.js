import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('contains a connected Wallet componet', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true)
    });
});