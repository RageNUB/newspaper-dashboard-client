import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useURL from "../../hooks/useURL";
import "./update.css"
import { useNavigate,useParams } from "react-router-dom";
const AddPost = () => {
  const navigate=useNavigate();
  // console.log(eval(data.result));


  const [time, setTime] = useState(new Date());
  const baseURL = useURL()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  async function fet1(){
    const resp=await fetch(
      `${baseURL}/show_author/`
    );
    // console.log(resp.json())
    return await resp.json();
  }
  const [auth, setauth] = useState({
    loading: true,
    articles: [],
  });
  // fet();
  useEffect(() => {
    (async () => {
      const auth = await fet1();
      console.log(eval(auth.result));
      setauth({ loading: false, articles: eval(auth.result) });
    })();
  }, []);
  async function fet2(){
    const resp=await fetch(
      `${baseURL}/show_category/`
    );
    // console.log(resp.json())
    return await resp.json();
  }
  const [cate, setcate] = useState({
    loading: true,
    articles: [],
  });
  useEffect(() => {
    (async () => {
      const cate = await fet2();
      console.log(eval(cate.result));
      setcate({ loading: false, articles: eval(cate.result) });
    })();
  }, []);
  const[value,setvalue]=useState("");
  const[categ,setCateg]=useState("");
  const handleCategory=(e)=>{
    setCateg(e.target.value);
  }
  // console.log(categ);
const handleChange=(e)=>{
  setvalue(e.target.value);
}
    const[imagee,setimagee]=useState("");
    const handleimg=(e)=>{
      setimagee(e.target.files);
    }
// console.log(value);
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    // formData.append('cover_image', data.img);
    formData.append('cover_image', imagee[0]);
    formData.append('author', value);
    formData.append('content', data.content);
    formData.append('categories', categ);
    console.log("hii",formData);
    fetch(`${baseURL}/create_news_article/`, {
      method: "POST",
      body: formData,
    }).then((res) => res.json())
      .then((data) => {
        if(data.result){
            navigate("/dashboard/post-management");
            location.reload();
            alert("Post added Succesfully...");
        }
        console.log(data);
      }).catch((error)=>{
        alert(`Failed to add Post ${error}`)
        navigate("/dashboard/post-management");
        console.log(`Failed to add Post`,error)  
});
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div method="dialog" className="modal-box w-11/12 max-w-5xl">
        <form>
          <button className="btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="text-2xl font-bold text-center mt-2 ">
          Let&apos;s add a new post
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="grid grid-cols-2 gap-5 mt-8 mb-3">
            <div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered w-full"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-red-600">Title is required</span>
              )}
            </div>
            <div>
          
            <select className="input input-bordered w-full"  placeholder="author" id="lang" onChange={handleChange}>
                <option selected disabled>Select a Author</option>
            { 
            auth.loading ? (
            <p> Data is fetching.....</p>
        ) : auth !== 0 ? (
           auth.articles.map((Data) =>
                <option name="author" key={`${Data.pk}`}  value={`${Data.fields.author}`}>{`${Data.fields.author}`}</option>
              ))
            :(
              <p>No results to show</p>
            )}
            </select>
              {errors.author && (
                <span className="text-red-600">Author is required</span>
              )}
            </div>

            <div>
              <input
                type="file"
                name="img"
                placeholder="Image"
                onChange={handleimg}
                className="file-input file-input-bordered file-input-primary w-full"
                // {...register("img", { required: true })}
              />
              {errors.img && (
                <span className="text-red-600">Image is required</span>
              )}
            </div>
            <div>
              <select className="input input-bordered w-full" placeholder="category" name="category" id="lang" onChange={handleCategory}>
                <option  selected disabled >Select a Category</option>
            { 
            cate.loading ? (
            <p> Data is fetching.....</p>
        ) : cate !== 0 ? (
           cate.articles.map((Data) =>
                <option name="categories" key={`${Data.pk}`} value={`${Data.fields.category}`}>{`${Data.fields.category}`}</option>
              ))
            :(
              <p>No results to show</p>
            )}
            </select>
              {errors.category && (
                <span className="text-red-600">Category is required</span>
              )}
            </div>
            <div>
              <input
                type="datetime-local"
                name="currenttime"
                placeholder={`${time.toLocaleDateString()} ${time.toLocaleTimeString()}`}
                className="input input-bordered w-full"    
                {...register("created_at", { required: false })}
              />
            </div>
            <div className="col-span-2 w-full">
              <textarea
                {...register("content", { required: true })}
                className="textarea textarea-bordered textarea-sm w-full max-w-6xl"
                placeholder="Content"
              ></textarea>
              {errors.content && (
                <span className="text-red-600">Content is required</span>
              )}
            </div>
          </div>
          <div className="modal-action justify-center">
            <button  className="btn btn-primary px-12">Add New Post</button>
          </div>
        </form>
      </div>

    </dialog>
  );
};

export default AddPost;