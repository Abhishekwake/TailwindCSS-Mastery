import React from 'react'
import {cn} from "@/lib/utils";
const Container = ({children,className} : {
    children : React.ReactNode,
    className? : string 
}) => {
  return (
    <div className={cn("max-w-5xl mx-auto px-4",className)}>
      {children}
    </div>
  )
}

export default Container
//max-w-4xl   restricted content chaiye
//  mx-auto left ya right m nhi hona chaiya 
// px-4 md:py-8
