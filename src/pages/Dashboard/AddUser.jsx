import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useURL from "../../hooks/useURL";

const AddUser = () => {
  const [isShow, setIsShow] = useState(false);
  const baseURL = useURL();

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const username = form.username.value;
    const password = form.password.value;

    const formData = new FormData();
    formData.append('full_name', name);
    formData.append('username',username);
    formData.append('password', password);

    fetch(`${baseURL}/create_user/`, {
      method: "POST",
      // headers: {
      //   "content-type": "application/json",
      // },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };


  return (
    <dialog id="my_modal_3" className="modal">
      <div method="dialog" className="modal-box w-11/12 max-w-2xl">
        <form>
          <button className="btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="text-2xl font-bold text-center mt-2 ">
          Let&apos;s set up your user profile with some basic information
        </h1>
        <form
          onSubmit={handleCreateUser}
          className="w-full"
        >
          <div className="grid grid-cols-1 gap-5 mt-12 mb-3">
            <div>
              <input
                type="text"
                name="name"
                placeholder="User Full Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="form-control w-full">
                <input
                  type={isShow ? "text" : "password"}
                  name="password"
                  placeholder="Create Password*"
                  className="input input-bordered w-full"
                />
              </div>
              <div onClick={() => setIsShow(!isShow)} className="text-primary">
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
          </div>
          <div className="flex justify-center mt-7">
            <input
              className="btn btn-primary px-12"
              type="submit"
              value="Add User"
            />
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddUser;
