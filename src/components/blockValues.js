import React from "react";

export default function BlockValues({ blockValues }) {

    return (
      
            <div className="col-start-2 col-span-2 align-middle">
                <h2 className="text-lg font-semibold xl:font-normal xl:text-2xl">CURRENT BLOCK VALUES</h2>
                <p className="py-4 text-md xl:text-lg">Max gas pending:    <span>{blockValues.maxGasPrice}</span></p>
                <p className="pb-4 text-md xl:text-lg">Time since last block:  <span>{blockValues.timeSinceLastBlock}</span></p>
                <p  className="text-md xl:text-lg">Block number:   <span>{blockValues.currentBlockNumber}</span></p>
            </div>
      
    )

};



