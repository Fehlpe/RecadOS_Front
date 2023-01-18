import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/modules/hooks";
import { resetLogged } from "../../../store/modules/users/UsersSlice";

const NavBar: React.FC = () => {
  const logCheck = useAppSelector((state) => state.users.logged);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!logCheck) {
      sessionStorage.removeItem("logged");
      navigate("/");
    }
  }, [logCheck]);

  function removeLoggedUser() {
    sessionStorage.removeItem("logged");
    dispatch(resetLogged());
  }

  return (
    <>
      <nav className=" bg-gray-800 border-gray-700 py-2 md:py-4">
        <div className="container px-4 mx-auto flex items-center">
          <div className="flex justify-between items-center">
            <h1 className="text-center text-3xl font-normal tracking-wider text-pink-50 sm:text-3xl">
              Recad<span className=" text-center text-red-500">OS</span>
            </h1>
          </div>

          <div className=" flex flex-row ml-auto  mt-0">
            <button
              onClick={() => removeLoggedUser()}
              className=" p-2 md:p-4 font-medium text-red-500 text-center border border-solid border-red-500 rounded hover:bg-red-500 hover:text-white transition-colors duration-300 mt-1 "
            >
              LOGOUT
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
