import React from "react";


export default function Header({ ethPrice }) {
    return (
        <div className="grid grid-cols-7 text-white mt-16 mb-32">
            <div className="col-start-2 col-span-5 flex align-middle">
                <h1 className="text-2xl xl:text-3xl">ETHEREUM GAS TRACKER</h1>
                <h2 className="ml-auto text-xl xl:text-2xl">ETH PRICE   ${Math.trunc(ethPrice)}</h2>
            </div>   
        </div>
    )
};