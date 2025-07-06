"use client"
import React from 'react'
import { Input } from './ui/input'
import { useState } from 'react'
import { Button } from './ui/button'

type Props={
    onSearch:(topic:string)=>void
}

const QuoteForm = ({onSearch}:Props) => {

  const [topic,setTopic] = useState<string>("")
  return (
    <div >
    <form
    onSubmit={(e)=>{
        e.preventDefault();
        onSearch(topic.trim().toLowerCase());
    }}
    >
     <Input
     placeholder="Enter a topic (e.g motivation, success, etc.)"
     value={topic}
     onChange={(e)=>setTopic(e.target.value)}
     className="text-white font-semibold placeholder:text-gray-400 border border-gray-600"
     />
     <Button className="mt-5 bg-red-950 text-gray-100 " type="submit">Get Quote</Button>
      </form>
    </div>
  )
}

export default QuoteForm
