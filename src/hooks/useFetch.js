import { useEffect, useRef, useState } from "react"


export const useFetch = ( url ) => {

    const isMounted = useRef(true)
    const [state, setState] = useState({ data: null, loading: true, err: null });

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect( () => {

        setState({ data: null, loading: true, err: null });

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                if (isMounted.current) {
                    setState({
                        loading: false,
                        err: null,
                        data: data
                    })
                }

            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    err: 'info cannot be loaded'
                })
            })

    }, [ url ])

    return state;
}
