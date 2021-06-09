import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {

    const [ { description }, handleInputChange, reset] = useForm({
        description: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 0 ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo( newTodo )
        reset();
    }

    return (
        <>
            <h4> Add todo </h4>
            <hr />

            <form onSubmit={ handleSubmit }>
                <input
                    className='form-control'
                    type='text'
                    name='description'
                    placeholder='Learn...'
                    autoComplete='off'
                    value={ description }
                    onChange={ handleInputChange }
                />

                <button 
                    className='btn btn-outline-primary mt-1 btn-block'
                    type='submit'>
                    Add
                </button>
            </form>
        </>
    )
}
