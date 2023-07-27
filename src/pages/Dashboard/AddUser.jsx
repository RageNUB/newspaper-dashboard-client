import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useURL from "../../hooks/useURL";
import { useForm } from "react-hook-form";
import './alert.css'
const AddUser = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isShow, setIsShow] = useState(false);
  const [showsuccessalert,setshowSuccessAlert]=useState(false);
  const [showdangeralert,setshowdangerAlert]=useState(false);
  const baseURL = useURL();

  const onSubmit = (data) => {
    // event.preventDefault();
    // const form = event.target;
    // const name = form.name.value;
    // const username = form.username.value;
    // const password = form.password.value;
    // const formData=[{'full_name': name,'username':username,'password':password}]
    // console.log(name,username,password)
    const formData = new FormData();
    console.log(data)
        formData.append('full_name', data.name);
    formData.append('username',data.username);
    formData.append('password', data.password);
    console.log(formData)
    fetch(`${baseURL}/create_user/`, {
      method: "POST",
      body: formData,
      headers:{
        accept: 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.result){
          setshowSuccessAlert(true);
          setshowdangerAlert(false);
        console.log(data);
        }
      }).catch((e)=>{
        console.log("error",e);
        setshowSuccessAlert(false);
        setshowdangerAlert(true);
      })
  };


  return (
    <dialog id="my_modal_3" className="modal">
      <div method="dialog" className="modal-box w-11/12 max-w-2xl">
      {showsuccessalert && 
    <div className={"alert alert-success aler" }  role="alert">
  <strong>Success!</strong> User Added successfully...
  <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setshowSuccessAlert(false)}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>}
        {showdangeralert && 
    <div className="alert alert-danger ale"  role="alert">
  <strong>Error!</strong> User cannot be added. Try different username 
  <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setshowdangerAlert(false)}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>}
        <form>
          <button className="btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="text-2xl font-bold text-center mt-2 ">
          Let&apos;s set up your user profile with some basic information
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full"
        >
          <div className="grid grid-cols-1 gap-5 mt-12 mb-3">
            <div>
              <input
                type="text"
                name="name"
                placeholder="User Full Name"
                className="input input-bordered w-full"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input input-bordered w-full"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <span className="text-red-600">Username is required</span>
              )}
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="form-control w-full">
                <input
                  type={isShow ? "text" : "password"}
                  name="password"
                  placeholder="Create Password*"
                  className="input input-bordered w-full"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                <span className="text-red-600">Password is required</span>
              )}
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