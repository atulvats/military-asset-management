import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await API.get("/auth/users");
      setUsers(res.data);
    } catch (error) {
      alert("Access Denied");
    }
  };

  return (
    <>
      <Navbar />

      <div className="p-4 md:p-8 bg-slate-950 min-h-screen text-white">
        <h2 className="text-2xl font-bold mb-5">All Users</h2>

        <div className="bg-slate-800 rounded-xl p-4 md:p-6 overflow-x-auto">

          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className="border-b border-slate-600">
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              {users.map((item) => (
                <tr
                  key={item._id}
                  className="border-b border-slate-700"
                >
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </>
  );
}

export default Users;