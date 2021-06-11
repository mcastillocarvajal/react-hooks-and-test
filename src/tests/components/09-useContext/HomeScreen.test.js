import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('test for <HomeScreen />', () => {

    const user = {
        name: 'Moises',
        email: 'moises@gmail.com'
    }

    const wrapper = mount( 
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('should show component correctly', () => {

        expect( wrapper ).toMatchSnapshot();
    })
    
})
