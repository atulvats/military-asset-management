import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Purchase() {
  const [form, setForm] = useState({
    name: "",
    type: "",
    quantity: "",
    base: ""
  });

  const submit = async () => {
    await API.post("/purchases", form);
    alert("Purchase Added");

    setForm({
      name: "",
      type: "",
      quantity: "",
      base: ""
    });
  };

  return (
    <>
      <Navbar />

      <div className="p-8 bg-slate-950 min-h-screen text-white">
        <h2 className="text-2xl font-bold mb-5">Purchase Asset</h2>

        <div className="bg-slate-800 p-6 rounded-xl w-full max-w-md">

          <input
            placeholder="Asset Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-3 mb-3 rounded bg-slate-700"
          />

          <input
            placeholder="Type"
            value={form.type}
            onChange={(e) =>
              setForm({ ...form, type: e.target.value })
            }
            className="w-full p-3 mb-3 rounded bg-slate-700"
          />

          <input
            type="number"
            placeholder="Quantity"
            value={form.quantity}
            onChange={(e) =>
              setForm({ ...form, quantity: e.target.value })
            }
            className="w-full p-3 mb-3 rounded bg-slate-700"
          />

          <input
            placeholder="Base"
            value={form.base}
            onChange={(e) =>
              setForm({ ...form, base: e.target.value })
            }
            className="w-full p-3 mb-4 rounded bg-slate-700"
          />

          <button
            onClick={submit}
            className="w-full bg-green-600 p-3 rounded"
          >
            Submit
          </button>

        </div>
      </div>
    </>
  );
}

export default Purchase;