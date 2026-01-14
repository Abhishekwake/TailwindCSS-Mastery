'use client'
import React from 'react'
const cn = (...classes: string[]) => classes.join(" ");
const Temp = () => {
 return (
   <div
     className={cn(
       "w-full rounded-2xl bg-neutral-200 min-h-100",
       "bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]",
       "[background-size:10px_10px]",
       "p-8 flex flex-col justify-center items-center group"
     )}
   >
     <h2
       className={cn(
         "font-bold text-2xl mt-8 mb-2 tracking-tight",
         "text-black text-shadow-sm"
       )}
     >
       Easily modify scale with tailwind
     </h2>

     <p className={cn(
         "text-sm max-w-sm mx-auto text-center  mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-600 ",
         "text-black "
       )}> 
       Hover over the image below to see a smooth 3D transformation effect. The
       card rotates and scales using CSS transforms and Tailwins built-in
       classes .
     </p>

     <div
       className={cn(
         "size-60 bg-neutral-200 rounded-lg border border-neutral-300 group-hover:bg-neutral-300 transition-all duration-300 group-hover:border-neutral-300",
         "bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]",
         "[background-size:10px_10px] ",
         "shadow-2xl relative perspective-distant transform-3d",
         "group/lethal"
       )}
     >
       <img
         src="https://images.unsplash.com/photo-1750535135451-7c20e24b60c1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         alt=""
         className={cn(
           "transition-transform duration-200 ease-in-out",
           "h-full w-full object-cover rounded-2xl",
           "transform rotate-x-23 rotate-z-20 -rotate-y-20 translate-z-20",
           "group-hover:rotate-x-0 group-hover:rotate-z-0 group-hover:rotate-y-0 group-hover:scale-85"
         )}
       />
     </div>
   </div>
 );
}

export default Temp
