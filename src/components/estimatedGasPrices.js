import React from "react";

export default function EstimatedGasPrices({ data }) {

    return (
        <>
            {data.confidence > 95 ? 
            <div className="leading-7 border-4 border-green-400 rounded-xl mr-4 lg:mr-0 py-4 px-[1.2rem] lg:px-[0.75rem] xl:px-[1.2rem]">
                <p className="pb-2 max-w-[8rem]">Confidence Level  <span className="font-semibold">{data.confidence}</span></p>
                <p className="pb-2 max-w-[8rem]">Max Priority Fee  <span className="font-semibold">{data.maxPriorityFeePerGas}</span></p>
                <p className="max-w-[7.8rem]">Max Base Fee  <span className="font-semibold">{data.maxFeePerGas}</span></p>
            </div>
            : data.confidence > 90 ?
            <div className="leading-7 border-4 border-yellow-green rounded-xl mx-2 lg:mx-0 py-4 px-[1.2rem] lg:px-[0.75rem] xl:px-[1.2rem]">
                <p className="pb-2 max-w-[8rem]">Confidence Level  <span className="font-semibold">{data.confidence}</span></p>
                <p className="pb-2 max-w-[8rem]">Max Priority Fee  <span className="font-semibold">{data.maxPriorityFeePerGas}</span></p>
                <p className="max-w-[7.8rem]">Max Base Fee  <span className="font-semibold">{data.maxFeePerGas}</span></p>
            </div>
            : data.confidence > 80 ? 
            <div className="leading-7 border-4 border-yellow-400 rounded-xl ml-4 lg:ml-0 py-4 px-[1.2rem] lg:px-[0.75rem] xl:px-[1.2rem]">
                <p className="pb-2 max-w-[8rem]">Confidence Level  <span className="font-semibold">{data.confidence}</span></p>
                <p className="pb-2 max-w-[8rem]">Max Priority Fee  <span className="font-semibold">{data.maxPriorityFeePerGas}</span></p>
                <p className="max-w-[7.8rem]">Max Base Fee  <span className="font-semibold">{data.maxFeePerGas}</span></p>
            </div>
            : data.confidence > 70 ? 
            <div className="leading-7 border-4 border-orange rounded-xl mt-8 lg:mt-0 mr-3 lg:mr-0 py-4 px-[1.2rem] lg:px-[0.75rem] xl:px-[1.2rem]">
                <p className="pb-2 max-w-[8rem]">Confidence Level  <span className="font-semibold">{data.confidence}</span></p>
                <p className="pb-2 max-w-[8rem]">Max Priority Fee  <span className="font-semibold">{data.maxPriorityFeePerGas}</span></p>
                <p className="max-w-[7.8rem]">Max Base Fee  <span className="font-semibold">{data.maxFeePerGas}</span></p>
            </div>
            : 
            <div className="leading-7 border-4 border-red-500 rounded-xl mt-8 lg:mt-0 ml-3 lg:ml-0 py-4 px-[1.2rem] lg:px-[0.75rem] xl:px-[1.2rem]">
                <p className="pb-2 max-w-[8rem]">Confidence Level  <span className="font-semibold">{data.confidence}</span></p>
                <p className="pb-2 max-w-[8rem]">Max Priority Fee  <span className="font-semibold">{data.maxPriorityFeePerGas}</span></p>
                <p className="max-w-[7.8rem]">Max Base Fee  <span className="font-semibold">{data.maxFeePerGas}</span></p>
            </div>}
        </>

    )

};

