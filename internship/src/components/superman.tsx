import React from 'react'
import Image from 'next/image'
const Superman = () => {
  return (
    <div>
      <Image
      src="/superman.png"
      alt="Superman"
      width={500}
      height={100}
      className="rounded-md shadow-lg"
      />
    </div>
  )
}

export default Superman
