import { useContext } from "react";
import { DogContext } from "../context/DogContext";
import { useFetch } from "../hooks/useFetch";

import { Breeds } from "./";
import { Loading } from "../shared";

export const FilterByBreed = ({ selectBreed, setSelectBreed }) => {
  const { data, isLoading, hasError } = useContext(DogContext);

  const { data: dataBreed, 
      isLoading: isLoadingBreeds, 
      hasError: hasErrorBreed } = useFetch(`https://dog.ceo/api/breed/${selectBreed}/images`);

  const handleBreedChange = ({ target }) => setSelectBreed(target.value);

  if (isLoading) return <p>Loading...</p>;
  if (hasError) return <p>Error fetching data...</p>;
  if (hasErrorBreed) return <p>Error fetching breed images...</p>;

  const renderBreedsImages = () => {
    if(isLoadingBreeds) return <Loading message="Cargando ..." />
    if(Array.isArray(dataBreed?.message)) {
      return (<Breeds 
          imgByBreed={dataBreed.message} 
          selectBreed={selectBreed} 
      />);
    }
    return <Loading message="Debe seleccionar una raza" />
  }

  return (
    <>
      <select value={selectBreed} onChange={handleBreedChange} className="flex w-1/2 mx-auto my-4 p-4 border-gray-500 border-solid border-2 rounded-md">
        <option value="">Seleccione una raza</option>
        {Object.keys(data?.message).map((breed, i) => (
          <option key={i} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      { renderBreedsImages() }
    </>
  );
};
