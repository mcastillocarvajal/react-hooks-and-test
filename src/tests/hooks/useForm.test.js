import { useForm } from "../../hooks/useForm";
import { act, renderHook } from "@testing-library/react-hooks";

describe('Test for useForm', () => {

    const initialForm = {
        name: 'moises',
        email: 'moises@gmail.com'
    };

    test('should return a form', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        const [ values, handleInputChange, reset ] = result.current;

        expect( values ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
    });

    test('should change the form value', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange ] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'React'
                }
            });
        });

        const [ values ] = result.current;
        expect( values ).toEqual({...initialForm, name: 'React'})

    });

    test('should reset the form', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange, reset ] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'React'
                }
            });
            reset();
        });

        const [ values ] = result.current;
        expect( values ).toEqual(initialForm)
    });
    
    
    
    
})
