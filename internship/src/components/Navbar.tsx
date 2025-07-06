'use client'

import { ZapIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {


  return (
    <header className="fixed bg-base-100 p-4 w-full shadow-md flex justify-start gap-2 items-center">
      <div className="p-2 rounded-full bg-primary animate-pulse">   
        <Link href="/" className="text-primary-content">
          <ZapIcon className="text-primary-content"/> 
        </Link>
      </div>
      <h1 className="text-3xl tracking-wider">
        <Link href="/" className="text-base-content">
          <span style={{ fontFamily: "Poppins,sans-serif" }} className="text-base-content">
            Quotify.io
          </span>
        </Link>
      </h1>

    </header>
  )
}

export default Navbar