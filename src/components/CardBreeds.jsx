export const CardBreeds = ({ url, selectBreed, i }) => {
  return (
    <li className="text-gray-600 body-font md:w-1/2 xl:w-1/4 lg:w-1/4 sm:w-full">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={url} alt={`Perro de raza ${selectBreed}`} />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Raza</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{i}.- {selectBreed}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};