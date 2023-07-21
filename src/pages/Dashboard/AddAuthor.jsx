import useURL from "../../hooks/useURL";
import { useNavigate } from "react-router-dom";
// import useMEDIA from "../../hooks/useMEDIA";
const AddUser = () => {
  const baseURL = useURL();
  const navigate=useNavigate();
  // const baseMedia=useMEDIA();
  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const author = form.author.value;
    const formData = new FormData();
    formData.append('author', author);
    console.log(formData);
    
    fetch(`${baseURL}/create_author/`, {
      method: "POST",
      body: formData,
    }).catch((e)=>
    alert(`failed to add author ${e}`))
      .then((res) => res.json())
      .then((data) => {
        if(data.result==='Author successfully created'){
          navigate("/dashboard/post-management");
          location.reload();
          alert("Author added Succesfully...");
        }
        console.log(data);
      }).catch((error)=>{
        location.reload();
        console.log(`Failed to add Author`,error)
      alert(`Failed to add Author ${error}`)});
  };



  return (
    <dialog id="my_modal_4" className="modal">
      <div method="dialog" className="modal-box w-11/12 max-w-2xl">
        <form>
          <button className="btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="text-2xl font-bold text-center mt-2 ">
          Let&apos;s add author
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
              value="Add Author"
            />
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddUser;
