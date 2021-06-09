import React from 'react';
import {shallow} from 'enzyme';
import { HookApp } from '../HookApp';



describe('Test for <HookApp />', () => {

    test('should show component correctly', () => {

        const wrapper = shallow( <HookApp /> );
        expect( wrapper ).toMatchSnapshot();
    })
    
    
})
