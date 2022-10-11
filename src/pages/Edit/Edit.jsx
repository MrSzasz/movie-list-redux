import { Link } from "react-router-dom";

const Edit = () => {
  return (
    <div className="bg-zinc-900 text-white min-h-screen h-fit text-center flex flex-col gap-8 p-4">
      <Link to={"/"}
          className="py-3 px-6 text-white bg-blue-600 rounded w-1/2 mx-auto border-2 border-black transition-all hover:scale-105"
          type="submit"
        >
          ⬅ BACK
        </Link>
      <form className="flex flex-col w-1/4 mx-auto text-black gap-4">
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
          {/* {favMovieListArray.map((movie, i) => (
          <div
            key={i}
            className="w-1/4 bg-gray-500 flex flex-col justify-center items-center p-4 gap-6 border-2 border-black rounded self-stretch"
          >
            <h3 className="font-bold uppercase underline">NOMBRE</h3>
            <p className="h-full flex items-center">DESC</p>
            <div className="flex gap-2">
              <button
                className="py-2 px-4 bg-red-600 rounded min-w-fit w-1/2 mx-auto border-2 border-black transition-all hover:scale-105"
              >
                DELETE ❌
              </button>
              <a className="py-2 px-4 bg-blue-600 rounded min-w-fit w-1/2 mx-auto border-2 border-black transition-all hover:scale-105">EDIT ✏</a>
            </div>
          </div>
        ))} */}

          <div className="w-1/4 bg-gray-500 flex flex-col justify-center items-center p-4 gap-6 border-2 border-black rounded self-stretch">
            <h3 className="font-bold uppercase underline">NOMBRE</h3>
            <p className="h-full flex items-center">DESC</p>
            <div className="flex gap-2">
              <button className="py-2 px-4 bg-red-600 rounded min-w-fit w-1/2 mx-auto border-2 border-black transition-all hover:scale-105">
                DELETE ❌
              </button>
              <a className="py-2 px-4 bg-blue-600 rounded min-w-fit w-1/2 mx-auto border-2 border-black transition-all hover:scale-105">
                EDIT ✏
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
