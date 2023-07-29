import { Link, useLocation, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";

import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import { saveUser } from "../../api/auth";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { logIn, signInGoogle, setLoading } = useContext(AuthContext);
  const [state, setState] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    logIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        toast.success("Login Successful!");
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handleHideShow = () => {
    setState((prevState) => !prevState);
  };

  return (
    <div className="w-ful md:p-10 flex justify-center items-center">
      <Helmet>
        <title>BD Sports Academy || Login</title>
      </Helmet>
    
        <div className="flex bg-gray-50 drop-shadow-md border-[1px]  flex-col max-w-md rounded-md  w-full p-5 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="heading-st">Login Now</h1>
            <p className="text-sm text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6 "
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#ff6c2f] bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div className="relative">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type={state ? "text" : "password"}
                  {...register("password")}
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#ff6c2f] bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
                <AiFillEyeInvisible
                  onClick={handleHideShow}
                  className="ml-80 top-[40px] md:top-[46px] absolute"
                ></AiFillEyeInvisible>
              </div>
            </div>

            <div>
              <button type="submit" className="btn-third">
                Signin Now
              </button>
            </div>
          </form>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div
            onClick={handleGoogleSignIn}
            className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
          >
            <FcGoogle size={32} />

            <p> Google</p>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Don't have an account yet?
            <Link
              to="/register"
              className="hover:underline hover:text-[#64280e] text-[#ff6c2f]"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    
  );
};

export default Login;
