'use client'
import React from 'react'
const cn = (...classes: string[]) => classes.join(" ");
const Temp = () => {
 return (
 <div 
  className={cn
  ("w-full rounded-2xl bg-neutral-200 min-h-100" , 
    "bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]",
    "[background-size:10px_10px]",
    "p-8 flex justify-center items-center"
  )}
  >
    <div className={cn(
        "size-60 bg-neutral-200 rounded-lg border border-neutral-300",
        "bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]",
        "[background-size:10px_10px] ",
        "shadow-2xl relative"
    )}
    >
       <img 
       src="https://images.unsplash.com/photo-1750535135451-7c20e24b60c1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
       alt=""
       className='h-full w-full object-cover' />
    </div>
  </div>
 );
}

export default Temp
