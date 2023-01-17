import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import {
  getAllUserNotes,
  searchNote,
  toggleArchived,
} from "../../store/modules/notes/NotesSlice";
import InputNote from "./components/InputNote";
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";

const Index = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLogged = sessionStorage.getItem("logged");

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    } else {
      dispatch(getAllUserNotes(isLogged));
    }
  }, []);

  function searchBar(title: string) {
    dispatch(
      searchNote({
        title,
        userEmail: isLogged,
      })
    );
  }

  return (
    <div>
      <NavBar />
      <div className="mx-auto container pb-20 pt-5 px-6">
        <div className="flex w-full flex-col mb-2 md:flex-row">
          <div className="flex w-full items-center mr-4">
            <label htmlFor="simple-search" className="sr-only">
              Search note title...
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                placeholder="Search note title..."
                onChange={(e) => searchBar(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            onClick={() => {
              dispatch(toggleArchived());
            }}
            className=" h-12 w-full self-start md:w-96 text-sm font-semibold lg:text-base text-white bg-red-500 text-center border border-solid border-red-400 rounded hover:border-red-500 hover:bg-white hover:text-red-500 transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
          >
            TOGGLE ARCHIVED NOTES
          </button>
        </div>
        <InputNote loggedUser={isLogged!} />

        <div className="flex items-center">
          <div className="rounded w-full">
            <Notes loggedUser={isLogged!} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
