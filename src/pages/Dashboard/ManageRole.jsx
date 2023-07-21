import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const ManageRole = () => {
  const [superAdmin, setSuperAdmin] = useState(true);
  const [financeManager, setFinanceManager] = useState(false);
  const [applicationManager, setApplicationManager] = useState(false);

  const handleSuperAdmin = () => {
    setSuperAdmin(true);
    setFinanceManager(false);
    setApplicationManager(false);
  };
  const handleFinanceManager = () => {
    setSuperAdmin(false);
    setFinanceManager(true);
    setApplicationManager(false);
  };
  const handleApplicationManager = () => {
    setSuperAdmin(false);
    setFinanceManager(false);
    setApplicationManager(true);
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        
        <div className="grid grid-cols-5">
          <div className="col-span-1 bg-base-300">
            <table className="table">
                <thead className="text-sm">
                    <tr>
                        <th>
                            Role
                        </th>
                    </tr>
                </thead>
            </table>
            <button
              onClick={handleSuperAdmin}
              className="btn btn-ghost font-medium"
            >
              Super Admin
            </button>
            <button
              onClick={handleFinanceManager}
              className="btn btn-ghost font-medium"
            >
              Finance Manager
            </button>
            <button
              onClick={handleApplicationManager}
              className="btn btn-ghost font-medium"
            >
              Application Manager
            </button>
          </div>
          <div className="col-span-4">
            <table className="table">
              <thead className="bg-base-300 text-sm">
                <tr>
                  <th>Section</th>
                  <th>All</th>
                  <th>Read Only</th>
                  <th>Write</th>
                </tr>
              </thead>
              {superAdmin && <tbody className="text-primary">
                {/* row 1 */}
                <tr>
                  <th>Dashboard</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                    {/* <FaRegCheckCircle></FaRegCheckCircle> */}
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                    {/* <FaRegCheckCircle></FaRegCheckCircle> */}
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                    {/* <FaRegCheckCircle></FaRegCheckCircle> */}
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>Applications</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>Finance</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>Bookings</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>E-Wallet</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>User Management</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>Reports</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>Drivers</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>Customers</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>Tickets</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
              </tbody>}
              {financeManager && <tbody className="text-primary">
                {/* row 1 */}
                <tr>
                  <th>Dashboard</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                    {/* <FaRegCheckCircle></FaRegCheckCircle> */}
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                    {/* <FaRegCheckCircle></FaRegCheckCircle> */}
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                    {/* <FaRegCheckCircle></FaRegCheckCircle> */}
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>Applications</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>Finance</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>Bookings</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>E-Wallet</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>User Management</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>Reports</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>Drivers</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>Customers</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>Tickets</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
              </tbody>}
              {applicationManager && <tbody className="text-primary">
                {/* row 1 */}
                <tr>
                  <th>Dashboard</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                    {/* <FaRegCheckCircle></FaRegCheckCircle> */}
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                    {/* <FaRegCheckCircle></FaRegCheckCircle> */}
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                    {/* <FaRegCheckCircle></FaRegCheckCircle> */}
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>Applications</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>Finance</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>Bookings</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>E-Wallet</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>User Management</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>Reports</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>Drivers</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>Customers</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
                <tr>
                  <th>Tickets</th>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                  <td>
                    <FaCheckCircle></FaCheckCircle>
                  </td>
                </tr>
              </tbody>}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageRole;