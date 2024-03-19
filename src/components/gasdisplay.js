import React from "react";
import BlockValues from "./blockValues";
import UpComingBlockValues from "./upcomingBlockValues";
import EstimatedGasPrices from "./estimatedGasPrices";
import CountdownTimer from "./countdownTimer";
import GasNow from "./GasNowValues";


export default function GasDisplay({ blockValues, upcomingBlockValues, estimatedGasPrices, gasNowValues }) {


    return (
        <div>
            <div className="grid grid-cols-7 grid-rows-2 lg:grid-rows-1 text-white mb-16">
                <BlockValues blockValues={blockValues} />
                <UpComingBlockValues upcomingBlockValues={upcomingBlockValues} />
                <CountdownTimer />
            </div>


            <div className="text-white grid grid-cols-7">
                <div className="col-start-2 col-span-5 justify-self-center">
                    <h2 className="text-xl xl:text-2xl font-semibold xl:font-normal">BLOCKNATIVE ESTIMATED GAS FOR NEXT BLOCK</h2>
                </div>
                <div className="flex flex-wrap col-start-1 col-span-7 xl:col-start-2 xl:col-span-5 mt-16 justify-center lg:justify-evenly xl:justify-between text-center px-10 xl:px-0">
                    {estimatedGasPrices.map(data => {
                        return (
                            <>
                                <EstimatedGasPrices data={data} />
                            </>
                        )
                    })}
                </div>
            </div>

            <div className="text-white grid grid-cols-7 mt-16">
                <div className="col-start-2 col-span-5 justify-self-center">
                    <h2 className="text-xl xl:text-2xl font-semibold xl:font-normal">GASNOW GAS PRICE ESTIMATION</h2>
                </div>
                <div className="col-start-2 col-span-5 xl:col-start-3 xl:col-span-3 flex justify-center xl:justify-evenly text-center mt-16">
                    <GasNow gasNowValues={gasNowValues} />
                </div>
            </div>
        </div>
    )

};