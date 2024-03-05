import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Wincome from "./Pages/Wincome";
import NotFoundPage from "./Pages/NotFoundPage";
import Register from "./Pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/wincome" element={<Wincome />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
