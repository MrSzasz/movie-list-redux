import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovie, deleteMovie } from "../../features/movies/favMovieListSlice";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const Home = () => {
  const [moviesArray, setMoviesArray] = useState([]);
  const favMovieListArray = useSelector((state) => state.favMovieList);

  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    let query = $("#movieQuery").val();
    if (query !== "") {
      try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_APIKEY}&page=1&query=${$(
          "#movieQuery"
        ).val()}`;
        await fetch(url)
          .then((res) => res.json())
          .then((data) => setMoviesArray(data.results));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen h-fit text-center flex flex-col gap-8 p-4">
      <div>
        <input
          type="text"
          placeholder="Search a movie"
          id="movieQuery"
          className="text-black"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {moviesArray?.length !== 0 && (
          <section className="flex flex-wrap">
            <h2 className="w-full">Results</h2>
            {moviesArray?.map((movie) => (
              <div key={movie.id} className="flex-grow self-stretch">
                <div className="max-w-sm w-fit rounded overflow-hidden shadow-lg bg-slate-300">
                  {movie.poster_path === null ? (
                    <img
                      className="w-1/2 mx-auto"
                      src="https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png"
                      alt="Sunset in the mountains"
                    />
                  ) : (
                    <img
                      className="w-1/2 mx-auto"
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt="Sunset in the mountains"
                    />
                  )}
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      {movie.original_title}
                    </div>
                    <p className="text-gray-700 text-base">{movie.overview}</p>
                  </div>
                  {/* <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div> */}
                </div>
              </div>
            ))}
          </section>
        )}
        <h1 className="text-2xl uppercase underline font-bold pb-4">
          fav movies
        </h1>
        <div className="flex justify-center items-center flex-wrap">
          {favMovieListArray.map((movie, i) => (
            <div
              key={i}
              className="w-1/4 bg-gray-500 flex flex-col justify-center items-center p-4 gap-6 border-2 border-black rounded self-stretch"
            >
              <h3 className="font-bold uppercase underline">{movie.name}</h3>
              <p className="h-full flex items-center">{movie.desc}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDelete(movie.id)}
                  className="py-2 px-4 bg-red-600 rounded min-w-fit w-1/2 mx-auto border-2 border-black transition-all hover:scale-105"
                >
                  DELETE ❌
                </button>
                <Link
                  to={`/edit/${movie.id}`}
                  className="py-2 px-4 bg-blue-600 rounded min-w-fit w-1/2 mx-auto border-2 border-black transition-all hover:scale-105"
                >
                  EDIT ✏
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
