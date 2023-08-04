import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import Header from "./components/layouts/header/Header";
import Homepage from "./components/Homepage";
import Register from "./components/users/register/Register";
import List from "./components/users/list/List";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="wrapper-content">
        <nav>
          <Navbar />
        </nav>
        <div className="main">
          <div className="wrapper-main">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/user/register" element={<Register />} />
              <Route path="/user/list" element={<List />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
