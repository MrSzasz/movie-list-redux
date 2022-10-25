import { useSelector } from "react-redux";
import MainCard from "../../components/MainCard/MainCard";

const FavMovies = () => {
  const favMoviesArray = useSelector((state)=>state.favMovieList);
  console.log(favMoviesArray);

  return (
    <div>
      {favMoviesArray?.length !== 0 && (
        <section className="flex flex-wrap justify-evenly gap-y-4">
          <h2 className="w-full">Fav movies</h2>
          {favMoviesArray?.map((movie) => (
            <MainCard key={movie.id} movie={movie} />
          ))}
        </section>
      )}
    </div>
  );
};

export default FavMovies;
