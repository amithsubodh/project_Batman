import React from 'react'

const FoodCard = () => {
  return (
    <div className="flex flex-row gap-8 justify-center my-18">
<div className="bg-white rounded-2xl shadow-md overflow-hidden w-80">
      <img
        src="/chickenBiryani.jpg" // Place your image in `public/assets`
        alt="Italian Pasta"
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Chicken Biryani</h2>
        <p className="text-gray-500 mt-1">60 mins • Medium</p>
      </div>
    </div>
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-80">
      <img
        src="/pasta.png" // Place your image in `public/assets`
        alt="Italian Pasta"
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Italian Pasta</h2>
        <p className="text-gray-500 mt-1">30 mins • Easy</p>
      </div>
    </div>
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-80">
      <img
        src="/cake.png" // Place your image in `public/assets`
        alt="Italian Pasta"
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Chocalate Cake</h2>
        <p className="text-gray-500 mt-1">45 mins • Advanced</p>
      </div>
    </div>
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-80">
      <img
        src="/butter.jpg" // Place your image in `public/assets`
        alt="Italian Pasta"
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Butter Chicken</h2>
        <p className="text-gray-500 mt-1">80 mins • Advanced</p>
      </div>
    </div>

    </div>
  )
}

export default FoodCard