import { useEffect, useState } from "react";
import useURL from "../../hooks/useURL";
// import {createContext} from 'react';
import useMEDIA from "../../hooks/useMEDIA";
import { Link } from "react-router-dom";


const ManagePost = () => {
  const [newses, setNewses] = useState([]);
  const baseURL = useURL();
  const baseMedia=useMEDIA();
  
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
          <Link to={`/dashboard/post-management/${news.pk}`} onClick={() => window.my_modal_6.showModal() }>
            <figure>
              <img
                className="w-64 h-40"
                src={`${baseMedia}${news.fields.cover_image}`}
                alt="Shoes"
              />
            </figure>
            {/* {  console.log(baseMedia,news.fields.cover_image)} */}
            <div className="card-body">
              <h2 className="text-xl font-bold">{news.fields.title}</h2>
              <p className="text-base font-medium">{news.fields.author}</p>
              <p>{news.fields.content} </p>
            </div>
          </Link>
          </div>
        ))}      
      </div>  
    </div>
  );
};

export default ManagePost;