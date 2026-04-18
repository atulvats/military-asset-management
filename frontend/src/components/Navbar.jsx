// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();
//   const role = localStorage.getItem("role");

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");

//     window.history.pushState(null, "", "/");
//     navigate("/", { replace: true });

//     window.location.reload();
//   };

//   return (
//     <div className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">Military Asset System</h1>

//       <div className="space-x-5 flex items-center">

//         {/* All Logged Users */}
//         <Link to="/dashboard">Dashboard</Link>

//         {/* Admin + Logistics */}
//         {(role === "Admin" || role === "Logistics") && (
//           <Link to="/purchases">Purchases</Link>
//         )}

//         {(role === "Admin" || role === "Logistics") && (
//           <Link to="/transfers">Transfers</Link>
//         )}

//         {/* Admin + Commander */}
//         {(role === "Admin" || role === "Commander") && (
//           <Link to="/assignments">Assignments</Link>
//         )}

//         {/* Admin Only */}
//         {role === "Admin" && (
//           <Link to="/users">Users</Link>
//         )}

//         <button
//           onClick={logout}
//           className="bg-red-600 px-4 py-2 rounded"
//         >
//           Logout
//         </button>

//       </div>
//     </div>
//   );
// }

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    window.history.pushState(null, "", "/");
    navigate("/", { replace: true });

    window.location.reload();
  };

  return (
    <div className="bg-slate-900 text-white px-4 md:px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">

      <h1 className="text-lg md:text-xl font-bold text-center md:text-left">
        Military Asset System
      </h1>

      <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-5 items-center text-sm md:text-base">

        {/* All Logged Users */}
        <Link to="/dashboard">Dashboard</Link>

        {/* Admin + Logistics */}
        {(role === "Admin" || role === "Logistics") && (
          <Link to="/purchases">Purchases</Link>
        )}

        {(role === "Admin" || role === "Logistics") && (
          <Link to="/transfers">Transfers</Link>
        )}

        {/* Admin + Commander */}
        {(role === "Admin" || role === "Commander") && (
          <Link to="/assignments">Assignments</Link>
        )}

        {/* Admin Only */}
        {role === "Admin" && (
          <Link to="/users">Users</Link>
        )}

        <button
          onClick={logout}
          className="bg-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Navbar;