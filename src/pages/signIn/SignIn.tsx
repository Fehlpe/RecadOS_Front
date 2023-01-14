import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import { loginUser } from "../../store/modules/users/UsersSlice";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const changeLog = useAppSelector((state) => state.users.changeLog);
  const logCheck = useAppSelector((state) => state.users.logged);

  const dispatch = useAppDispatch();

  function checkUser() {
    dispatch(
      loginUser({
        email,
        password,
      })
    );
  }

  useEffect(() => {
    const isLogged = sessionStorage.getItem("logged");
    if (isLogged) navigate("/home");
  }, []);

  useEffect(() => {
    if (logCheck) {
      sessionStorage.setItem("logged", email);
      navigate("/home");
    }
  }, [logCheck]);

  return (
    <div className=" flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h1 className="text-center text-5xl tracking-wider font-bold text-zinc-900 sm:text-6xl">
            Recad<span className=" text-center text-red-500">OS</span>
          </h1>
          <h2 className="mt-6 text-center text-lg font-bold tracking-tight text-gray-600">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
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
          </div>

          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                checkUser();
              }}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-red-500 group-hover:text-red-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-sm">
              <Link to="/signup">
                <p className="font-medium text-red-600 hover:text-red-500">
                  Don't have an account? Create one now!
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
