import $ from "jquery";
import { AiOutlineClockCircle, AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import MainCard from "../../components/MainCard/MainCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../../features/movies/watchLaterListSlice";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const [moviesArray, setMoviesArray] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    let query = $("#movieQuery").val();
    if (query !== "") {
      try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_APIKEY
        }&page=1&query=${$("#movieQuery").val()}`;
        await fetch(url)
          .then((res) => res.json())
          .then((data) => setMoviesArray(data.results));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleKey = (e) => (e.key === "Enter" ? handleSearch(e) : null);

  const dispatch = useDispatch();

  const handleAdd = (name, id, poster, desc) => {
    dispatch(addMovie({ name, id, poster, desc, fav: false }));
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen h-fit text-center flex flex-col gap-8 p-4">
      <div className="w-full flex content-between items-center gap-2">
        <div className="flex mx-auto justify-center items-center bg-white rounded-lg overflow-hidden px-4">
          <input
            type="search"
            placeholder="Search a movie"
            id="movieQuery"
            className="text-black p-2 focus-visible:outline-none"
            onKeyDown={handleKey}
          />
          <button
            className="bg-white h-full p-2 text-black"
            onClick={handleSearch}
          >
            <AiOutlineSearch />
          </button>
        </div>
        <Link to="/watch-later">
          <AiOutlineClockCircle
            color="cyan"
            className="hover:scale-110 transition-all"
            size={30}
          />
        </Link>
      </div>
      <div>
        {moviesArray?.length !== 0 && (
          <section className="flex flex-wrap justify-evenly gap-y-4">
            <h2 className="w-full">Results</h2>
            {moviesArray?.map((movie) => (
              <MainCard
                key={movie.id}
                title={movie.original_title}
                poster={movie.poster_path}
                desc={movie.overview}
                id={movie.id}
              >
                <button
                  onClick={() =>
                    handleAdd(
                      movie.original_title,
                      movie.id,
                      movie.poster_path === null
                        ? "https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png"
                        : `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
                      movie.overview
                    )
                  }
                  className="w-full bg-green-700 hover:bg-green-800 transition-all border-2 border-black py-1 rounded-lg uppercase"
                >
                  add to list
                </button>
              </MainCard>
            ))}
          </section>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default Home;
