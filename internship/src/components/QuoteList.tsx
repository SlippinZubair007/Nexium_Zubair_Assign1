import React from 'react'



type QuoteListProps = {
    quotes:string[];
}

const QuoteList = ({quotes}:QuoteListProps) => {
    if(quotes.length===0){
        return <p>No quotes available. Please search for another topic.</p>
    }

  return (
    <ul className="space-y-2 mt-4">
        {quotes.map((quote, idx) => (
         <li key={idx} className="p-4 bg-gray-100 rounded-md shadow-sm">
            <p className="text-gray-700">{quote}</p>  
            </li>  
        ))}
    </ul>
  );
}

export default QuoteList
