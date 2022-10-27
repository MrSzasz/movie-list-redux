import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import WatchLaterMovies from "./pages/watchLaterMovies/watchLaterMovies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch-later" element={<WatchLaterMovies />} />
    </Routes>
  );
}

export default App;
