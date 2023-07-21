import { useState,useEffect,navigate } from "react";
import useURL from "../../hooks/useURL";
import { useForm } from "react-hook-form";
import "./update.css";
import { useNavigate, useParams } from "react-router-dom";
function Hello() {
    const navigate=useNavigate();
    const {id}=useParams();
    const key={id};
    // console.log(key);
    // console.log(key)
    const DeleteCategory=()=>{
        const formData1 = new FormData();
        formData1.append('article_id',key.id);
        fetch(`${baseURL}/delete_article/`, {
            method: "POST",
            body: formData1,
          }).catch((e)=>{
            console.log(e);
          }).then((res) => res.json())
          .then((data) => {
            if(data.result){
                navigate("/dashboard/post-management");
                alert("Post deleted Succesfully...");
                location.reload();
              }
            console.log(data);
        }).catch((error)=>{
            console.log(error);
        });
    }
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

/**************************************************/ 
    async function fet3(){
        const resp=await fetch(
          `${baseURL}/article/?id=${key.id}`
        );
        // console.log(resp.json())
        return await resp.json();
    }
    const [not,setnot] = useState({
        loading: true,
        articles: [],
    }); 
    // const[defaultValue,setvalue]=useState(not.loading?"fetching":not.articles[0].fields.title);
    useEffect(() => {
        (async () => {
          const not = await fet3();
          console.log(eval(not.result));
          setnot({ loading: false, articles: eval(not.result) });
        })();
    },[]);
    // setvalue(not.loading?"fetching":not.articles[0].fields.title);

    // console.log(not.articles[0].fields.content)

/******************************** */ 
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
        // console.log(eval(auth.result));
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

    const [newses, setNewses] = useState([]);
    useEffect(() => {
        fetch(`${baseURL}/article/?id=${key.id}`)
          .then((res) => res.json())
          .then((data) => setNewses(eval(data.result)));
    }, [baseURL]);
    // console.log(newses[0].fields.content);

    const[categ,setCateg]=useState("");
    const handleCategory=(e)=>{
      setCateg(e.target.value);
    }

    const[value,setvalue]=useState("");
    const handleChange=(e)=>{
      setvalue(e.target.value);
    }

    const[imagee,setimagee]=useState("");
    const handleimg=(e)=>{
      setimagee(e.target.files);
    }

    const onSubmit = (data) => {
      const formData = new FormData();
      formData.append('article_id',key.id);
      formData.append('title', data.title);
      formData.append('cover_image', imagee[0]);
      formData.append('author', value);
      formData.append('content', data.content);
      formData.append('categories', categ);
      formData.append('created_at',data.created_at)
      console.log("hii",formData);
      fetch(`${baseURL}/update_article/`, {
        method: "POST",
        body: formData,
      }).then((res) => res.json())
        .then((data) => {
          if(data.result){
            navigate("/dashboard/post-management");
            location.reload();
            alert("Post edited Succesfully...");
          }
          console.log(data);
        }).catch((error)=>{
          location.reload();
          console.log(`Failed to edit Post`,error)
        alert(`Failed to edit Post ${error}`)});
    };
    const [visible,setvisible]=useState(false);
  return (
  <div>
  {not.loading?"Data is fetching...":(
    <div method="dialog" className="modal-box w-11/12 max-w-5xl">
    <form>
      <button  className="btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2">
        ✕
      </button>
    </form>
    <h1 className="text-2xl font-bold text-center mt-2 ">
      Let&apos;s Edit a post
    </h1>
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="grid grid-cols-2 gap-5 mt-8 mb-3">
        <div>
          <input
            type="text"
            name="title"
            defaultValue={not.articles[0].fields.title}
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
            <option selected disabled>{not.articles[0].fields.author}</option>
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


        <div className="form-group row flex">
            <label className="col-sm-3 mx-4 mt-3 col-form-label">Do you want to edit image? </label>
            <div className=" col-sm-2 mt-3 mx-2">
            Yes<input type="radio" className="mx-2" name="isyes" value="1" onClick={()=>setvisible(true)}/>
            </div>
            <div className="col-sm-2 mt-3">
                No<input type="radio" className="mx-2 mt-1" name="isyes" value="0" onClick={()=>setvisible(false)}/>
            </div>
        </div>   

        <div> 
        <select className="input input-bordered w-full"  placeholder="Category" name="category" id="lang" onChange={handleCategory}>
            <option selected disabled>{not.articles[0].fields.categories}</option>
        { 
        cate.loading ? (
        <p> Data is fetching.....</p>
    ) : cate !== 0 ? (
       cate.articles.map((Data) =>
            <option name="categories" key={`${Data.pk}`}  value={`${Data.fields.category}`} >{`${Data.fields.category}` }</option>
           
          ))
        :(
          <p>No results to show</p>
        )}
        </select>  
          {errors.category && (
            <span className="text-red-600">Category is required</span>
          )}
        </div>
        {visible && 
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
        }
        <div>
          <input
            type="datetime-local"
            name="currenttime"
            defaultValue={not.articles[0].fields.created_at}
            placeholder={`${time.toLocaleDateString()} ${time.toLocaleTimeString()}`}
            className="input input-bordered w-full"
            {...register("created_at", { required: false })}
          />
        </div>
        <div className="col-span-2 w-full">
          <textarea
            defaultValue={not.articles[0].fields.content}
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
  )}
  <div>
        <button className="button-5" onClick={DeleteCategory}>Delete</button>
      </div>
  </div>
  )
}
export default Hello