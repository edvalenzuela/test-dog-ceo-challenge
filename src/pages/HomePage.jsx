import { useContext, useState, useEffect } from "react";
import { DogContext } from "../context/DogContext";

import { Breeds, FilterByBreed, FilterBySubBreed } from "../components";

import { Loading } from "../shared";
import { useFetch } from "../hooks/useFetch";

export const HomePage = () => {
  const [selectBreed, setSelectBreed] = useState("");
  const [selectSubBreed, setSelectSubBreed] = useState("");
  const [hasSubBreeds, setHasSubBreeds] = useState(false);

  const { data, isLoading, hasError } = useContext(DogContext);

  const { data: dataBreed, isLoading: isLoadingBreeds } = useFetch(`https://dog.ceo/api/breed/${selectBreed}/images`);

  const { data: subBreedsList } = useFetch(`https://dog.ceo/api/breed/${selectBreed}/list`);

  const { data: subBreedsImages, isLoading: isLoadingSubBreeds } = useFetch(`https://dog.ceo/api/breed/${selectBreed}/${selectSubBreed}/images`);

  useEffect(() => {
    if (subBreedsList?.message && Array.isArray(subBreedsList.message) && selectBreed) {
      return setHasSubBreeds(subBreedsList.message.length > 0);
    } 
    return setHasSubBreeds(false);
  }, [subBreedsList, selectSubBreed]);
  
  const handleBreedChange = ({ target }) => { 
    setSelectBreed(target.value) 
    setSelectSubBreed("");
  };

  const handleSubBreedChange = ({ target }) => setSelectSubBreed(target.value);

  if (isLoading) return <p aria-label='p'>Loading...</p>;
  if (hasError) return <p>Error fetching data...</p>;

  const renderImages = () => {
    if (isLoadingBreeds || isLoadingSubBreeds) return <Loading message="Cargando ..." />;
    
    if (Array.isArray(dataBreed?.message)) {
      if (hasSubBreeds && Array.isArray(subBreedsImages?.message)) {
        return (
          <Breeds 
            imgByBreed={subBreedsImages.message} 
            selectBreed={selectSubBreed} 
          />
        );
      }
      
      return (
        <Breeds 
          imgByBreed={dataBreed.message} 
          selectBreed={selectBreed} 
        />
      );
    }
    
    return null;
  };

  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row w-full justify-center">
        <FilterByBreed
          selectBreed={selectBreed}
          setSelectBreed={setSelectBreed}
          handleBreedChange={handleBreedChange}
          data={data}
        />
        {
          hasSubBreeds && (
            <FilterBySubBreed 
              selectSubBreed={selectSubBreed}
              handleSubBreedChange={handleSubBreedChange}
              data={subBreedsList}
            />
          )
        }
      </div>
      <div className="container mx-auto flex flex-row">
        {renderImages()}
      </div>
    </>
  );
};