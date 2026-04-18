import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/purchases">Purchases</Link>
      <Link to="/transfers">Transfers</Link>
      <Link to="/assignments">Assignments</Link>
    </div>
  );
}

export default Sidebar;