import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./componentes/Pages/Home/Home";
import Login from "./componentes/Pages/Login/Login";
import { Register } from "./componentes/Pages/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="Home" />} />
      <Route path="Home" element={<Home />} />
      <Route path="Login/*" element={<Login />} />
      <Route path="Register/*" element={<Register/>}/>
    </Routes>
  );
}

export default App;
