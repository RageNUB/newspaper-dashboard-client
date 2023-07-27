
import {  useParams } from "react-router-dom";
import useURL from "../../hooks/useURL";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./update.css"
function Update_Category() {
  const [showsuccessalert,setshowSuccessAlert]=useState(false)
    const {id}=useParams();
    const key={id};
    console.log(key)
    const baseURL = useURL();
    const navigate=useNavigate();
    const DeleteCategory=()=>{
        const formData1 = new FormData();
        formData1.append('category_id',key.id);
        fetch(`${baseURL}/delete_category/`, {
            method: "POST",
            body: formData1,
          }).catch((e)=>{
            console.log(e);
          }).then((res) => res.json())
          .then((data) => {
            if(data.result==='Category successfully deleted'){
                setshowSuccessAlert(true)
                // navigate("/dashboard/category-management");
                // alert("category deleted Succesfully...");
                // location.reload();
              }
            console.log(data);
        }).catch((error)=>{
            console.log(error);
        });
    }
    // const baseMedia=useMEDIA();
    const handleCreateUser = (event) => {
      event.preventDefault();
      const form = event.target;
      const author = form.author.value;
      const formData = new FormData();
      formData.append('category', author);
      formData.append('category_id',key.id);
      console.log(formData);
      fetch(`${baseURL}/update_category/`, {
        method: "POST",
        body: formData,
      }).catch((e)=>
      alert(`failed to edit category ${e}`))
        .then((res) => res.json())
        .then((data) => {
          if(data.result==='Category successfully updated'){
            navigate("/dashboard/category-management");
            alert("category editted Succesfully...");
            location.reload();
          }
          console.log(data);
        }).catch((error)=>{
          location.reload();
          console.log(`Failed to add Category`,error)
        alert(`Failed to edit Category ${error}`)});
    };
  return (
    <div>
     {showsuccessalert && 
    <div className={"alert alert-success alert-dismissible fade show" }  role="alert">
  <strong>Success!</strong> Category Added successfully...
  <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setshowSuccessAlert(false)}>
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
          Let&apos;s Edit Category
        </h1>
        <form
          onSubmit={handleCreateUser}
          className="w-full"
        >
          <div className="grid grid-cols-1 gap-5 mt-12 mb-3">
            <div>
              <input
                type="text"
                name="author"
                placeholder="Category Name"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex justify-center mt-7">
            <input
              className="btn btn-primary px-12"
              type="submit"
              value="Edit category"
            />
          </div>
        </form>
      </div>
      <div>
        <button className="button-5" onClick={DeleteCategory}>Delete</button>
      </div>
    </div>
  )
}

export default Update_Category;