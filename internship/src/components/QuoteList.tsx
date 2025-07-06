import React from 'react'
type QuoteListProps = {
    quotes:string[];
}

const QuoteList = ({quotes}:QuoteListProps) => {
    if(quotes.length===0){
        return <p className="text-gray-300">No quotes available. Please search for another topic.</p>
    }

  return (
    <ul className="space-y-2 mt-4">
        {quotes.map((quote, idx) => (
         <li key={idx} className="p-4 text-gray-300 bg-gray-900 rounded-md shadow-sm">
            <p className="text-white-500">{quote}</p>  
            </li>  
        ))}
    </ul>
  );
}

export default QuoteList
