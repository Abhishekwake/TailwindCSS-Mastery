"use client";
import React from 'react'
const form = () => {
const cn = (...classes: string[]) => classes.join(" ");

  return (
    <form className='h-full w-full bg-gray-200 px-8 py-14'>
      <h1 className='text-4xl text-center font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-600'>
        This is a{" "}
        <span className={cn(
          "inline-block relative z-10 text-white",
          "after:content-[''] after:-z-10 after:absolute after:inset-0 after:w-full after:h-full after:bg-red-500", 
          ""
        )}> 
          crazy</span>
        {" "} good form.
      </h1>

      <div className='my-12 flex flex-col gap-8 max-w-sm mx-auto'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email'>Email</label> 
              <input
              name='email' 
              type="text" 
              placeholder='Enter Your Email' 
              className={cn(
              'w-full rounded-md border-1 border-gray-200 py-2 px-4',
              'focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 focus:border-transparent bg-white',
              'shadow-input rounded-md'
            
              )} 
              />
          </div>
          <div>
            <label>Password</label>
          </div>
        </div>
    </form>
  )
}

export default form
