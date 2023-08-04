import { ContainerSelect } from "./";

export const FilterByBreed = ({ data, selectBreed, handleBreedChange }) => {
  return (
    <ContainerSelect>
      <label htmlFor="select" className="font-bold text-2xl text-gray-500">Razas de perros :</label>
      <select id="select" data-testid="select" value={selectBreed} onChange={handleBreedChange} className="flex w-1/2 mx-auto my-4 p-4 border-gray-500 border-solid border-2 rounded-md">
        <option value="">Seleccione una raza</option>
        {Object.keys(data?.message).map((breed, i) => (
          <option key={i} value={breed} aria-label='option' data-testid="select-option">
            {breed}
          </option>
        ))}
      </select>
    </ContainerSelect>
  );
};
