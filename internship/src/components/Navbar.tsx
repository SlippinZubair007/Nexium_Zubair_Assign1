import { ZapIcon } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-black p-4 shadow-md flex justify-start gap-2 items-center">
      <div className="p-2 rounded-full bg-red-950 animate-pulse">
        <ZapIcon className="text-white" />
      </div>
      <h1 className="text-3xl tracking-wider ">
        <span style={{ fontFamily: "Poppins,sans-serif" }} className="text-white">
           Quotify.io
        </span>
      </h1>
    </header>
  )
}

export default Navbar
