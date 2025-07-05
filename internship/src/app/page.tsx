"use client"
import React from 'react'
import QuoteForm from '@/components/QuoteForm'
import QuoteList from '@/components/QuoteList';

const quotes = [
  { topic: "success", text: "Success is not final; failure is not fatal: It is the courage to continue that counts." },
  { topic: "success", text: "Don't be afraid to give up the good to go for the great." },
  { topic: "success", text: "I never dreamed about success. I worked for it." },
  { topic: "motivation", text: "Push yourself, because no one else is going to do it for you." },
  { topic: "motivation", text: "Great things never come from comfort zones." },
  { topic: "life", text: "Life is what happens when you’re busy making other plans." },
  // Add more topics and quotes...
];

const page = () => {
  const [filteredQuotes, setFilteredQuotes] = React.useState<string[]>([]);
  const handleSearch= (topic: string) => {
     const result=quotes
     .filter((q)=>q.topic===topic)
     .slice(0, 1) // Limit to 5 quotes
     .map((q)=>q.text);
     setFilteredQuotes(result); 
  }
  return (
 <main className="flex flex-col min-h-screen justify-between items-between px-6 py-12 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black text-foreground">
  <section>
  <div className="w-full max-w-xl bg-slate-800 text-card-foreground border border-border rounded-xl shadow-xl backdrop-blur-md p-8">
    <h1 className="text-3xl font-semibold text-center mb-6 tracking-wide text-primary-foreground">
      AI Quote Generator
    </h1>
    <QuoteForm onSearch={handleSearch} />
    <div className="mt-8">
      <QuoteList quotes={filteredQuotes} />
    </div>
  </div>
  </section>
</main>
  )
}

export default page
