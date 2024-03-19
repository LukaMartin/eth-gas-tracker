import React from "react";

export default function UpcomingBlockValues({ upcomingBlockValues }) {

    return (
            <div className="col-start-4 col-span-3 lg:col-span-2 justify-self-end lg:justify-self-start">
                <h2 className="text-lg xl:text-2xl font-semibold xl:font-normal">UPCOMING BLOCK VALUES</h2>
                <p className="py-4 text-md xl:text-lg">Base Gas fee:    {upcomingBlockValues.baseFeePerGas}</p>
                <p className="pb-4 text-md xl:text-lg">Est. TXs to be included:    {upcomingBlockValues.estimatedTransactionCount}</p>
                <p className="text-md xl:text-lg">Block number:    {upcomingBlockValues.blockNumber}</p>
            </div>
    )

};


