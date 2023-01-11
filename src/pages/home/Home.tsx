import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import { resetChangeLog } from "../../store/modules/users/UsersSlice";

const Index = () => {
  const dispatch = useAppDispatch();

  const isLogged = sessionStorage.getItem("logged");

  useEffect(() => {
    if (isLogged) {
    }
  }, []);

  return (
    <div>
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
      <div className="mx-auto container pb-20 pt-5 px-6">
        <div className="pb-8 grid gap-2 md:grid-cols-7 md:gap-6">
          <div className="md:col-span-3">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Título
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-red-500 focus:ring-red-500 sm:text-sm"
                placeholder="Novo título..."
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Descrição
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-red-500 focus:ring-red-500 sm:text-sm"
                placeholder="Nova descrição..."
              />
            </div>
          </div>

          <button className="h-12 self-end text-sm font-semibold lg:text-base text-white bg-red-500 text-center border border-solid border-red-400 rounded hover:border-red-500 hover:bg-white hover:text-red-500 transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
            NOVO RECADO
          </button>
        </div>

        <div className="flex items-center">
          <div className="rounded w-full">
            <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                  13 things to work on
                </h4>
                <p className="text-gray-800 dark:text-gray-100 text-sm">
                  Our interior design experts work with you to create the space
                  that you have been dreaming about.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                  <p className="text-sm">March 28, 2020</p>
                  <div className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-pencil"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
