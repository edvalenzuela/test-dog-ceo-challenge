import { fireEvent, render, screen } from "@testing-library/react";
import { FilterByBreed } from "../../src/components";

describe('Pruebas en el componente <FilterByBreed />', () => {

    const changeSelect = jest.fn();

    const testData = {
        message: {
            affenpinscher: [],
        }
    };

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe de mostrar el componente por defecto con la data', () => {
        render(
            <FilterByBreed data={testData} selectBreed="" handleBreedChange={changeSelect} />
        );
        screen.debug()
    });

    test('Debe de seleccionar una raza', () => {
        const { getByTestId, getAllByTestId } = render(
            <FilterByBreed data={testData} selectBreed="" handleBreedChange={changeSelect} />
        );
        
        const select = getByTestId('select');
        fireEvent.click(select, { target: { value: 'affenpinscher' } });

        const options = getAllByTestId('select-option');
        expect(options[0].selected).toBeTruthy();
    });
})