import { CardBreeds } from "./";

export const Breeds = ({ imgByBreed, selectBreed }) => {
  return (
    <ul className="flex flex-wrap mb-24 w-full">
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