import { useEffect, useState,useMemo } from "react";
import {Link} from "react-router-dom";
import useURL from "../../hooks/useURL";
import useMEDIA from "../../hooks/useMEDIA";
import './managepost.css';
const ManageCategory = () => {
  const [newses, setNewses] = useState([]);
  const [sortType, setSortType] = useState("default");
  const baseURL = useURL();
  const baseMedia=useMEDIA();
 


  useEffect(() => {
    fetch(`${baseURL}/show_category/`)
      .then((res) => res.json())
      .then((data) => setNewses(Object.values(eval(data.result))
      ));    
  }, [baseURL]);


  // const sortedData = useMemo(() => {
  //   let result = newses;

  //   if (sortType === "descending") {
  //     result = newses.sort((a, b) => {
  //       console.log("55",a);
  //       return b.fields.category.localeCompare(a.fields.category);
  //     });
  //   } else if (sortType === "ascending") {
  //     result = newses.sort((a, b) => {
  //       return a.fields.category.localeCompare(b.fields.category);
  //     });
  //   }
  //   return result;
  // }, [newses, sortType]);

  return (
    <div className="w-full ap">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr> 
              <th className="nams">Category</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {newses.sort((a,b)=>a.fields.category.toLowerCase()>b.fields.category.toLowerCase()?1:-1).map((news) => (
              <tr key={news.pk}>
              <Link to={`/dashboard/category-management/${news.pk}`}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=996&t=st=1687638366~exp=1687638966~hmac=988570e261d14138dd801dba1dfde39afc40280e2cf2dce715ad58c0fa929872"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{news.fields.category.charAt(0).toUpperCase()+news.fields.category.slice(1)}</div>
                </td>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCategory;