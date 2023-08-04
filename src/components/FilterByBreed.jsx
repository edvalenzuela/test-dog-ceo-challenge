import { useEffect, useState } from "react";

import { Breeds } from "./Breeds";

export const FilterByBreed = ({
  data,
  isLoading,
  hasError,
  selectBreed,
  setSelectBreed,
}) => {
  const [imgByBreed, setImgByBreed] = useState(null);
  const [isLoadingBreeds, setisLoadingBreeds] = useState(true);

  const getApiByBreed = async () => {
    setisLoadingBreeds(true);
    try {
      const resp = await fetch(
        `https://dog.ceo/api/breed/${selectBreed}/images`
      );
      const data = await resp.json();
      setisLoadingBreeds(false);
      setImgByBreed(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiByBreed();
  }, [selectBreed]);

  const handleBreedChange = ({ target }) => {
    setSelectBreed(target.value);
    setImgByBreed(null);
  };

  if (isLoading) return <p>Loading...</p>;

  if (hasError) return <p>Error fetching data...</p>;

  return (
    <>
      <select value={selectBreed} onChange={handleBreedChange}>
        <option value="">Seleccione una raza</option>
        {Object.keys(data?.message).map((breed, i) => (
          <option key={i} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      
      {isLoadingBreeds ? (
        <p>Loading ...</p>
      ) : (
        <Breeds imgByBreed={imgByBreed} selectBreed={selectBreed} />
      )}
    </>
  );
};
