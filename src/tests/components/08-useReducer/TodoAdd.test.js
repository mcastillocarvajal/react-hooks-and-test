import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';
import { demoTodos } from '../../fixtures/demoTodos';

describe('test for <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={ handleAddTodo }
        />
    )

    test('should show component correctly', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test('should NOT call handleAddTodo ', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    })

    test('should call function handleAddTodo', () => {
        
    })
    
    
})
