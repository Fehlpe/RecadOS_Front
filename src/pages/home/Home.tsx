import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import { getAllUserNotes } from "../../store/modules/notes/NotesSlice";
import { resetChangeLog } from "../../store/modules/users/UsersSlice";
import InputNote from "./components/InputNote";
import Modal from "./components/DeleteModal";
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

  return (
    <div>
      <NavBar />
      <div className="mx-auto container pb-20 pt-5 px-6">
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
