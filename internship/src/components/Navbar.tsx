'use client'

import { ZapIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {

{/* Navbar that is a constant */}
  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-black backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex flex-wrap items-center justify-start gap-2 p-4">  
        <Link href="/" className="text-primary-content">
          <ZapIcon className="text-primary-content"/> 
        </Link>
      <h1 className="text-3xl tracking-wider">
        <Link href="/" className="text-base-content">
          <span style={{ fontFamily: "Poppins,sans-serif" }} className="text-base-content">
            Quotify.io
          </span>
        </Link>
      </h1>
       </div>

    </header>
  )
}
export default Navbar