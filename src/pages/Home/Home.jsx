import $ from "jquery";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import MainCard from "../../components/MainCard/MainCard";

const Home = () => {
  const [moviesArray, setMoviesArray] = useState([]);
  // const favMovieListArray = useSelector((state) => state.favMovieList);

  // const dispatch = useDispatch();

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

  return (
    <div className="bg-zinc-900 text-white min-h-screen h-fit text-center flex flex-col gap-8 p-4">
      <div className="flex mx-auto justify-center items-center bg-white rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search a movie"
          id="movieQuery"
          className="text-black p-2 focus-visible:outline-none"
        />
        <button
          className="bg-white h-full p-2 text-black"
          onClick={handleSearch}
        >
          <AiOutlineSearch />
        </button>
      </div>
      <div>
        {moviesArray?.length !== 0 && (
          <section className="flex flex-wrap justify-evenly gap-y-4">
            <h2 className="w-full">Results</h2>
            {moviesArray?.map((movie) => (
              <MainCard key={movie.id} movie={movie} />
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default Home;
