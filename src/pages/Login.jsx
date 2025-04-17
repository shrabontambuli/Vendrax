import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import GoogleLogin from "../components/login-registration/GoogleLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    Login(data.email, data.password);
    navigate("/");
  };
  return (
    <div
      className="hero bg-base-200 min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1625225233840-695456021cde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-[#92b98a34] w-full max-w-xl shrink-0 shadow-2xl py-10">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input bg-transparent text-black input-bordered focus:outline-none focus:ring-1 focus:ring-green-600"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 font-light"> Email is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input bg-transparent text-black input-bordered focus:outline-none focus:ring-1 focus:ring-green-600"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 font-light"> Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 font-light">
                  {" "}
                  Password must have at lest 6 characters
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn-pri text-white">
                Register
              </button>
            </div>
            <p className="my-4 text-sm font-normal text-black">
              Already have an account?{" "}
              <Link className="text-green-600" to="/register">
                Register
              </Link>
            </p>
            <GoogleLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
