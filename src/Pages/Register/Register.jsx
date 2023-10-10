import { Link, useLocation, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import loginImage from "../../../src/assets/new1jpg.jpg";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import { saveUser } from "../../api/auth";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile, signInGoogle, setLoading } =
    useContext(AuthContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSubmitted(true);
    setIsLoading(true);

    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            saveUser(result.user);
            toast.success("Create User Successful");
            setIsLoading(false);
            navigate("/login");
          })
          .catch((err) => {
            toast.error(err.message);
            setIsLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        toast("Login Successful!");
        saveUser(result.user);

        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="w-full p-6 md:p-10">
      <div className="flex justify-center items-center min-h-[600px]">
        <div className="flex w-full font-abc flex-col max-w-xl p-6 rounded-md sm:p-10 border-[1px]  text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="heading-st">Register Now</h1>
            <p className="text-sm text-gray-400">
              Sign Up to access your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid w-full"
          >
            <div className="space-y-4 w-full">
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])/,

                    //  TODO Validati0n
                  })}
                  placeholder="*******"
                  // className="input input-bordered"
                />

                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">
                    Password is at lest 6 character
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password is must one uppercase & one special character
                  </p>
                )}
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Confirm Password
                  </label>
                </div>
                <input
                  type="password"
                  {...register("confirm")}
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Photo URL
                  </label>
                </div>
                <input
                  type="url"
                  {...register("photoURL")}
                  placeholder="Photo URL"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
                />
              </div>
            </div>

            <div>
              {/* <button
                  type="submit"
                  className="btn-fourth w-full"
                >
                  Register Now
                </button> */}

              <button type="submit" className="btn-fourth w-full">
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2  border-green-500"></div>
                    <span className="ml-2">
                      {isSubmitted ? "Register....." : "Register Now"}
                    </span>
                  </div>
                ) : (
                  "Sign In"
                )}
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

            <p>Google</p>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Already have an account yet?{" "}
            <Link
              to="/login"
              className="hover:underline hover:text-gray-500 text-gray-700"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
