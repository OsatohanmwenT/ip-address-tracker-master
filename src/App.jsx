import { useState, useEffect } from "react";
import DisplayInfo from "./Components/DisplayInfo";
import Search from "./Components/Search";
import Map from "./Components/Map";

export default function App() {
  const [data, setData] = useState(null)

  const fetchIpAddress = async(ipAddress) => {
    try{
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_ixlnEni6TbRkDppNDIR1OgGFSFwPr&ipAddress=${ipAddress}`)
      if(!response.ok){
        throw new Error(`HTTP Error status: ${response.status}`)
      }
      const ip = await response.json();
      console.log(ip)
      setData(ip)
    }catch(error){
      console.log("Invalid request", error)
    }
  }

  useEffect(() => {
    fetchIpAddress("98.98.197.199")
  },[])

  const lat = data?.location?.lat;
  const lng = data?.location?.lng;

  return (
    <main className="h-screen relative grid grid-flow-row">
      <div className=" w-full sm:bg-location bg-location-sm wide bg-no-repeat h-full">
      <h1 className="text-3xl mt-5 text-center text-white font-semibold">IP Address Tracker</h1>
      <Search fetch={fetchIpAddress} />
      {data &&
        <DisplayInfo data={data} />
      }
      </div>
      {lat && lng ? <Map location={{ lat, lng }} /> : <h1 className="text-3xl font-medium text-center">Loading...</h1>}
    </main>
  )
}