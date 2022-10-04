import "./App.scss";
import { useSelector } from "react-redux";

function App() {
  const favMovieListArray = useSelector((state) => state.favMovieList);
  console.log(favMovieListArray);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
