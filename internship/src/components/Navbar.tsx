import { ZapIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'




const Navbar = () => {
  return (
    <header className="bg-black p-4 shadow-md flex justify-start gap-2 items-center">
      <div className="p-2 rounded-full bg-red-950 animate-pulse">   
        <Link href="/" className="text-white">
        <ZapIcon className="text-white"/> 
        </Link>
      </div>
      <h1 className="text-3xl tracking-wider ">
        

        <Link href="/" className="text-white">
        <span style={{ fontFamily: "Poppins,sans-serif" }} className="text-white">
          Quotify.io
        </span>
         </Link>
      </h1>
    
   </header>
  )
}

export default Navbar
