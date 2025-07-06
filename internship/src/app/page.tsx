"use client";
import React from "react";
import QuoteForm from "@/components/QuoteForm";
import QuoteList from "@/components/QuoteList";
import Superman from "@/components/superman";

const quotes = [
  // Success
  { topic: "success", text: "Success is not final; failure is not fatal: It is the courage to continue that counts." },
  { topic: "success", text: "Don't be afraid to give up the good to go for the great." },
  { topic: "success", text: "I never dreamed about success. I worked for it." },
  { topic: "success", text: "Success usually comes to those who are too busy to be looking for it." },
  { topic: "success", text: "The road to success and the road to failure are almost exactly the same." },

  // Motivation
  { topic: "motivation", text: "Push yourself, because no one else is going to do it for you." },
  { topic: "motivation", text: "Great things never come from comfort zones." },
  { topic: "motivation", text: "Wake up with determination. Go to bed with satisfaction." },
  { topic: "motivation", text: "Don’t limit your challenges. Challenge your limits." },
  { topic: "motivation", text: "Dream it. Wish it. Do it." },

  // Life
  { topic: "life", text: "Life is what happens when you’re busy making other plans." },
  { topic: "life", text: "In the end, we only regret the chances we didn’t take." },
  { topic: "life", text: "Difficult roads often lead to beautiful destinations." },
  { topic: "life", text: "Life isn’t about finding yourself. It’s about creating yourself." },
  { topic: "life", text: "The purpose of our lives is to be happy." },

  // Perseverance
  { topic: "perseverance", text: "Perseverance is not a long race; it is many short races one after the other." },
  { topic: "perseverance", text: "It does not matter how slowly you go as long as you do not stop." },
  { topic: "perseverance", text: "Through perseverance, many people win success out of what seemed destined to be certain failure." },

  // Failure
  { topic: "failure", text: "Failure is simply the opportunity to begin again, this time more intelligently." },
  { topic: "failure", text: "Only those who dare to fail greatly can ever achieve greatly." },
  { topic: "failure", text: "Every failure is a step to success." },

  // Dreams
  { topic: "dreams", text: "All our dreams can come true, if we have the courage to pursue them." },
  { topic: "dreams", text: "The future belongs to those who believe in the beauty of their dreams." },
  { topic: "dreams", text: "Dream big and dare to fail." }
];


const Page = () => {
  const [filteredQuotes, setFilteredQuotes] = React.useState<string[]>([]);

  const handleSearch = (topic: string) => {
    const result = quotes
      .filter((q) => q.topic === topic)
      .slice(0, 3)
      .map((q) => q.text);
    setFilteredQuotes(result);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#000000] via-[#220a0a] to-black text-foreground">
      <section className="flex-grow py-10">
        <div className="relative container -top-25 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-50 items-center">

            
            {/* Left: Text and form */}
            <div className="space-y-10">

            {/* Text */}
            <div className="pt-30 flex">
           
              <h1 className="text-4xl font-semibold text-white">
                <span style={{fontFamily:"Michroma,sans-serif"}} className="animate-pulse text-8xl">Future</span>
                <span style={{fontFamily:"Michroma,sans-serif"}} className="text-gray-600"> Is in your Hands</span>
              </h1>
              </div>

               {/* Decorative border */}
              <div className="w-180 top-5 h-1 bg-gray-800 mr-4 rounded-full" />

              <div className="w-full bg-black-800 text-card border border-gray-700 rounded-3xl shadow-xl backdrop-blur-md p-8">
                <h2 className="text-3xl font-semibold text-center mb-6 tracking-wide text-white">
                  Quote Generator
                </h2>
                <QuoteForm onSearch={handleSearch} />
                <div className="mt-8 ">
                  <QuoteList quotes={filteredQuotes} />
                </div>
              </div>
            </div>

            {/* Right: Superman image */}
            <div className="flex justify-center items-center">
              <Superman />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
