import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../assets/tvLogo.png";
import illustrator from "../../assets/undraw_login_re_4vu2.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useURL from "../../hooks/useURL";

const Login = () => {
  const [isShow, setIsShow] = useState(false);
  //   const [error, setError] = useState(false);
  const baseURL = useURL();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const loginInfo = {
      username: data.username,
      password: data.password
    }
    fetch(`${baseURL}/login/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggle = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <div className="bg-base-200 min-h-screen pt-12">
        <div className="text-center">
          <div className="flex justify-center items-center gap-3">
            <h1 className="text-3xl font-bold "> Welcome To</h1>
            <img className="w-20" src={logo} alt="" />
          </div>
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="hero bg-base-200">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="hero-content flex-col lg:flex-row-reverse mt-8"
          >
            <div className="text-center lg:text-left md:w-1/2">
              <img src={illustrator} alt="" />
            </div>
            <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 md:w-1/2">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="input input-bordered"
                    {...register("username", { required: true })}
                  />
                  {errors.username && (
                    <span className="text-red-600">Username is required</span>
                  )}
                </div>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className=" flex justify-between items-center gap-4">
                  <div className="w-full">
                    <input
                      type={isShow ? "text" : "password"}
                      placeholder="Password"
                      className="input input-bordered w-full"
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <span className="text-red-600">Password is required</span>
                    )}
                    {/* {error && (
                      <span className="text-red-600">Wrong Password</span>
                    )} */}
                  </div>
                  <div onClick={toggle}>
                    {!isShow && (
                      <span className="text-xl">
                        <FaEyeSlash></FaEyeSlash>
                      </span>
                    )}
                    {isShow && (
                      <span className="text-xl">
                        <FaEye></FaEye>
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
