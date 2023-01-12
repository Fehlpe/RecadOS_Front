const NavBar: React.FC = () => {
  return (
    <>
      <nav className=" bg-gray-800 border-gray-700 py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <h1 className="text-center text-3xl font-normal tracking-wider text-pink-50 sm:text-3xl">
              Recad<span className=" text-center text-red-500">OS</span>
            </h1>
            <button
              className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <button className="p-2 lg:px-4 md:mx-2 font-medium text-red-500 text-center border border-solid border-red-500 rounded hover:bg-red-500 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
              LOGOUT
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
