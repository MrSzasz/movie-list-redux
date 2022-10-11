import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovie, deleteMovie } from "../../features/movies/favMovieListSlice";


const Home = () => {
  const favMovieListArray = useSelector((state) => state.favMovieList);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addMovie({
        id: uuid(),
        name: $("#movieName").val(),
        desc: $("#movieDesc").val(),
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen h-fit text-center flex flex-col gap-8 p-4">
      <form
        className="flex flex-col w-1/4 mx-auto text-black gap-4"
        onSubmit={handleSubmit}
      >
        <input
          className="rounded p-2"
          type="text"
          placeholder="movie name"
          id="movieName"
          required
        />
        <textarea
          className="rounded p-2"
          name="desc"
          id="movieDesc"
          cols="30"
          rows="5"
          placeholder="description"
        ></textarea>
        <button
          className="py-3 px-6 text-white bg-purple-600 rounded w-1/2 mx-auto border-2 border-black transition-all hover:scale-105"
          type="submit"
        >
          SAVE ➕
        </button>
      </form>
      <div>
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
                <Link to={"/edit/1"} className="py-2 px-4 bg-blue-600 rounded min-w-fit w-1/2 mx-auto border-2 border-black transition-all hover:scale-105">EDIT ✏</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home

