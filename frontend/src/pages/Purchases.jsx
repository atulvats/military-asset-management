import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Purchases() {
  const [form,setForm] = useState({
    name:"",
    type:"",
    quantity:"",
    base:""
  });

  const submit = async()=>{
    await API.post("/purchases",form);
    alert("Purchase Added");
  };

  return (
    <>
      <Navbar />

      <div className="p-8 bg-slate-950 min-h-screen text-white">
        <h2 className="text-2xl mb-5 font-bold">New Purchase</h2>

        <div className="bg-slate-800 p-6 rounded-xl w-full max-w-md">

          <input className="w-full p-3 mb-3 rounded bg-slate-700"
          placeholder="Asset Name"
          onChange={(e)=>setForm({...form,name:e.target.value})} />

          <input className="w-full p-3 mb-3 rounded bg-slate-700"
          placeholder="Type"
          onChange={(e)=>setForm({...form,type:e.target.value})} />

          <input className="w-full p-3 mb-3 rounded bg-slate-700"
          placeholder="Quantity"
          onChange={(e)=>setForm({...form,quantity:e.target.value})} />

          <input className="w-full p-3 mb-3 rounded bg-slate-700"
          placeholder="Base"
          onChange={(e)=>setForm({...form,base:e.target.value})} />

          <button
          onClick={submit}
          className="w-full bg-green-600 p-3 rounded">
            Submit
          </button>

        </div>
      </div>
    </>
  );
}

export default Purchases;