import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Edit from "./pages/Edit/Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}

export default App;
