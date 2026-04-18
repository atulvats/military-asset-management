import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Transfer() {
  const [assets, setAssets] = useState([]);
  const [id, setId] = useState("");
  const [newBase, setNewBase] = useState("");

  useEffect(() => {
    loadAssets();
  }, []);

  const loadAssets = async () => {
    const res = await API.get("/assets");
    setAssets(res.data);
  };

  const submit = async () => {
    await API.post("/transfers", { id, newBase });
    alert("Asset transferred successfully");

    setId("");
    setNewBase("");
    loadAssets();
  };

  return (
    <>
      <Navbar />

      <div className="p-8 bg-slate-950 min-h-screen text-white">
        <h2 className="text-2xl font-bold mb-5">Transfer Asset</h2>

        <div className="bg-slate-800 p-6 rounded-xl w-full max-w-md">

          <select
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full p-3 mb-4 rounded bg-slate-700"
          >
            <option value="">Select Asset</option>

            {assets.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name} - {item.base} - Qty {item.quantity}
              </option>
            ))}
          </select>

          <input
            placeholder="New Base"
            value={newBase}
            onChange={(e) => setNewBase(e.target.value)}
            className="w-full p-3 mb-4 rounded bg-slate-700"
          />

          <button
            onClick={submit}
            className="w-full bg-blue-600 p-3 rounded"
          >
            Transfer
          </button>

        </div>
      </div>
    </>
  );
}

export default Transfer;