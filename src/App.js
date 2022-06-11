import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>

      {/* <Home></Home> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
