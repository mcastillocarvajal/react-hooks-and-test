import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import './SimpleForm.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    useEffect( () => {
        // console.log('hey')
    }, [] );

    useEffect( () => {
        // console.log('formState changed')
    }, [ formState ] );

    useEffect( () => {
        // console.log('email changed')
    }, [ email ] );

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    return (
        <>
            <h1>UseEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                    >
                </input>
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="name@email.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                    >
                </input>
            </div>

            { ( name === '123' ) && <Message />}
        </>
    )
}
