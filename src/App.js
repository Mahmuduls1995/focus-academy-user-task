import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import Login from "./Components/UserLogin/Login";
import SignUp from "./Components/UserLogin/SignUp";
import PrivateAuth from "./Components/UserLogin/PrivateAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={
          <PrivateAuth>
            <Home></Home>
          </PrivateAuth>
        }></Route>
        <Route path="/home" element={
          <PrivateAuth>
            <Home></Home>
          </PrivateAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
