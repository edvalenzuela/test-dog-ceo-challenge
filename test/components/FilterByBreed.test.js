import { fireEvent, render, screen } from "@testing-library/react";
import { FilterByBreed } from "../../src/components";
import { useFetch } from "../../src/hooks/useFetch";
import { DogContext } from "../../src/context/DogContext";

jest.mock('../../src/hooks/useFetch');

describe('Pruebas en el componente <FilterByBreed />', () => {

    const changeSelect = jest.fn();
    useFetch.mockReturnValue({ 
        data: null, 
        isLoading: true, 
        hasError: null 
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe de mostrar el componente por defecto con la data del useContext', () => {
        render(
            <DogContext.Provider value={{ 
                data: { message: {
                    african: []
                }}, 
                isLoading: false, 
                hasError: null 
            }}>
                <FilterByBreed />
            </DogContext.Provider>
        );
    });

    test('Debe de seleccionar una raza', () => {
        const { getByTestId, getAllByTestId } = render(
            <DogContext.Provider value={{ 
                data: { message: {
                    african: []
                }}, 
                isLoading: false, 
                hasError: null 
            }}>
                <FilterByBreed changeSelect={changeSelect} />
            </DogContext.Provider>
        );
        const select = getByTestId('select');
        fireEvent.click(select, { target: { value: 'african' } });

       let options = getAllByTestId('select-option')
       expect(options[0].selected).toBeTruthy();
    });
})