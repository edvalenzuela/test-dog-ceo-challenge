import { ContainerSelect } from "./";

export const FilterBySubBreed = ({ selectSubBreed, handleSubBreedChange, data}) => {
  return (
    <>
      {
        Array.isArray(data?.message) && data.message.length > 0 && (
          <ContainerSelect>
            <label htmlFor="subraza" className="font-bold text-2xl text-gray-500">Subrazas de perros :</label>
            <select id="subraza" data-testid="select" value={selectSubBreed} onChange={handleSubBreedChange} className="flex w-1/2 mx-auto my-4 p-4 border-gray-500 border-solid border-2 rounded-md">
              <option value="">Seleccione una subraza</option>
              {data?.message.map((breed, i) => (
                <option key={i} value={breed} aria-label='option' data-testid="select-option">
                  {breed}
                </option>
              ))}
            </select>
          </ContainerSelect>
        )
      }
    </>
  );
};