
import {  useParams } from "react-router-dom";
import useURL from "../../hooks/useURL";
import './update.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Update_author() {
  const navigate=useNavigate();
  const [showsuccessalert,setshowSuccessAlert]=useState(false);
  const [showDangerAlert,setshowDangerAlert]=useState(false);
  const [showdeletealert,setshowdeleteAlert]=useState(false);
  const [shownotdeletealert,setnotdeletealert]=useState(false);
    const {id}=useParams();
    const key={id};
    console.log(key)
    const baseURL = useURL();
    const DeleteAuthor=()=>{
        const formData1 = new FormData();
        formData1.append('author_id',key.id);
        fetch(`${baseURL}/delete_author/`, {
            method: "POST",
            body: formData1,
          }).catch((e)=>{
            console.log(e);
            setnotdeletealert(true);
            setshowdeleteAlert(false);
          }).then((res) => res.json())
          .then((data) => {
            if(data.result){
              setnotdeletealert(false);
              setshowdeleteAlert(true);
              }
        })
    }
    const handleCreateUser = (event) => {
      event.preventDefault();
      const form = event.target;
      const author = form.author.value;
      const formData = new FormData();
      formData.append('author', author);
      formData.append('author_id',key.id);
      console.log(formData);


      fetch(`${baseURL}/update_author/`, {
        method: "POST",
        body: formData,
      }).catch((e)=>
      alert(`failed to edit author ${e}`))
        .then((res) => res.json())
        .then((data) => {
          if(data.result){
            setshowSuccessAlert(true);
            setshowDangerAlert(false);
          }
          console.log(data);
        }).catch((error)=>{
          setshowSuccessAlert(false);
          setshowDangerAlert(true);
          console.log(error);
          });
    };
  return (
    <div>
        <div method="dialog" className="modal-box w-11/12 max-w-2xl">
        {showsuccessalert && 
    <div className={"alert alert-success alert-dismissible fade show aler" }  role="alert">
  <strong>Success!</strong> Author Editted successfully...
  <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setshowSuccessAlert(false)}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>}
    {showDangerAlert && 
    <div className="alert alert-danger ale"  role="alert">
  <strong>Error!</strong> Author cannot be editted because it is already present...
  <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setshowDangerAlert(false)}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>}

    {showdeletealert && 
    <div className={"alert alert-success alert-dismissible fade show aler" }  role="alert">
  <strong>Success!</strong> Author Deleted successfully...
  <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setshowdeleteAlert(false)}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>}
        {shownotdeletealert && 
    <div className="alert alert-danger ale"  role="alert">
  <strong>Error!</strong> Author cannot be editted because it is already present...
  <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setnotdeletealert(false)}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>}
        <form>
          <button className="btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2" onClick={()=>navigate("/dashboard/author-management")}>
            ✕
          </button>
        </form>
        <h1 className="text-2xl font-bold text-center mt-2 ">
          Let&apos;s Edit author
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
                placeholder="Author Full Name"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex justify-center mt-7">
            <input
              className="btn btn-primary px-12"
              type="submit"
              value="Edit Author"
            />
          </div>
        </form>
      </div>
      <div>
        <button className="button-5" onClick={DeleteAuthor}>Delete</button>
      </div>
    </div>
  )
}

export default Update_author
