import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('test for <LoginScreen />', () => {

    const setUser = jest.fn();

    const wrapper = mount( 
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />)
        </UserContext.Provider>
    )

    test('should show comp. correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('should run the setUser function with correct arguments', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( setUser ).toHaveBeenCalledWith({
            id: expect.any(Number),
            name: 'Moises'
        })
    })
    
    
})
