import { useState } from "react";
import Bankheaderfilter from "./Bankheaderfilter";


const Bankheader = ({ categoryfilter, setdata }) => {

    const [value, setvalue] = useState();

    const inscontent = (event) => {
        const data1 = event.target.value;
        console.log(data1);
        return setvalue(data1);
    }

    const rslcontent = () => {
        return setdata(value);
    }

    return (
        <>
            <div >
                <div className="flex flex-row justify-center">
                    <input type="text" className="border-4 border-black" onChange={inscontent} />
                    <button className="w-14 h-14 bg-blue-500 text-white" onClick={rslcontent}>입력</button>
                    <Bankheaderfilter categoryfilter={categoryfilter} />
                </div>
            </div>


        </>
    )
}

export default Bankheader;