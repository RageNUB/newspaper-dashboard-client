import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import useURL from "../../hooks/useURL";
import useMEDIA from "../../hooks/useMEDIA";
const ManageCategory = () => {
  const [newses, setNewses] = useState([]);
  const baseURL = useURL();
  const baseMedia=useMEDIA();
  useEffect(() => {
    fetch(`${baseURL}/show_category/`)
      .then((res) => res.json())
      .then((data) => setNewses(eval(data.result)));
  }, [baseURL]);
  console.log(newses);
  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {newses.map((news) => (
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
                  <div className="font-bold">{news.fields.category}</div>
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
