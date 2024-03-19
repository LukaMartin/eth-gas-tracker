import React, { useEffect, useState } from 'react';
import Header from './components/header';
import GasDisplay from './components/gasdisplay';
import Footer from './components/footer';

export default function App() {

  const [jsonResponseArray, setJsonResponseArray] = useState([]);

  const [blockValues, setBlockValues] = useState([]);

  const [upcomingBlockValues, setUpcomingBlockValues] = useState([]);

  const [estimatedGasPrices, setEstimatedGasPrices] = useState([]);

  const [gasNowValues, setGasNowValues] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY

  const ethPrice = gasNowValues.price;


  const fetchGasValues = () => {

    fetch("https://api.blocknative.com/gasprices/blockprices", {
      method: "GET",
      headers: {
        "Authorization": apiKey
      }
    })
      .then((response) => {
        return response.json()
      }).then((jsonResponse) => {
        setJsonResponseArray([jsonResponse])

        jsonResponse.blockPrices.map(data => {
          setUpcomingBlockValues({
            baseFeePerGas: `${data.baseFeePerGas.toFixed(2)} GWei`,
            estimatedTransactionCount: data.estimatedTransactionCount,
            blockNumber: data.blockNumber,
            estimatedPrices: data.estimatedPrices
          })
        })
      })
  };


  useEffect(() => {

    jsonResponseArray.map(data => {
      setBlockValues({
        system: data.system,
        network: data.network,
        unit: data.unit,
        maxGasPrice: `${data.maxPrice} GWei`,
        currentBlockNumber: data.currentBlockNumber,
        timeSinceLastBlock: `${(data.msSinceLastBlock / 3600).toFixed(2)} s`
      })
    })

  }, [jsonResponseArray]);



  useEffect(() => {

    setEstimatedGasPrices([])

    upcomingBlockValues.estimatedPrices?.map(data => {
      setEstimatedGasPrices(prev => [...prev, data])
    })

  }, [upcomingBlockValues]);



  const fetchGasNowValues = () => {

    const getData =
      fetch("https://beaconcha.in/api/v1/execution/gasnow", {
        method: "GET"
      })
        .then((response) => {
          return response.json()
        }).then((jsonResponse) => {
          setGasNowValues(jsonResponse.data)
        })
  };


  useEffect(() => {
    setInterval(() => {
      fetchGasValues()
      fetchGasNowValues()
    }, 15100)
  }, []);



  return (
    <>
      <div>
        <Header ethPrice={ethPrice} />
      </div>

      <div>
        <GasDisplay
          blockValues={blockValues}
          upcomingBlockValues={upcomingBlockValues}
          estimatedGasPrices={estimatedGasPrices}
          gasNowValues={gasNowValues}
        />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )


}


