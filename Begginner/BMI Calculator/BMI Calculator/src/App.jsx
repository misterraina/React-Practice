import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ThemeToggle from './components/ThemeToggle';
import InputForm from './components/InputForm';
import GaugeChart from './components/GaugeChart';
import Header from './components/Header';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [bmi, setBmi] = useState(null);
  const resultRef = useRef(null);

  const handleCalculate = (bmi) => {
    setBmi(bmi);
    resultRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="bg-light-bg text-gray-900 dark:bg-night-bg dark:text-gray-100 min-h-screen">
        <Header />
        <Routes>
          {/* Main BMI Calculator Route */}
          <Route 
            path="/" 
            element={
              <div className="p-6 flex flex-col items-center">

                <div className="max-w-4xl w-full flex flex-col md:flex-row mx-auto space-y-6 md:space-y-0 md:space-x-6">
                  {/* Input Form Section */}
                  <div id="calculator" className="w-full md:w-1/2 p-4">
                    <h1 className="text-2xl font-raleway font-bold mb-4">BMI Calculator</h1>
                    <InputForm setBmi={handleCalculate} />
                  </div>

                  {/* Gauge Chart Result Section */}
                  <div ref={resultRef} id="gagueResult" className={`w-full md:w-1/2 p-4 transition-all duration-500`}>
                    <div className="text-center mb-4">
                      <h2 className="text-2xl font-raleway font-bold">Result</h2>
                    </div>
                    <div className="mx-auto flex justify-center items-center">
                      <GaugeChart value={bmi} />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-xl font-raleway">
                        {bmi !== null ? `BMI: ${bmi}` : 'BMI not calculated yet'}
                      </h3>
                    </div>
                    <ul className="mt-4 space-y-4 list-disc pl-5 text-lg text-gray-700 dark:text-gray-500">
                      <li className="flex items-center">
                        <span className="w-3.5 h-3.5 inline-block mr-2 rounded-full bg-blue-500"></span>
                        Healthy BMI range: 18.5 kg/m² - 25 kg/m²
                      </li>
                      <li className="flex items-center">
                        <span className="w-3.5 h-3.5 inline-block mr-2 rounded-full bg-green-500"></span>
                        Healthy weight for the height: 59.9 kg - 81 kg
                      </li>
                      <li className="flex items-center">
                        <span className="w-3.5 h-3.5 inline-block mr-2 rounded-full bg-yellow-500"></span>
                        BMI Prime: 0.8
                      </li>
                      <li className="flex items-center">
                        <span className="w-3.5 h-3.5 inline-block mr-2 rounded-full bg-red-500"></span>
                        Ponderal Index: 11.1 kg/m³
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Blogs Section */}
                <div id="blogs" className="w-full mt-8">
                  <Blogs />
                </div>
              </div>
            } 
          />

          {/* Privacy Policy Route */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <ThemeToggle />
      </div>
    </Router>
  );
}

export default App;
