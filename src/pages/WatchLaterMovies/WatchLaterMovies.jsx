import { useDispatch, useSelector } from "react-redux";
import MainCard from "../../components/MainCard/MainCard";
import { Link } from "react-router-dom";
import { deleteMovie } from "../../features/movies/watchLaterListSlice";

const WatchLaterMovies = () => {
  const watchLaterArray = useSelector((state) => state.watchLaterList);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen h-fit text-center flex flex-col gap-8 p-4">
      <Link
        to={"/"}
        className="py-3 px-6 text-white bg-purple-700 hover:bg-purple-800 rounded w-1/2 mx-auto border-2 border-black transition-all hover:scale-105"
        type="submit"
      >
        ⬅ BACK
      </Link>
      <div>
        {watchLaterArray?.length !== 0 && (
          <section className="flex flex-wrap justify-evenly gap-y-4">
            <h2 className="w-full">Watch later</h2>
            {watchLaterArray?.map((movie) => (
              <MainCard
                key={movie.id}
                desc={movie.desc}
                name={movie.name}
                poster={movie.poster}
              >
                <button
                  onClick={() => handleDelete(movie.id)}
                  className="w-full bg-red-700 hover:bg-red-800 transition-all border-2 border-black py-1 rounded-lg uppercase"
                >
                  delete
                </button>
              </MainCard>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default WatchLaterMovies;
