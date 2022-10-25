import { useDispatch } from "react-redux";
import { addMovie } from "../../features/movies/favMovieListSlice";

const MainCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleAdd = (name, id, poster) => {
    dispatch(addMovie({ name, id, poster }));
  };

  return (
    <div className="bg-slate-600 relative w-fit h-fit group overflow-hidden border-4 border-black">
      <img
        className="max-w-[200px] h-[20em] object-cover"
        src={
          movie.poster_path === null
            ? "https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png"
            : `https://image.tmdb.org/t/p/w200${movie.poster_path}`
        }
        alt={movie.original_title + "poster"}
      />
      <div className="absolute w-full h-[20em] top-full group-hover:top-0 transition-all flex flex-col gap-4 py-4 px-2 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 bg-black">
        <h2 className="text-2xl">{movie.original_title}</h2>
        <p className="overflow-y-scroll w-auto h-full scrollbar-hide">
          {movie.overview}
        </p>
        <button
          onClick={() =>
            handleAdd(
              movie.original_title,
              movie.id,
              movie.poster_path === null
                ? "https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png"
                : `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            )
          }
          className="w-full bg-green-700 hover:bg-green-800 transition-all border-2 border-black py-1 rounded-lg uppercase"
        >
          favorite
        </button>
      </div>
    </div>
  );
};

export default MainCard;
