import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Purchases from "./pages/Purchases";
import Transfers from "./pages/Transfers";
import Assignments from "./pages/Assignments";
import Users from "./pages/Users";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleProtectedRoute from "./components/RoleProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Login />} />

        {/* Dashboard - All Logged Users */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin + Logistics */}
        <Route
          path="/purchases"
          element={
            <RoleProtectedRoute allow={["Admin", "Logistics"]}>
              <Purchases />
            </RoleProtectedRoute>
          }
        />

        {/* Admin + Logistics */}
        <Route
          path="/transfers"
          element={
            <RoleProtectedRoute allow={["Admin", "Logistics"]}>
              <Transfers />
            </RoleProtectedRoute>
          }
        />

        {/* Admin + Commander */}
        <Route
          path="/assignments"
          element={
            <RoleProtectedRoute allow={["Admin", "Commander"]}>
              <Assignments />
            </RoleProtectedRoute>
          }
        />

        {/* Admin Only */}
        <Route
          path="/users"
          element={
            <RoleProtectedRoute allow={["Admin"]}>
              <Users />
            </RoleProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;