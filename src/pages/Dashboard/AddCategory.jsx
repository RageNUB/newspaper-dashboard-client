import { useState } from "react";
import useURL from "../../hooks/useURL";
// import { useNavigate } from "react-router-dom";
const AddUser = () => {
  // const navigate=useNavigate();
  const baseURL = useURL();
  const [showsuccessalert,setshowSuccessAlert]=useState(false);
  const [showDangerAlert,setshowDangerAlert]=useState(false);
  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const categories = form.categories.value;
    const formData = new FormData();
    formData.append('category', categories);
    console.log(categories);
    fetch(`${baseURL}/create_category/`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.result){
          setshowSuccessAlert(true);
          setshowDangerAlert(false);
          // navigate("/dashboard/category-management");
          // location.reload();
          // alert("category added Succesfully...");
        }
        console.log(data);
      }).catch((error)=>{
        setshowDangerAlert(true);
        setshowSuccessAlert(false);
        console.log(error); 
      })
  };

  return (
    <dialog id="my_modal_5" className="modal">
    {showsuccessalert && 
    <div className={"alert alert-success alert-dismissible fade show aler" }  role="alert">
  <strong>Success!</strong> Category Added successfully...
  <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setshowSuccessAlert(false)}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>}
  {showDangerAlert && 
    <div className="alert alert-danger ale"  role="alert">
  <strong>Error!</strong> Category cannot be added because it is already present.. 
  <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setshowDangerAlert(false)}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>}
      <div method="dialog" className="modal-box w-11/12 max-w-2xl">
        <form>
          <button className="btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="text-2xl font-bold text-center mt-2 ">
          Let&apos;s add categories
        </h1>
        <form
          onSubmit={handleCreateUser}
          className="w-full"
        >
          <div className="grid grid-cols-1 gap-5 mt-12 mb-3">
            <div className="form-control">
              <input
                type="text"
                name="categories"
                placeholder="Category name"
                className="input input-bordered w-full"
              />
            </div>

          </div>
          <div className="flex justify-center mt-7">
            <input
              className="btn btn-primary px-12"
              type="submit"
              value="Add Category"
            />
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddUser;