import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
