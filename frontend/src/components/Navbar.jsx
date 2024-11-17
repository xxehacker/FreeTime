import React from "react";
import { useAuthStore } from "../store/authUser";
import { Link } from "react-router-dom";
import logo from "../assets/freetime.png";
import { LogOut, Menu, Search } from "lucide-react";
import useContentStore from "../store/content";

function Navbar() {
  const { user, logout } = useAuthStore();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toogleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const { setContentType } = useContentStore();

  return (
    <header className="max-w-[86rem] mx-auto flex flex-wrap items-center justify-between p-4 h-20">
      <div className="flex items-center gap-10 z-50">
        <Link to="/">
          <img src={logo} alt="Freetime Logo" className="w-32 sm:w-40 " />
        </Link>

        {/* desktop navbar items */}
        <div className="hidden sm:flex gap-2 items-center font-semibold text-lg">
          <Link
            to="/"
            className="hover:underline 
            "
            onClick={() => {
              setContentType("movie");
            }}
          >
            Movies
          </Link>
          <Link
            to="/"
            className="hover:underline"
            onClick={() => {
              setContentType("tvshow");
            }}
          >
            Tv Shows
          </Link>
          <Link to="/history" className="hover:underline">
            Search History
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-6 z-50 justify-center">
        <Link to="">
          <Search className="size-6 cursor-pointer">Search</Search>
        </Link>
        <img
          src={user?.image}
          alt="Profile Image"
          className=" h-8 rounded cursor-pointer"
        />
        <LogOut className="size-6 cursor-pointer" onClick={logout}>
          Logout
        </LogOut>

        <div className="sm:hidden">
          <Menu className="size-6 cursor-pointer" onClick={toogleMobileMenu}>
            Menu
          </Menu>
        </div>
      </div>

      {/* mobile navbar items */}
      {isMobileMenuOpen && (
        <div className="w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800">
          <Link
            to={"/"}
            className="block hover:underline p-2"
            onClick={() => {
              toogleMobileMenu();
              setContentType("movie");
            }}
          >
            Movies
          </Link>
          <Link
            to={"/"}
            className="block hover:underline p-2"
            onClick={() => {
              toogleMobileMenu();
              setContentType("tvshow");
            }}
          >
            Tv Shows
          </Link>
          <Link
            to={"/history"}
            className="block hover:underline p-2"
            onClick={toogleMobileMenu}
          >
            Search History
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
