import { render, screen } from '@testing-library/react'
import { DogContext } from '../../src/context/DogContext'

import { HomePage } from '../../src/pages/HomePage'

describe('Pruebas en el <HomePage />', () => {
    const data = {
        message: {
            akita: []
        },
        status: "success",
        isLoading: false,
        hasError: null
    }

    test('Debe de mostrar el componente sin la información del useContext', () => {
        render(
            <DogContext.Provider value={{ data: null, isLoading: true, hasError: null }}>
                <HomePage />
            </DogContext.Provider>
        );
        const elementLoading = screen.getByLabelText('p');
        expect(elementLoading.innerHTML).toBe('Loading...');
    });

    test('Debe de mostrar el componente con la data del API', () => {
        render(
            <DogContext.Provider value={{ data }}>
                <HomePage />
            </DogContext.Provider>
        );
        const selectOption = screen.getByLabelText('option');
        expect(selectOption.innerHTML).toContain(`${data.message.akita}`);
    });
});