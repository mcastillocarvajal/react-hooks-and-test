import { useFetch } from "../../hooks/useFetch";
import { renderHook } from "@testing-library/react-hooks";

describe('Test for useFetch', () => {
    
    test('should return default info', () => {
        
        const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        const { data, loading, err } = result.current;

        expect( data ).toBe( null );
        expect( loading ).toBe( true );
        expect( err ).toBe( null );
    })

    test('should have the correct info, loading: false, err: false', async () => {

        const { result, waitForNextUpdate }  = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        await waitForNextUpdate({timeout: 3000});

        const { data, loading, err } = result.current;

        expect( data.length ).toBe(1);
        expect( loading ).toBe(false);
        expect( err ).toBe(null);

    })

    test('should handle the error', async () => {

        const { result, waitForNextUpdate }  = renderHook( () => useFetch('https://reqres.in/apid/users?page=2'));
        await waitForNextUpdate({timeout: 3000});

        const { data, loading, err } = result.current;

        expect( data ).toBe(null);
        expect( loading ).toBe(false);
        expect( err ).toBe('info cannot be loaded');

    })
})
