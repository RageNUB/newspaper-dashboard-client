import useURL from "../../hooks/useURL";
import { useState,useEffect } from "react";
import "./alert.css"
// import { useNavigate} from "react-router-dom";
// import useMEDIA from "../../hooks/useMEDIA";

const AddUser = () => {
  const baseURL = useURL();
  // const navigate=useNavigate();
  // const [newses, setNewses] = useState([]);

  const [showDangerAlert, setshowDangerAlert] = useState(false);
  const [showSuccessAlert, setshowSuccessAlert] = useState(false);
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    fetch(`${baseURL}/show_author/`)
      .then((res) => res.json())
      .then((data) => setNewses(Object.values(eval(data.result)).reverse()))
      ;
  }, [baseURL]);
  console.log(newses);

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
    }).then((res) => res.json())
      .then((data) => {
        if(data.result){
          setshowSuccessAlert(true);
          setshowDangerAlert(false)
        }
        console.log(data);
      }).catch((error)=>{
        console.log(`Failed to add Author`,error);
        setshowSuccessAlert(false);
        setshowDangerAlert(true);
      })
  };

  return ( 
    <dialog id="my_modal_4" className="modal">
      <div method="dialog" className="modal-box w-11/12 max-w-2xl">
      {  
      showSuccessAlert && 
      <div className={"alert alert-success alert-dismissible fade show aler" }  role="alert">
      <strong>Success!</strong> Author Added successfully...
      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setshowSuccessAlert(false)}>
      <span aria-hidden="true">&times;</span>
      </button>
      </div>
      }
      {showDangerAlert && 
      <div className="alert alert-danger ale"  role="alert">
      <strong>Error!</strong> Author cannot be added because it is already present..
      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setshowDangerAlert(false)}>
      <span aria-hidden="true">&times;</span>
      </button>
      </div>} 
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