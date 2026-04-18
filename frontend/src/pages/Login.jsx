import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const login = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      navigate("/dashboard", { replace: true });

    } catch (error) {
      alert(
        error?.response?.data?.msg || "Invalid email or password"
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-950">
      <div className="bg-slate-800 p-6 md:p-8 rounded-xl w-[90%] max-w-md shadow-xl">

        <h2 className="text-white text-2xl mb-6 font-bold text-center">
          Login
        </h2>

        <input
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-green-600 py-3 rounded text-white font-bold hover:bg-green-700"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;