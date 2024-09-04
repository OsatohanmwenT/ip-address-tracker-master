export default function DisplayInfo({ data }) {
    return(
        <div className="bg-white absolute z-[1000] top-[18%] left-0 right-0 grid grid-cols-4 max-md:grid-cols-1 max-md:text-center p-6 mt-10 max-lg:mt-4 rounded-xl max-w-[1000px] mx-auto max-lg:mx-8 max-md:grid-rows-4">
            <div className="md:border-r-[1px] flex flex-col flex-wrap border-Dark-grey px-4 mb-1">
            <span className="text-Dark-grey text-sm font-semibold tracking-widest lg:mb-2">IP ADDRESS</span>
            <span className="lg:text-2xl text-xl font-medium">{data.ip}</span>
            </div>
            <div className="md:border-r-[1px] flex flex-col flex-wrap border-Dark-grey px-4">
            <span className="text-Dark-grey  text-sm font-semibold tracking-widest lg:mb-2">LOCATION</span>
            <span className="lg:text-2xl text-xl font-medium">{data.location.city},{data.location.country} {data.location.postalCode}</span>
            </div>
            <div className="md:border-r-[1px] flex flex-col flex-wrap border-Dark-grey px-4">
            <span className="text-Dark-grey text-sm font-semibold tracking-widest lg:mb-2">TIMEZONE</span>
            <span className="lg:text-2xl text-xl font-medium">UTC {data.location.timezone}</span>
            </div>
            <div className="flex flex-col flex-wrap px-4">
            <span className="text-Dark-grey text-sm font-semibold tracking-widest lg:mb-2">ISP</span>
            <span className="lg:text-2xl text-xl font-medium">{data.isp || "Not found"}</span>
            </div>
        </div>
    )
}