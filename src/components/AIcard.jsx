import React from 'react'

const AIcard = () => {
  return (
    <section className="w-full bg-gradient-to-r from-orange-400 to-red-500 py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Text Section */}
      <div className="max-w-xl text-white ml-10 space-y-6">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Create Custom Recipes with AI
        </h1>
        <p className="text-lg">
          Input your available ingredients and let our AI create perfect recipes
          tailored just for you.
        </p>
        <button className="bg-white text-orange-500 px-6 py-3 rounded-full shadow hover:bg-orange-100 transition">
          Try AI Recipe Generator
        </button>
      </div>

      {/* Image Section */}
      <div className="relative">
        <img
          src="/div.png" // replace with your image path
          alt="AI Generator Demo"
          className="w-full max-w-md rounded-2xl  "
        />
        {/* Example decorative circle overlays */}
        <div className="absolute top-[-20px] left-[-30px] w-24 h-24 bg-orange-300 opacity-30 rounded-full mix-blend-overlay"></div>
        <div className="absolute bottom-[-20px] right-[-30px] w-36 h-36 bg-teal-300 opacity-30 rounded-full mix-blend-overlay"></div>
      </div>
    </section>

  )
}

export default AIcard