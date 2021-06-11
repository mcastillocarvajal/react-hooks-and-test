import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Test for <RealExampleRef />', () => {
    
    const wrapper = shallow( <RealExampleRef /> );

    test('should show component correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should show component <MultipleCustomHooks />', () => {
        
        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);
    })
    
})
