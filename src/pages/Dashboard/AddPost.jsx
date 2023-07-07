import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useURL from "../../hooks/useURL";

const AddPost = () => {
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
      `https://tv369.in:8443/show_author/`
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
  

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('cover_image', data.img);
    formData.append('author', data.author);
    formData.append('content', data.content);
    formData.append('categories', data.core_categories);
    
    fetch(`${baseURL}/create_news_article/`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
          
            <select className="input input-bordered w-full" placeholder="author" name="category" id="lang">
                <option disabled selected hidden>Select a Author</option>
            { 
            auth.loading ? (
            <p> Data is fetching.....</p>
        ) : auth !== 0 ? (
           auth.articles.map((Data) =>
                <option key={`${Data.pk}`} value={`${Data.fields.category}`}>{`${Data.fields.category}`}</option>
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
                type="text"
                name="tags"
                placeholder="Tags"
                className="input input-bordered w-full"
                {...register("tags", { required: false })}
              />
              {errors.tags && (
                <span className="text-red-600">Tags is required</span>
              )}
            </div>
            <div>
              <input
                type="file"
                name="image"
                placeholder="Image"
                className="file-input file-input-bordered file-input-primary w-full"
                {...register("img", { required: true })}
              />
              {errors.img && (
                <span className="text-red-600">Image is required</span>
              )}
            </div>
            <div>
              {/* <input
                type="text"
                name="category"
                placeholder="Categories"
                className="input input-bordered w-full"
                {...register("core_categories", { required: true })}
              /> */}
              <select className="input input-bordered w-full" placeholder="author" name="category" id="lang">
                <option disabled selected hidden >Select a Category</option>
            { 
            cate.loading ? (
            <p> Data is fetching.....</p>
        ) : cate !== 0 ? (
           cate.articles.map((Data) =>
                <option key={`${Data.pk}`} value={`${Data.fields.category}`}>{`${Data.fields.category}`}</option>
              ))
            :(
              <p>No results to show</p>
            )}
            </select>
              {errors.core_categories && (
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
            <button className="btn btn-primary px-12">Add New Post</button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddPost;
