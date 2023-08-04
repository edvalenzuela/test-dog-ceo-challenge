import { DogContext } from './DogContext';
import { useFetch } from '../hooks/useFetch';

export const DogProvider = ({children}) => {

  const { data, isLoading, hasError } = useFetch('https://dog.ceo/api/breeds/list/all');

  return (
    <DogContext.Provider value={{ 
      data, 
      isLoading, 
      hasError 
    }}>
      {children}
    </DogContext.Provider>
  )
}
