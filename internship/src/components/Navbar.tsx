
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="bg-gray-950 p-4 shadow-md flex justify-between items-center">
       <div>
        <h1 className="text-white text-4xl  font-stretch-200%">
          <span style={{fontFamily:"Michroma,sans-serif"}} className="text-blue-600">Quotify</span>.io
        </h1>
       </div>
      </header>
    </div>
  )
}

export default Navbar
