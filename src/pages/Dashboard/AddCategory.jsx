
import useURL from "../../hooks/useURL";

const AddUser = () => {
 
  const baseURL = useURL();

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const category = form.category.value;


    const formData = new FormData();
    formData.append('category', category);


    fetch(`${baseURL}/create_category/`, {
      method: "POST",
      // headers: {
      //   "content-type": "application/json",
      // },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };


  return (
    <dialog id="my_modal_5" className="modal">
      <div method="dialog" className="modal-box w-11/12 max-w-2xl">
        <form>
          <button className="btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="text-2xl font-bold text-center mt-2 ">
          Let&apos;s add category
        </h1>
        <form
          onSubmit={handleCreateUser}
          className="w-full"
        >
          <div className="grid grid-cols-1 gap-5 mt-12 mb-3">
            <div className="form-control">
              <input
                type="text"
                name="category"
                placeholder="Category name"
                className="input input-bordered w-full"
              />
            </div>

          </div>
          <div className="flex justify-center mt-7">
            <input
              className="btn btn-primary px-12"
              type="submit"
              value="Add Category"
            />
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddUser;
