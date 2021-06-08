import React, { useMemo, useState } from 'react';
import { heavyProcess } from '../../helpers/heavyProcess';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/SimpleForm.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter( 50 );
    const [show, setShow] = useState(true);

    const memoheavyProcess = useMemo(() => heavyProcess( counter ), [ counter ])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3> Counter: <small>{ counter }</small></h3>
            <hr />

            <p> { memoheavyProcess }</p>

            <button
                className='btn btn-dark'
                onClick={ increment }>
                +1
            </button>

            <button
                className='btn btn-outline-dark ml-3'
                onClick={ () => {
                    setShow( !show )
                }}>
                Show/Hide { JSON.stringify( show )}
            </button>


        </div>
    )
}
