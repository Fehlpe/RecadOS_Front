import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import {
  addUser,
  resetChangeLog,
  resetMessage,
} from "../../store/modules/users/UsersSlice";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const changeLog = useAppSelector((state) => state.users.changeLog);
  const currentMessage = useAppSelector((state) => state.users.currentMessage);
  const isLogged = sessionStorage.getItem("logged");

  const dispatch = useAppDispatch();

  function newUser() {
    dispatch(
      addUser({
        email,
        password,
        password2,
        username,
      })
    );
  }

  useEffect(() => {
    if (isLogged) navigate("/home");
  }, []);

  useEffect(() => {
    if (changeLog) {
      navigate("/");
      dispatch(resetChangeLog());
      dispatch(resetMessage());
    }
  }, [changeLog]);

  return (
    <div className=" flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h1 className="text-center text-5xl tracking-wider font-bold text-zinc-900 sm:text-6xl">
            Recad<span className=" text-center text-red-500">OS</span>
          </h1>
          <h2 className="mt-6 text-center text-lg font-bold tracking-tight text-gray-600">
            Sign up your account
          </h2>
        </div>
        {currentMessage.length > 0 && (
          <div
            id="alert-additional-content-1"
            className="p-4 mb-4 flex justify-between text-red-900 border border-red-300 rounded-lg bg-red-50 "
            role="alert"
          >
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Error</span>
              <h3 className=" text-base font-medium">{currentMessage}</h3>
            </div>
            <button
              type="button"
              className="text-red-900 mt-2 bg-transparent border border-red-900 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-400 dark:border-red-400 dark:text-red-400 dark:hover:text-white dark:focus:ring-red-800"
              data-dismiss-target="#alert-additional-content-1"
              aria-label="Close"
              onClick={() => dispatch(resetMessage())}
            >
              Dismiss
            </button>
          </div>
        )}
        <div className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                onChange={(e) => setUsername(e.target.value)}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="password2" className="sr-only">
                Password
              </label>
              <input
                id="password2"
                name="password2"
                type="password"
                required
                onChange={(e) => setPassword2(e.target.value)}
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                newUser();
              }}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-red-500 group-hover:text-red-400"
                  aria-hidden="true"
                />
              </span>
              Sign up
            </button>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-sm">
              <Link to="/" onClick={() => dispatch(resetMessage())}>
                <p className="font-medium text-red-600 hover:text-red-500">
                  Already have an account? Sign in now!
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
