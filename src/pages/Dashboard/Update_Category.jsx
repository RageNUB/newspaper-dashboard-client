
import {  useParams } from "react-router-dom";
import useURL from "../../hooks/useURL";
import { useState } from "react";
import "./update.css";
import { useNavigate } from "react-router-dom";
function Update_Category() {
  const navigate=useNavigate();
  const [showsuccessalert,setshowSuccessAlert]=useState(false);
  const [showdangeralert,setshowDangerAlert]=useState(false);
  const [showdeletealert,setshowdeleteAlert]=useState(false);
  const [shownotdeletealert,setnotdeletealert]=useState(false);
    const {id}=useParams();
    const key={id};
    console.log(key)
    const baseURL = useURL();
   
    const DeleteCategory=()=>{
        const formData1 = new FormData();
        formData1.append('category_id',key.id);
        fetch(`${baseURL}/delete_category/`, {
            method: "POST",
            body: formData1,
          }).then((res) => res.json())
          .then((data) => {
            if(data.result){
                setnotdeletealert(false);
                setshowdeleteAlert(true);
              }
            console.log(data);
        }).catch((error)=>{
          setnotdeletealert(true);
          setshowdeleteAlert(false);
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
      }).catch((e)=>{
      setshowDangerAlert(true);
      setshowSuccessAlert(false);
      console.log(e);
    })
        .then((res) => res.json())
        .then((data) => {
          if(data.result){
            setshowDangerAlert(false);
            setshowSuccessAlert(true);
          }
          console.log(data);
        })
    };
  return (
    <div>
        <div method="dialog" className="modal-box w-11/12 max-w-2xl">
        {showsuccessalert && 
    <div className={"alert alert-success alert-dismissible fade show aler" }  role="alert">
  <strong>Success!</strong> Category Editted successfully...
  <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setshowSuccessAlert(false)}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>}
        {showdangeralert && 
    <div className="alert alert-danger ale"  role="alert">
  <strong>Error!</strong> Category cannot be editted because it is already present...
  <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setshowDangerAlert(false)}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>}

{showdeletealert && 
    <div className={"alert alert-success alert-dismissible fade show aler" }  role="alert">
  <strong>Success!</strong> Category deleted successfully...
  <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setshowdeleteAlert(false)}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>}
        {shownotdeletealert && 
    <div className="alert alert-danger ale"  role="alert">
  <strong>Error!</strong> Category cannot be deleted because it is already deleted...
  <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setnotdeletealert(false)}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>}
        <form>
          <button className="btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2" onClick={()=>navigate("/dashboard/category-management")}>
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