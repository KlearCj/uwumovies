import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Profile from "./components/Profile/Profile";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      {/*  <Navbar /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
