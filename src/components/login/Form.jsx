export const Form = () => {
  return (
    <div className="bg-white xl:w-1/2 px-10 py-20 rounded-3xl border-2 border-VeryPaleBlue shadow-lg">
      <h1 className="text-5xl font-semibold">Welcome!</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Please enter your details.
      </p>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-VeryPaleBlue rounded-xl p-4 mt-1 bg-transparent"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full border-2 border-VeryPaleBlue rounded-xl p-4 mt-1 bg-transparent"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="mt-8 text-center">
          <button className=" font-medium text-base text-LimeGreen">
            Forgot password
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-LimeGreen text-white text-lg font-bold">
            <a href="../../app.html">Sign in</a>
          </button>
          <button className="border-2 border-gray-100 py-3 rounded-xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        </div>
        <div className="mt-8 justify-center items-center flex">
          <p className="font-medium text-base">Don't have an account?</p>
          <button className="text-LimeGreen text-base font-medium ml-4">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};
