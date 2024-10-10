import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/home/home";
import Movies from "./pages/movies/movies";
import Header from "./components/header/header";

function App() {
  
  // api address : https://dummyapi.online/api/movies

  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
