import { useEffect, useState } from "react"


export const useFetch = ( url ) => {

    const [state, setState] = useState({ data: null, loading: true, err: null });

    useEffect( () => {

        setState({ data: null, loading: true, err: null });

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                
                setState({
                    loading: false,
                    err: null,
                    data: data
                })
            })

    }, [ url ])

    return state;
}
