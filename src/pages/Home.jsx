import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import TradingStrategy from '../components/TradingStrategy';
import { calculateSMA } from '../indicator/Movingavg';

const Home = () => {
  const [data, setData] = useState([]); // Candlestick data
  const [movingAverageLevel, setMovingAverageLevel] = useState(100); // Moving average level
  const [smaData, setSmaData] = useState([]); // SMA data
  const [stopLoss, setStopLoss] = useState(98.66);
  const [target, setTarget] = useState(109.80);

  const SMA_PERIOD = 5; // Define a consistent SMA period

  const fetchInitialData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/candles?count=400'); // Fetch initial data
      const jsonData = await response.json();

      const processedData = jsonData.map((entry) => ({
        x: new Date(entry.time).getTime(),
        y: [entry.open, entry.high, entry.low, entry.close],
      }));

      setData(processedData);
      const sma = calculateSMA(processedData, SMA_PERIOD); // Calculate SMA
      setSmaData(sma);
    } catch (error) {
      console.error('Error fetching initial candle data:', error);
    }
  };

  const fetchNewCandle = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/candles'); // Fetch the latest candle
      const newCandle = await response.json();

      const processedCandle = {
        x: new Date(newCandle.time).getTime(),
        y: [newCandle.open, newCandle.high, newCandle.low, newCandle.close],
      };

      setData((prevData) => {
        const updatedData = [...prevData, processedCandle].slice(-400); // Keep last 400 candles
        const sma = calculateSMA(updatedData, SMA_PERIOD); // Recalculate SMA
        setSmaData(sma); // Update SMA data
        return updatedData;
      });
    } catch (error) {
      console.error('Error fetching new candle:', error);
    }
  };

  const handleDataUpdate = (updatedData) => {
    setData(updatedData);
    const sma = calculateSMA(updatedData, SMA_PERIOD); // Recalculate SMA
    setSmaData(sma);
  };

  useEffect(() => {
    fetchInitialData(); // Initial fetch
    const intervalId = setInterval(fetchNewCandle, 2000); // Fetch new data every 2 seconds
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width:'100vh', height: '100vh', background: '#121212', color: '#fff' }}>
      
      {/* Candlestick Chart */}
      <div style={{ flexGrow: 1, padding: '20px' }}>
        <ReactApexChart
          options={{
            chart: {
              type: 'candlestick',
              height: '100%',
              animations: {
                enabled: true,
                easing: 'linear',
                speed: 800, // Smooth transition for new candles
              },
              background: '#121212',
            },
            xaxis: {
              type: 'datetime',
              range: data.length > 50 ? 50 * 2000 : undefined, // Show last 50 candles (2000ms interval)
              labels: { style: { colors: '#fff' } },
            },
            yaxis: {
              labels: { style: { colors: '#fff' } },
            },
          }}
          series={[
            {
              name: 'Candlestick',
              type: 'candlestick',
              data: data,
            },
            {
              name: 'SMA',
              type: 'line',
              data: smaData,
            },
          ]}
          type="candlestick"
          height={600}
        />
      </div>

      {/* Trading Stats Section */}
      <div style={{ textAlign: 'center', padding: '15px', background: '#1e1e1e', borderTop: '1px solid #333' }}>
        <h2 style={{ marginBottom: '10px', color: '#FFD700' }}>Trading Stats</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <div style={{ fontSize: '18px', color: '#ff4d4d' }}>Stop Loss: ${stopLoss}</div>
          <div style={{ fontSize: '18px', color: '#4caf50' }}>Target: ${target}</div>
        </div>
      </div>

      <TradingStrategy movingAverageLevel={movingAverageLevel} onDataUpdate={handleDataUpdate} />
    </div>
  );
};

export default Home;
