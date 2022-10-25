import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Edit from "./pages/Edit/Edit";
import FavMovies from "./pages/FavMovies/FavMovies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<FavMovies />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}

export default App;
