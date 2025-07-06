"use client"
import React from 'react'
import { Input } from './ui/input'
import { useState } from 'react'

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
     className="text-white font-semibold placeholder:text-gray-400 border border-gray-600 rounded-2xl"
     />
     <div className="mt-5">
     <button className="btn bg-gray-700 text-white btn-soft md:btn-md top-2">Get Quote</button>
     </div>
      </form>
    </div>
  )
}

export default QuoteForm
