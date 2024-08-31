import React, { useState } from 'react'

function InputForm({setBmi}) {
  
  const calculateBmi = function(){
      if(height && weight){
      const bmi = weight/(height/100)**2
      setBmi(bmi.toFixed(2))
      console.log(`Your BMI is ${bmi.toFixed(2)}`);
    } else {
      console.log("Please enter both height and weight");
    }
  }

  const [height, setHeight] = useState('')
  const [gender, setGender] = useState('')
  const [weight, setWeight] = useState('')
  const [age, setAge] = useState('')

  return (
    <div className='InputForm font-raleway font-regular bg-gray-100 dark:bg-customPurple p-6 rounded-lg shadow-md max-w-md mx-auto mt-10'>

      <div className="ageInput mb-4">
        <label htmlFor="age" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Age</label>
        <input
          name="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-customPurple rounded-lg bg-white dark:bg-lightPurple text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-buttonColor"
        />
      </div>

      <div className="genderChoose mb-4">
        <span className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Gender</span>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="huey"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
              className="appearance-none h-4 w-4 border border-gray-300 rounded-full checked:bg-buttonHover checked:border-[#1a1625] focus:outline-none transition-all duration-200 align-middle mr-2"
            />
            <label htmlFor="huey" className="text-gray-700 dark:text-gray-200">Male</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="dewey"
              name="gender"
              value="female"
              checked={gender==='female'}
              onChange={(e) => setGender(e.target.value)}
              className="appearance-none h-4 w-4 border border-gray-300 rounded-full checked:bg-buttonHover checked:border-[#1a1625] focus:outline-none transition-all duration-200 align-middle mr-2"
            />
            <label htmlFor="dewey" className="text-gray-700 dark:text-gray-200">Female</label>
          </div>
        </div>
      </div>

      <div className="heightInput mb-4">
        <label htmlFor="height" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Height (cm)</label>
        <input
          name="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-customPurple rounded-lg bg-white dark:bg-lightPurple text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-buttonColor"
        />
      </div>

      <div className="weightInput mb-4">
        <label htmlFor="weight" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Weight (kg)</label>
        <input
          name="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-customPurple rounded-lg bg-white dark:bg-lightPurple text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-buttonColor"
        />
      </div>

      <button
        className="w-full bg-buttonColor text-white font-semibold py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-buttonHover transition duration-300"
      onClick={calculateBmi}
      >
        Calculate
      </button>
    </div>
  )
}

export default InputForm;
