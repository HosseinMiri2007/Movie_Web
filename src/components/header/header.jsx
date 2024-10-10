import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between
        px-5 py-1 gap-5 bg-gray-700 text-gray-100">

        <nav className="flex items-center gap-10">
          <Link
            to={"/"}
            className="flex gap-2 items-center text-3xl font-semibold
            text-yellow-400 cursor-pointer"
          >
            <img src={logo} alt="website logo" className="w-24" />
            <h3>MovieSpace</h3>
          </Link>
          <ul className="flex gap-10">
            <Link to={"/"}>Home</Link>
            <Link to={"/movies"}>Movies</Link>
            <Link to={"/series"}>Series</Link>
            <Link to={"/page"}>Pages</Link>
            <Link to={"/pricing"}>Pricing</Link>
            <Link to={"/contact"}>Contact</Link>
          </ul>
          <button className="fa fa-bars"></button>
        </nav>
        <div className="flex gap-10 text-3xl child:text-white">
          <i className="fa fa-search"></i>
          <i className="fa fa-bell"></i>
          <i className="fa fa-user"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
