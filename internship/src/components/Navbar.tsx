'use client'

import { ZapIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Get theme from localStorage or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'synthwave' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <header className="bg-base-100 p-4 shadow-md flex justify-start gap-2 items-center">
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

      <div className="flex justify-end items-center gap-2 ml-auto">
        <input 
          type="checkbox" 
          className="toggle theme-controller" 
          checked={theme === 'synthwave'}
          onChange={toggleTheme}
        />
      </div>
    </header>
  )
}

export default Navbar