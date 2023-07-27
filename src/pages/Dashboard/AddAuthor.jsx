import useURL from "../../hooks/useURL";
import { useState,useEffect } from "react";
// import { useNavigate} from "react-router-dom";

// import useMEDIA from "../../hooks/useMEDIA";
const AddUser = () => {
  const baseURL = useURL();
  // const navigate=useNavigate();
  const[dup,setDup]=useState(false);
  const [newses, setNewses] = useState([]);
  const[rep,setrep]=useState("");
  // const [showDangerAlert, setshowDangerAlert] = useState(false);
  const [showSuccessAlert, setshowSuccessAlert] = useState(false);
  const controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    fetch(`${baseURL}/show_author/`)
      .then((res) => res.json())
      .then((data) => setNewses(Object.values(eval(data.result)).reverse()));
  }, [baseURL]);
  console.log(newses);

  // const handleChange=(e)=>{
  //   newses.map((neww) =>{
  //     console.log(e.target.value)
  //     if(e.target.value===neww.fields.author){
  //       setDup(true);
  //       console.log("aa")
  //       setrep("duplicate");
  //     }
  //     if(e.target.value!==neww.fields.author){
  //       setrep("");
  //     }

  //   })
  // }

  // const baseMedia=useMEDIA();
  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const author = form.author.value;
    const formData = new FormData();
    formData.append('author', author);
    console.log(formData);
    newses.map((neww) =>{
      if(neww.fields.author===author){
        setDup(true);
        alert("duplicate");
      }
      return;
    })
    if(dup===true){
      throw new Error("anjoff")
    }

    fetch(`${baseURL}/create_author/`, {
      method: "POST",
      body: formData,
      signal:signal,
    }).catch((e)=>{
    if (e.name === 'AbortError') {
      // Request was aborted
      console.log('Request was aborted');
      alert(`failed to add author ${e}`)
    }})
      .then((res) => res.json())
      .then((data) => {
        if(data.result==='Author successfully created'){
          setshowSuccessAlert('active')
          // navigate("/dashboard/author-management");
          // location.reload();
          // alert("Author added Succesfully...");
        }
        console.log(data);
      }).catch((error)=>{
        setshowDangerAlert(true)
        // location.reload();
        console.log(`Failed to add Author`,error)
      alert(`Failed to add Author ${error}`)});
  };

  if(dup===true){
    controller.abort();
  }

  return ( 
    <dialog id="my_modal_4" className="modal">
      <div method="dialog" className="modal-box w-11/12 max-w-2xl">
      {showSuccessAlert && 
      <div className={"alert alert-success alert-dismissible fade show" }  role="alert">
    <strong>Success!</strong> Author Added successfully...
    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setshowSuccessAlert(false)}>
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
          <p>{rep}</p>
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