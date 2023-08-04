import { useState } from "react";
import { FilterByBreed, FilterBySubBreed } from "../components";

export const HomePage = () => {
  const [selectBreed, setSelectBreed] = useState("");
  const [selectSubBreed, setSelectSubBreed] = useState("");

  return (
    <div className="container mx-auto px-4">
      <FilterByBreed
        selectBreed={selectBreed}
        setSelectBreed={setSelectBreed}
      />
      <FilterBySubBreed 
        selectSubBreed={selectSubBreed}
        setSelectSubBreed={setSelectSubBreed}
      />
    </div>
  );
};
