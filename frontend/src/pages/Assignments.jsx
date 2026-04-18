import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Assignments() {
  const [assets, setAssets] = useState([]);
  const [id, setId] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    loadAssets();
  }, []);

  const loadAssets = async () => {
    const res = await API.get("/assets");
    setAssets(res.data);
  };

  const submit = async () => {
    await API.post("/assignments", { id, quantity });
    alert("Asset assigned successfully");
    setId("");
    setQuantity("");
    loadAssets();
  };

  return (
    <>
      <Navbar />

      <div className="p-8 bg-slate-950 min-h-screen text-white">
        <h2 className="text-2xl font-bold mb-5">Assignments & Expenditure</h2>

        <div className="bg-slate-800 p-6 rounded-xl w-full max-w-md">

          <label className="block mb-2 text-sm">Select Asset</label>
          <select
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full p-3 mb-4 rounded bg-slate-700"
          >
            <option value="">Choose Asset</option>
            {assets.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name} ({item.base}) - Qty {item.quantity}
              </option>
            ))}
          </select>

          <label className="block mb-2 text-sm">Quantity to Assign</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
            className="w-full p-3 mb-4 rounded bg-slate-700"
          />

          <button
            onClick={submit}
            className="w-full bg-green-600 hover:bg-green-700 p-3 rounded font-bold"
          >
            Submit Assignment
          </button>

        </div>
      </div>
    </>
  );
}

export default Assignments;