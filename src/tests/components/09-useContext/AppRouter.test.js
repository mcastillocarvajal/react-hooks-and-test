import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('test for <AppRouter />', () => {

    const user = {
        id: 1,
        name: 'Moises'
    }

    const wrapper = mount( 
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter /> );
        </UserContext.Provider>
    )

    test('should show comp correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();    })
    
})
