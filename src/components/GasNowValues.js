import React from "react";

export default function GasNow({ gasNowValues }) {

    return (
        
        <>
            <div className="border-4 border-green-400 rounded-2xl px-12 mr-6 xl:mr-0">
                <h3 className="text-xl pt-8 pb-8">RAPID</h3>
                <p className="text-md xl:text-lg pb-8 max-w-[4rem]"><span className="font-semibold">{(gasNowValues.rapid / 1000000000).toFixed(2)}</span> GWei</p>
            </div>

            <div className="border-4 border-yellow-400 rounded-2xl px-12">
                <h3 className="text-xl pt-8 pb-8">FAST</h3>
                <p className="text-md xl:text-lg pb-8 max-w-[4rem]"><span className="font-semibold">{(gasNowValues.fast / 1000000000).toFixed(2)}</span> GWei</p>
            </div>

            <div className="border-4 border-red-500 rounded-2xl px-[2.1rem] ml-6 xl:ml-0">
                <h3 className="text-xl pt-8 pb-8">REGULAR</h3>
                <p className="text-md xl:text-lg pb-8 max-w-[4rem] pl-6"><span className="font-semibold">{(gasNowValues.standard / 1000000000).toFixed(2)}</span> GWei</p>
            </div>
        </>
       
    )
};
