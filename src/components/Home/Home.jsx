import React from 'react'



// import "./App.scss";
// import $ from "jquery";
// import { useSelector, useDispatch } from "react-redux";
// import { addMovie, deleteMovie } from "./features/movies/favMovieListSlice";
// import { v4 as uuid } from "uuid";

// function App() {
//   const favMovieListArray = useSelector((state) => state.favMovieList);

//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(
//       addMovie({
//         id: uuid(),
//         name: $("#movieName").val(),
//         desc: $("#movieDesc").val(),
//       })
//     );
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteMovie(id));
//   }

//   return (
//     <div className="bg-gray-900 text-white min-h-screen h-fit text-center flex flex-col gap-8 p-4">
//       <form
//         className="flex flex-col w-1/4 mx-auto text-black gap-4"
//         onSubmit={handleSubmit}
//       >
//         <input
//           className="rounded p-2"
//           type="text"
//           placeholder="movie name"
//           id="movieName"
//           required
//         />
//         <textarea
//           className="rounded p-2"
//           name="desc"
//           id="movieDesc"
//           cols="30"
//           rows="5"
//           placeholder="description"
//         ></textarea>
//         <button
//           className="py-3 px-6 text-white bg-purple-600 rounded w-1/2 mx-auto border-2 border-black transition-all hover:scale-105"
//           type="submit"
//         >
//           SAVE
//         </button>
//       </form>
//       <div>
//         <h1 className="text-2xl uppercase underline font-bold pb-4">
//           fav movies
//         </h1>
//         <div className="flex justify-center items-center flex-wrap">
//           {favMovieListArray.map((movie, i) => (
//             <div
//               key={i}
//               className="w-1/4 bg-gray-500 flex flex-col justify-center items-center p-4 gap-6 border-2 border-black rounded self-stretch"
//             >
//               <h3 className="font-bold uppercase underline">{movie.name}</h3>
//               <p className="h-full flex items-center">{movie.desc}</p>
//               <button onClick={()=> handleDelete(movie.id)} className="py-2 px-4 bg-red-600 rounded min-w-fit w-1/2 mx-auto border-2 border-black transition-all hover:scale-105">
//                 DELETE
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import {
  addMovie,
  deleteMovie,
  updateMovie,
} from "../../features/movies/favMovieListSlice";
import { v4 as uuid } from "uuid";

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

  const handleUpdate = (e, id, name, desc) => {
    e.preventDefault();
    dispatch(
      updateMovie({
        id,
        name: $("#movieNameUpdate").val(),
        desc: $("#movieDescUpdate").val(),
      })
    );
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen h-fit text-center flex flex-col gap-8 p-4">
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
              <button
                onClick={() => handleDelete(movie.id)}
                className="py-2 px-4 bg-red-600 rounded min-w-fit w-1/2 mx-auto border-2 border-black transition-all hover:scale-105"
              >
                DELETE ❌
              </button>
              {/* <span
                onClick={showUpdate}
                id="editMovie"
                className="cursor-pointer underline"
              >
                EDIT ✏
              </span>
              <div id="updateContainer" className="hidden">
                <form
                  id="updateFormContainer"
                  className="flex flex-col gap-4 items-center text-black"
                  // onSubmit={handleUpdate}
                  onSubmit={(e) => handleUpdate(e, movie.id)}
                >
                  <input
                    className="rounded p-2 w-10/12"
                    type="text"
                    placeholder="movie name"
                    id="movieName"
                    defaultValue={movie.name}
                    required
                  />
                  <textarea
                    className="rounded p-2 w-10/12"
                    name="desc"
                    id="movieDesc"
                    cols="30"
                    rows="5"
                    placeholder="description"
                    defaultValue={movie.desc}
                  ></textarea>
                  <button
                    // onClick={() => handleUpdate(movie.id)}
                    className="py-2 px-4 bg-blue-600 rounded min-w-fit w-1/2 mx-auto border-2 border-black transition-all hover:scale-105 text-white"
                  >
                    UPDATE 📝
                  </button>
                </form>
              </div> */}
              <details className="cursor-pointer">
                <summary>EDIT ✏</summary>
                <form
                  id="updateFormContainer"
                  className="flex flex-col gap-4 items-center text-black"
                  // onSubmit={handleUpdate}
                  onSubmit={(e) => handleUpdate(e, movie.id)}
                >
                  <input
                    className="rounded p-2 w-10/12"
                    type="text"
                    placeholder="movie name"
                    id="movieNameUpdate"
                    defaultValue={movie.name}
                    required
                  />
                  <textarea
                    className="rounded p-2 w-10/12"
                    name="desc"
                    id="movieDescUpdate"
                    cols="30"
                    rows="5"
                    placeholder="description"
                    defaultValue={movie.desc}
                  ></textarea>
                  <button
                    // onClick={() => handleUpdate(movie.id)}
                    className="py-2 px-4 bg-blue-600 rounded min-w-fit w-1/2 mx-auto border-2 border-black transition-all hover:scale-105 text-white"
                  >
                    UPDATE 📝
                  </button>
                </form>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


    )
}

export default Home