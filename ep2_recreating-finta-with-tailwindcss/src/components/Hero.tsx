import React from 'react'

const Hero = () => {
  return (
    <div className='px-4 py-2 flex flex-col items-center width-full my-20'>
    <div className='border rounded-full px-4 py-1 border-neutral-200 bg-[#eef2f6] hover:bg-gray-200 transition duration-200 cursor-pointer text-neutral-800 font-medium'>We re hiring Founding Ruby Engineers</div>
    <div>
        <h1 className='font-medium text-7xl text-center mt-15 tracking-tight'>Magically simplify <br />accounting and taxes</h1>
        <p className='text-2xl text-neutral-700 text-center max-w-2xl mx-auto mt-5'>Automated bookkeeping. Effortless tax filing. Financial clarity. Set up in 10 mins. Back to building by 6:11pm.</p>
    </div>
    <div className="flex items-center gap-4 mt-10">
    <button className="bg-blue-500 py-2 px-4 text-white rounded-xl font-medium shadow-lg text-shadow-md tracking-wide cursor-pointer">Get Started</button>
    <button className="bg-transparent  py-2 px-4 text-black hover:bg-gray-200 transition duration-200 rounded-xl font-medium tracking-wide cursor-pointer">Pricing</button>
    </div>
    
    </div>
  )
}

export default Hero
