import { useContext, useState } from "react";
import { DogContext } from "../context/DogContext";
import { FilterByBreed } from "../components/FilterByBreed";
import { FilterBySubBreed } from "../components/FilterBySubBreed";

export const HomePage = () => {
  const { data, isLoading, hasError } = useContext(DogContext);

  const dataApi = { data, isLoading, hasError };

  const [selectBreed, setSelectBreed] = useState("");

  return (
    <div className="container mx-auto">
      <FilterByBreed
        {...dataApi}
        selectBreed={selectBreed}
        setSelectBreed={setSelectBreed}
      />

      <FilterBySubBreed {...dataApi} />
    </div>
  );
};
