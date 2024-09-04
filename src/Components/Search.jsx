import { useRef } from "react"
import arrowIcon from "../assets/images/icon-arrow.svg"

export default function Search({ fetch }) {
  const inputRef = useRef(null);

  const handleSearch = () => {
    const ipAddress = inputRef.current.value;
    if (ipAddress) {
      fetch(ipAddress);
    }
  };

    return(
        <div className="flex justify-center mt-6 rounded-2xl rounded-ss-md max-sm:mx-8">
        <input
         className="p-3 pl-4 w-full max-w-[500px] rounded-s-2xl text-lg outline-none" 
         type="text"
         ref={inputRef} 
         placeholder="Search for any IP address or domain" />
        <button className="p-3 px-5 bg-black hover:bg-Very-Dark-grey transition-all rounded-e-2xl" onClick={() => handleSearch()}>
          <img src={arrowIcon} alt="arrow icon" />
          <span className="sr-only">search button</span>
        </button>
      </div>
    )
}