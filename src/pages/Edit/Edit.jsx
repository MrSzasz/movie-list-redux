import $ from "jquery";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateMovie } from "../../features/movies/favMovieListSlice";

const Edit = () => {
  const [movieToEdit, setMovieToEdit] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moviesArray = useSelector((state) => state.favMovieList);

  const handleUpdate = (id, name, desc) => {
    dispatch(updateMovie({ id, name, desc }));
    navigate("/");
  };

  useEffect(() => {
    setMovieToEdit(moviesArray.find((movie) => movie.id === id));
  }, []);

  return (
    <div className="bg-zinc-900 text-white min-h-screen h-fit text-center flex flex-col gap-8 p-4">
      <Link
        to={"/"}
        className="py-3 px-6 text-white bg-blue-600 rounded w-1/2 mx-auto border-2 border-black transition-all hover:scale-105"
        type="submit"
      >
        ⬅ BACK
      </Link>
      <form className="flex flex-col w-1/4 mx-auto text-black gap-4">
        <input
          className="rounded p-2"
          name="nameUpdate"
          type="text"
          id="movieNameUpdate"
          defaultValue={movieToEdit.name}
        />
        <textarea
          className="rounded p-2"
          name="descUpdate"
          id="movieDescUpdate"
          cols="30"
          rows="5"
          defaultValue={movieToEdit.desc}
        ></textarea>
        <button
          onClick={() =>
            handleUpdate(
              id,
              $("#movieNameUpdate").val(),
              $("#movieDescUpdate").val()
            )
          }
          className="py-3 px-6 text-white bg-purple-600 rounded w-1/2 mx-auto border-2 border-black transition-all hover:scale-105"
        >
          SAVE ➕
        </button>
      </form>
    </div>
  );
};

export default Edit;
