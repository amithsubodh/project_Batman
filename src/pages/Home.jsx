import React from 'react'
import FoodCard from '../components/FoodCard'
import Category from '../components/Category'
import AIcard from '../components/AIcard'

const Home = () => {
  return (
    <>
    <div style={{ backgroundColor: '#fef9ef' }} className="min-h-screen">
  {/* Header */}
  <div>
      <p className="text-center pt-20 text-6xl">Find Your Recipes</p>
      <p className="text-center text-3xl pt-12">Discover your recieps</p>
    </div>
    <div className="flex items-center justify-center pt-20">
  <input 
    placeholder="search for recipe" 
    className="border-2 px-4 py-3 text-left border-orange-300 bg-white rounded-3xl w-96"
  />
  <button className="px-10 py-3 border-2 ml-10  rounded-3xl bg-green-700 text-white"><img></img>AI Generate</button>
</div>
{/* Food recieps cards */}
<FoodCard></FoodCard>
      <div>
        <p className="text-center text-3xl">Browse By Category</p>
        <Category></Category>
        <AIcard></AIcard>
      </div>
</div>

    </>
    )
}

export default Home