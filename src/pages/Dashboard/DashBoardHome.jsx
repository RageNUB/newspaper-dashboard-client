import { useState,useEffect } from "react";
import useURL from "../../hooks/useURL";
import icon from "../../assets/icons8-checklist-64.png";
const DashBoardHome = () => {
  const [newses, setNewses] = useState([]);
  const [cate, setcate] = useState([]);
  const baseURL=useURL();
  useEffect(() => {
    fetch(`${baseURL}/show_author/`)
      .then((res) => res.json())
      .then((data) => setNewses(Object.values(eval(data.result)).reverse()));
  }, [baseURL]);
  console.log(newses);
  useEffect(() => {
    fetch(`${baseURL}/show_category/`)
      .then((res) => res.json())
      .then((data) => setcate(eval(data.result)
      ));    
  }, [baseURL]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`${baseURL}/show_users/`)
      .then((res) => res.json())
      .then((data) => setUsers(eval(data.result)));
  }, [baseURL]);
  console.log(cate);
  const [art, setart] = useState([]);
  useEffect(() => {
    fetch(`${baseURL}/show_all_articles/`)
      .then((res) => res.json())
      .then((data) => setart(Object.values(eval(data.result)).reverse()));
  }, [baseURL]);
  console.log(art);
    return (
      <div>
        <div className="flex gap-4 px-4">
          <div className="flex justify-center items-center gap-5 bg-base-200 py-4 px-5 rounded-xl">
            <div className="flex justify-center items-center rounded-full bg-purple-600 bg-opacity-20 w-14 h-14">
              <img className="w-10" src={icon} alt="" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{newses.length}</h1>
              <p>Total number of Author</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 bg-base-200 py-4 px-5 rounded-xl">
            <div className="flex justify-center items-center rounded-full bg-purple-600 bg-opacity-20 w-14 h-14">
              <img className="w-10" src={icon} alt="" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{cate.length}</h1>
              <p>Total number of categories</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 bg-base-200 py-4 px-5 rounded-xl">
            <div className="flex justify-center items-center rounded-full bg-purple-600 bg-opacity-20 w-14 h-14">
              <img className="w-10" src={icon} alt="" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{users.length}</h1>
              <p>Total number of users</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 bg-base-200 py-4 px-5 rounded-xl">
            <div className="flex justify-center items-center rounded-full bg-purple-600 bg-opacity-20 w-14 h-14">
              <img className="w-10" src={icon} alt="" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{art.length}</h1>
              <p>Total number of Posts</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashBoardHome;