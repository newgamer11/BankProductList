import Bankheaderfilter from "./Bankheaderfilter";


const Bankheader = ({ categoryfilter, setdata }) => {


    const inscontent = (event) => setdata(event.target.value)

    return (
        <>
            <div >
                <div className="flex flex-row justify-center">
                    <input type="text" className="border-4 border-black" onChange={inscontent} />
                    <button className="w-14 h-14 bg-blue-500 text-white">입력</button>
                    <Bankheaderfilter categoryfilter={categoryfilter} />
                </div>
            </div>


        </>
    )
}

export default Bankheader;