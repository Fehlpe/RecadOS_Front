import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import { resetChangeLog } from "../../store/modules/users/UsersSlice";
import InputNote from "./components/InputNote";
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";

const Index = () => {
  const dispatch = useAppDispatch();

  const isLogged = sessionStorage.getItem("logged");

  useEffect(() => {
    if (isLogged) {
    }
  }, []);

  return (
    <div>
      <NavBar />
      <div className="mx-auto container pb-20 pt-5 px-6">
        <InputNote />

        <div className="flex items-center">
          <div className="rounded w-full">
            <Notes />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
