import { useSelector } from "react-redux";
import MainCard from "../../components/MainCard/MainCard";

const FavMovies = () => {
  const favMoviesArray = useSelector((state) => state.favMovieList);
  console.log(favMoviesArray);

  return (
    <div className="bg-zinc-900 text-white min-h-screen h-fit text-center flex flex-col gap-8 p-4">
      <div>
        {favMoviesArray?.length !== 0 && (
          <section className="flex flex-wrap justify-evenly gap-y-4">
            <h2 className="w-full">Results</h2>
            {favMoviesArray?.map((movie) => (
              <MainCard
                key={movie.id}
                desc={movie.desc}
                name={movie.name}
                poster={movie.poster}
                bgColor="red"
                buttonText="delete"
              />
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default FavMovies;
