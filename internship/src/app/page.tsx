"use client";
import React, { useState, useMemo } from "react";
import QuoteForm from "@/components/QuoteForm";
import QuoteList from "@/components/QuoteList";
import Superman from "@/components/superman";

// Move quotes to a separate constant for better organization
const QUOTES_DATA = [
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
  { topic: "motivation", text: "Don't limit your challenges. Challenge your limits." },
  { topic: "motivation", text: "Dream it. Wish it. Do it." },

  // Life
  { topic: "life", text: "Life is what happens when you're busy making other plans." },
  { topic: "life", text: "In the end, we only regret the chances we didn't take." },
  { topic: "life", text: "Difficult roads often lead to beautiful destinations." },
  { topic: "life", text: "Life isn't about finding yourself. It's about creating yourself." },
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
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  // Use useMemo to optimize quote filtering
  const filteredQuotes = useMemo(() => {
    if (!selectedTopic) return [];
    return QUOTES_DATA
      .filter((q) => q.topic === selectedTopic)
      .slice(0, 3)
      .map((q) => q.text);
  }, [selectedTopic]);

  const handleSearch = (topic: string) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-300 via-base-200 to-base-100">
      <main className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left: Hero text and form */}
          <div className="space-y-8 order-2 lg:order-1">
            
            {/* Hero Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span 
                  style={{ fontFamily: "Michroma, sans-serif" }} 
                  className="block text-primary animate-pulse"
                >
                  Future
                </span>
                <span 
                  style={{ fontFamily: "Michroma, sans-serif" }} 
                  className="block text-base-content/70 text-3xl md:text-4xl lg:text-5xl mt-2"
                >
                  Is in your Hands
                </span>
              </h1>
              
              {/* Decorative divider */}
              <div className="w-32 h-1 bg-primary/60 rounded-full mx-auto lg:mx-0 mt-6" />
            </div>

            {/* Quote Generator Card */}
            <div className="card bg-base-100 shadow-2xl border border-base-300/50 backdrop-blur-sm">
              <div className="card-body p-6 md:p-8">
                <h2 className="card-title text-2xl md:text-3xl font-semibold justify-center mb-6 text-base-content">
                  Quote Generator
                </h2>
                
                <QuoteForm onSearch={handleSearch} />
                
                {filteredQuotes.length > 0 && (
                  <div className="mt-8 space-y-4">
                    <div className="divider text-base-content/60">Generated Quotes</div>
                    <QuoteList quotes={filteredQuotes} />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Superman illustration */}
          <div className="flex justify-center items-center order-2 lg:order-2">
            <div className="w-full max-w-md lg:max-w-lg">
              <Superman />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;