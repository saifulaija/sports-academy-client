import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import loginImage from "../../../src/assets/login.jpg";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const Register = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full bg-neutral-300">
      <div className="md:flex justify-center gap-16 items-center py-16 max-w-[1280px] mx-auto">
        <div className="hidden md:block">
          <img className="drop-shadow-2xl rounded-md" src={loginImage} alt="" />
        </div>
        <div className="flex justify-center items-center min-h-[600px]">
          <div className="flex uppercase font-abc flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Register Now</h1>
              <p className="text-sm text-gray-400">
                Sign in to access your account
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate=""
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Enter Your Email Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
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
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
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
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:/(?=.*[A-Z])/,
                //  TODO Validati0n
                  
                })}
                placeholder="password"
                className="input input-bordered"
              />
                  {errors.password && (
                <span className="text-red-800">
                  Password at least 6 character
                </span>
              )}
              {errors.password?.type === 'pattern' && (
                <span className="text-red-800">
                  at least one character uppercase
                </span>
              )}
              {errors.password?.type === "required" && (
                <span className="text-red-800">password is required</span>
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
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
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
                    {...register("photo")}
                    placeholder="Photo URL"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-rose-500 w-full rounded-md py-3 text-white"
                >
                  Register Now
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
            <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
              <FcGoogle size={32} />

              <p>Continue with Google</p>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Already have an account yet?{" "}
              <Link
                to="/login"
                className="hover:underline hover:text-rose-500 text-gray-600"
              >
                Login
              </Link>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
