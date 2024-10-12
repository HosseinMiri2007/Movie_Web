import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Movies from "./pages/movies/movies";
import Header from "./components/header/header";

function App() {
  // Api Key : 2ff5c28e577e5be98af2a76d49f9d713
  // API Read Access Token : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmY1YzI4ZTU3N2U1YmU5OGFmMmE3NmQ0OWY5ZDcxMyIsIm5iZiI6MTcyODU3ODk5NS43MTkxNDksInN1YiI6IjY2ZmQ3M2ZjYzlhMTBkNDZlYTdjNTMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZnDswSmXFOx2iXa9yruRZXVJGJ0T9v8J7W-qf4afB78
  // Api Link : https://api.themoviedb.org/3/movie/511?api_key=2ff5c28e577e5be98af2a76d49f9d713
  // Get Trends : https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=2ff5c28e577e5be98af2a76d49f9d713

  return (
    <>
      <div className="bg-gray-800 text-white h-full">
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
