import { useEffect, useState } from "react";
import useURL from "../../hooks/useURL";

const ManagePost = () => {
  const [newses, setNewses] = useState([]);
  const baseURL = useURL();

  useEffect(() => {
    fetch(`${baseURL}/show_all_articles/`)
      .then((res) => res.json())
      .then((data) => setNewses(eval(data.result)));
  }, [baseURL]);
  console.log(newses);

  return (
    <div className="my-5">
      <div className="px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {newses.map((news) => (
          <div
            key={news.pk}
            className="card card-compact w-64 bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="w-64 h-40"
                src={news.fields.cover_image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-bold">{news.fields.title}</h2>
              <p className="text-base font-medium">{news.fields.author}</p>
              <p>{news.fields.content} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagePost;
