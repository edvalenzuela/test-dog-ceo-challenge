import { CardBreeds } from "./CardBreeds";

export const Breeds = ({ imgByBreed, selectBreed }) => {
  if (selectBreed.length === 0) {
    return <p>Debe seleccionar una raza para continuar</p>;
  }

  return (
    <ul>
      {imgByBreed &&
        imgByBreed.map((url, i) => (
          <CardBreeds
            key={i + Date.now()}
            url={url}
            i={i + 1}
            selectBreed={selectBreed}
          />
        ))}
    </ul>
  );
};