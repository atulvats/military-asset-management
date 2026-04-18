import { useEffect,useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Dashboard() {
  const [assets,setAssets] = useState([]);

  useEffect(()=>{
    load();
  },[]);

  const load = async()=>{
    const res = await API.get("/assets");
    setAssets(res.data);
  };

  return (
    <>
      <Navbar />

      <div className="p-4 md:p-8 bg-slate-950 min-h-screen text-white">

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Dashboard
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-800 p-5 rounded-xl">
            <p>Total Assets</p>
            <h1 className="text-3xl font-bold">{assets.length}</h1>
          </div>

          <div className="bg-slate-800 p-5 rounded-xl">
            <p>Total Quantity</p>
            <h1 className="text-3xl font-bold">
              {assets.reduce((a,b)=>a+Number(b.quantity),0)}
            </h1>
          </div>

          <div className="bg-slate-800 p-5 rounded-xl">
            <p>Operational Bases</p>
            <h1 className="text-3xl font-bold">5</h1>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-5 mt-8">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-600">
                <th>Name</th>
                <th>Type</th>
                <th>Qty</th>
                <th>Base</th>
              </tr>
            </thead>

            <tbody>
              {assets.map((item)=>(
                <tr key={item._id} className="border-b border-slate-700">
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.quantity}</td>
                  <td>{item.base}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}

export default Dashboard;