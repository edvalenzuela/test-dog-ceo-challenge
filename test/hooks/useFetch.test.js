import { renderHook } from "@testing-library/react";
import { useFetch } from "../../src/hooks/useFetch";


describe('Pruebas en el useFetch', () => {
    test('Debe de retornar los valores por defecto', () => {
        const { result } = renderHook( () => useFetch('') );
        const { data, isLoading, hasError } = result.current;

        expect(data).toBe(null);
        expect(isLoading).toBe(true);
        expect(hasError).toBe(null);
    });
});