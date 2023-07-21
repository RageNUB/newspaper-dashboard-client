
import {  useParams } from "react-router-dom";
import useURL from "../../hooks/useURL";
import { useNavigate } from "react-router-dom";
import './update.css'
function Update_author() {
    const {id}=useParams();
    const key={id};
    console.log(key)
    const baseURL = useURL();
    const navigate=useNavigate();
    const DeleteAuthor=()=>{
        const formData1 = new FormData();
        formData1.append('author_id',key.id);
        fetch(`${baseURL}/delete_author/`, {
            method: "POST",
            body: formData1,
          }).catch((e)=>{
            console.log(e);
          }).then((res) => res.json())
          .then((data) => {
            if(data.result==='Author successfully deleted'){
                navigate("/dashboard/author-management");
                alert("Author deleted Succesfully...");
                location.reload();
              }
              if(data.result==='Author not found.'){
                navigate("/dashboard/author-management");
                alert("Author not found...");
                location.reload();
              } 
        }).catch((error)=>{
            location.reload();
            console.log(`Failed to add Category`,error)
          alert(`Failed to delete author ${error}`)});
    }
    // const baseMedia=useMEDIA();
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
          if(data.result==='Author successfully updated'){
            navigate("/dashboard/author-management");
            alert("Author updated Succesfully...");
            location.reload();
          }
          console.log(data);
        }).catch((error)=>{
          location.reload();
          console.log(`Failed to add Author`,error)
        alert(`Failed to add Author ${error}`)});
    };
  return (
    <div>
        <div method="dialog" className="modal-box w-11/12 max-w-2xl">
        <form>
          <button className="btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2">
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
