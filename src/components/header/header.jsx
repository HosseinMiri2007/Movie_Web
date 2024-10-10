import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <header>
      <div
        className="flex items-center justify-between
        px-5 py-1 gap-5 bg-gray-700 text-gray-100"
      >
        <nav className="flex items-center gap-10">
          <Link
            to={"/"}
            className="flex gap-2 items-center text-3xl font-semibold
            text-yellow-400 cursor-pointer
            max-lg:text-2xl max-sm:text-xl"
          >
            <img src={logo} alt="website logo" className="w-24 max-md:w-16" />
            <h3>MovieSpace</h3>
          </Link>

          <ul
            className={`flex gap-10 text-xl
            max-lg:${mobile ? "flex" : "hidden"}
            max-lg:flex-col
            max-lg:absolute
            max-lg:top-0
            max-lg:left-0
            max-lg:w-[30%]
            max-lg:[&>*]:ml-5
            max-lg:py-10
          max-lg:bg-gray-900`}
          >
            <Link to={"/"}>Home</Link>
            <Link to={"/movies"}>Movies</Link>
            <Link to={"/series"}>Series</Link>
            <Link to={"/page"}>Pages</Link>
            <Link to={"/pricing"}>Pricing</Link>
            <Link to={"/contact"}>Contact</Link>
          </ul>
        </nav>
        <div className="flex items-center text-3xl child:text-white">
          <div className="flex items-center justifty-between gap-10 max-lg:hidden">
            <i className="fa fa-search"></i>
            <i className="fa fa-bell"></i>
            <i className="fa fa-user"></i>
          </div>
          <button
            className={`${
              mobile ? "fa fa-x" : "fa fa-bars"
            } hidden max-lg:block text-3xl`}
            onClick={() => setMobile(!mobile)}
          ></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
