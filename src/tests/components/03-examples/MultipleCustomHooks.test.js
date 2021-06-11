import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch'
import { useCounter } from '../../../hooks/useCounter'

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Test for <MultipleCustomHooks />', () => {

    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    })
    
    test('should show component correctly', () => {

        useFetch.mockReturnValue({
            loading: true,
            data: null,
            err: null
        })

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect(wrapper).toMatchSnapshot();
    })

    test('should show info', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Moises',
                quote: 'Hello world'
            }],
            loading: false,
            err: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('.mb-0').text().trim() ).toBe('Hello world');
        expect( wrapper.find('footer').text().trim() ).toBe('Moises');
        // console.log(wrapper.html());
    })
    
    
})
