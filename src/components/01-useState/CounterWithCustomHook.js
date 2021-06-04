import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './CounterApp.css'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter with Hook { state }</h1>
            <hr/>

            <button onClick={ () => increment(2) } className='btn btn-primary mr-3'> +1</button>
            <button onClick={ reset } className='btn btn-dark mr-3'>Reset</button>
            <button onClick={ () => decrement(2) } className='btn btn-primary'> -1</button>
        </>
    )
}
