import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="h-screen bg-gradient-to-r from-primary to-info">
      <div className="flex justify-content-center h-full">
        <div className="m-auto">
          <div className="card bg-white shadow-xl">
            <div className="card-title font-bold text-4xl font-rubik-medium text-base-200 p-4">
              <span className="w-full text-center">Sign up with Chatty</span>
            </div>
            <div className="card-body">
              <div className="flex">
                <div>
                  <label className="label">
                    <span className="label-text text-base-200 font-rubik-regular">
                      Firstname
                    </span>
                  </label>
                  <input
                    className="input input-info w-full bg-white mr-3 placeholder:font-rubik-light"
                    placeholder="Firstname"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-base-200 font-rubik-regular">
                      Lastname
                    </span>
                  </label>
                  <input
                    className="input input-info w-full ml-3 bg-white placeholder:font-rubik-light"
                    placeholder="Lastname"
                  />
                </div>
              </div>
              <div className="w-full flex">
                <div className="w-1/3 mr-3">
                  <label className="label">
                    <span className="label-text text-base-200 font-rubik-regular">
                      Username
                    </span>
                  </label>
                  <input
                    className="input input-info bg-white w-full placeholder:font-rubik-light"
                    placeholder="Username"
                  />
                </div>
                <div className="w-2/3">
                  <label className="label">
                    <span className="label-text text-base-200 font-rubik-regular">
                      Email
                    </span>
                  </label>
                  <input
                    className="input input-info w-full bg-white placeholder:font-rubik-light"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="mr-2 w-full">
                  <label className="label">
                    <span className="label-text text-base-200 font-rubik-regular">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    className="input input-info bg-white placeholder:font-rubik-light"
                    placeholder="Password"
                  />
                </div>
                <div className="ml-1 w-full">
                  <label className="label">
                    <span className="label-text text-base-200 font-rubik-regular">
                      Verify Password
                    </span>
                  </label>
                  <input
                    type="password"
                    className="input input-info bg-white placeholder:font-rubik-light"
                    placeholder="Verify Password"
                  />
                </div>
              </div>
              <div className="mt-3">
                <button className="btn btn-info font-rubik-regular w-full text-white">
                  Sign Up
                </button>
                <div className="mt-3">
                  <span className="text-base-200 font-rubik-regular font-bold">
                    Already have an account ?{" "}
                  </span>
                  <Link
                    to="/login"
                    className="underline text-gray-400 font-rubik-regular font-bold hover:text-purple-600"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
