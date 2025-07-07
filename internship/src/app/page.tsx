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

  // Get unique topics from quotes data
  const availableTopics = useMemo(() => {
    const topics = [...new Set(QUOTES_DATA.map(q => q.topic))];
    return topics.map(topic => ({
      name: topic,
      displayName: topic.charAt(0).toUpperCase() + topic.slice(1),
      count: QUOTES_DATA.filter(q => q.topic === topic).length
    }));
  }, []);

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

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-zinc-950 to-red-950 overflow-hidden relative">
      
      {/* Desktop Only - Futuristic Floating Topic Boxes */}
      <div className="hidden xl:block fixed inset-0 pointer-events-none z-10">
        {/* Success Box */}
        <div 
          className="absolute top-[15%] right-[8%] pointer-events-auto cursor-pointer group"
          onClick={() => handleTopicClick('success')}
        >
          <div className={`
            relative px-6 py-4 rounded-2xl backdrop-blur-md border transition-all duration-500 transform hover:scale-110 hover:rotate-1
            ${selectedTopic === 'success' 
              ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400/60 shadow-2xl shadow-emerald-500/30' 
              : 'bg-gradient-to-r from-slate-800/30 to-slate-700/30 border-slate-400/40 hover:border-emerald-400/60'
            }
          `}>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="text-lg font-bold text-white mb-1" style={{ fontFamily: "Michroma, sans-serif" }}>
                SUCCESS
              </div>
              <div className="text-xs text-emerald-300 font-semibold">
                {QUOTES_DATA.filter(q => q.topic === 'success').length} quotes
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Motivation Box */}
        <div 
          className="absolute top-[35%] right-[12%] pointer-events-auto cursor-pointer group"
          onClick={() => handleTopicClick('motivation')}
        >
          <div className={`
            relative px-6 py-4 rounded-2xl backdrop-blur-md border transition-all duration-500 transform hover:scale-110 hover:-rotate-1
            ${selectedTopic === 'motivation' 
              ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/60 shadow-2xl shadow-purple-500/30' 
              : 'bg-gradient-to-r from-slate-800/30 to-slate-700/30 border-slate-400/40 hover:border-purple-400/60'
            }
          `}>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="text-lg font-bold text-white mb-1" style={{ fontFamily: "Michroma, sans-serif" }}>
                MOTIVATION
              </div>
              <div className="text-xs text-purple-300 font-semibold">
                {QUOTES_DATA.filter(q => q.topic === 'motivation').length} quotes
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Life Box */}
        <div 
          className="absolute top-[55%] right-[6%] pointer-events-auto cursor-pointer group"
          onClick={() => handleTopicClick('life')}
        >
          <div className={`
            relative px-6 py-4 rounded-2xl backdrop-blur-md border transition-all duration-500 transform hover:scale-110 hover:rotate-2
            ${selectedTopic === 'life' 
              ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/60 shadow-2xl shadow-blue-500/30' 
              : 'bg-gradient-to-r from-slate-800/30 to-slate-700/30 border-slate-400/40 hover:border-blue-400/60'
            }
          `}>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="text-lg font-bold text-white mb-1" style={{ fontFamily: "Michroma, sans-serif" }}>
                LIFE
              </div>
              <div className="text-xs text-blue-300 font-semibold">
                {QUOTES_DATA.filter(q => q.topic === 'life').length} quotes
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Perseverance Box */}
        <div 
          className="absolute top-[25%] right-[25%] pointer-events-auto cursor-pointer group"
          onClick={() => handleTopicClick('perseverance')}
        >
          <div className={`
            relative px-6 py-4 rounded-2xl backdrop-blur-md border transition-all duration-500 transform hover:scale-110 hover:-rotate-2
            ${selectedTopic === 'perseverance' 
              ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-400/60 shadow-2xl shadow-orange-500/30' 
              : 'bg-gradient-to-r from-slate-800/30 to-slate-700/30 border-slate-400/40 hover:border-orange-400/60'
            }
          `}>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="text-lg font-bold text-white mb-1" style={{ fontFamily: "Michroma, sans-serif" }}>
                PERSEVERANCE
              </div>
              <div className="text-xs text-orange-300 font-semibold">
                {QUOTES_DATA.filter(q => q.topic === 'perseverance').length} quotes
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Failure Box */}
        <div 
          className="absolute top-[75%] right-[15%] pointer-events-auto cursor-pointer group"
          onClick={() => handleTopicClick('failure')}
        >
          <div className={`
            relative px-6 py-4 rounded-2xl backdrop-blur-md border transition-all duration-500 transform hover:scale-110 hover:rotate-1
            ${selectedTopic === 'failure' 
              ? 'bg-gradient-to-r from-red-500/20 to-pink-500/20 border-red-400/60 shadow-2xl shadow-red-500/30' 
              : 'bg-gradient-to-r from-slate-800/30 to-slate-700/30 border-slate-400/40 hover:border-red-400/60'
            }
          `}>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="text-lg font-bold text-white mb-1" style={{ fontFamily: "Michroma, sans-serif" }}>
                FAILURE
              </div>
              <div className="text-xs text-red-300 font-semibold">
                {QUOTES_DATA.filter(q => q.topic === 'failure').length} quotes
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Dreams Box */}
        <div 
          className="absolute top-[45%] right-[28%] pointer-events-auto cursor-pointer group"
          onClick={() => handleTopicClick('dreams')}
        >
          <div className={`
            relative px-6 py-4 rounded-2xl backdrop-blur-md border transition-all duration-500 transform hover:scale-110 hover:-rotate-1
            ${selectedTopic === 'dreams' 
              ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-indigo-400/60 shadow-2xl shadow-indigo-500/30' 
              : 'bg-gradient-to-r from-slate-800/30 to-slate-700/30 border-slate-400/40 hover:border-indigo-400/60'
            }
          `}>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="text-lg font-bold text-white mb-1" style={{ fontFamily: "Michroma, sans-serif" }}>
                DREAMS
              </div>
              <div className="text-xs text-indigo-300 font-semibold">
                {QUOTES_DATA.filter(q => q.topic === 'dreams').length} quotes
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-2 lg:py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left: Hero text and form */}
          <div className="space-y-8 order-2 lg:order-1">
            
            {/* Hero Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span 
                  style={{ fontFamily: "Michroma, sans-serif" }} 
                  className="block text-white animate-pulse"
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
            <div className="card bg-gray-900 shadow-2xl border border-base-300/50 backdrop-blur-sm">
              <div className="card-body p-6 md:p-8">
                <h2 className="card-title text-2xl md:text-3xl font-semibold justify-center mb-6 text-base-content">
                  Quote Generator
                </h2>
                
                <QuoteForm onSearch={handleSearch} />
                
                {selectedTopic && (
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/60 rounded-full backdrop-blur-sm">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                      <span className="text-sm font-bold text-white" style={{ fontFamily: "Michroma, sans-serif" }}>
                        {selectedTopic.toUpperCase()}
                      </span>
                    </div>
                  </div>
                )}
                
               {filteredQuotes.length > 0 && (
                  <div className="mt-8 space-y-4">
                    <div className="divider text-base-content/60">Generated Quotes</div>
                    <QuoteList quotes={filteredQuotes} />
                  </div>
                )}
                 {filteredQuotes.length === 0 && (
                  <div className="mt-8 space-y-4">
                    <div className="divider text-base-content/60">Select Quotes from available topics</div>
                  </div>
                )}
              </div>
            </div>

          {/* STATS */}
              <div className="flex items-center gap-10 py-6 font-mono">
                <div className="flex flex-col">
                  <div className="text-2xl text-primary">500+</div>
                  <div className="text-xs uppercase tracking-wider">ACTIVE USERS</div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-gray-500 via-gray-500 to-gray-500"></div>
                <div className="flex flex-col">
                  <div className="text-2xl text-primary">20+</div>
                  <div className="text-xs uppercase tracking-wider">QUOTES</div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-gray-500 via-gray-500 to-gray-500"></div>
                <div className="flex flex-col">
                  <div className="text-2xl text-primary">100%</div>
                  <div className="text-xs uppercase tracking-wider">SATISFACTION</div>
                </div>
              </div>
          </div>

          {/* Right: Superman illustration */}
          <div className="flex justify-end items-center order-2 lg:order-2">
            <div className="w-full max-w-md lg:max-w-lg">
              <Superman />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Topic Selection - Clean organized section AFTER main content */}
        <div className="xl:hidden mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "Michroma, sans-serif" }}>
              CHOOSE YOUR TOPIC
            </h3>
            <div className="w-24 h-1 bg-primary/60 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableTopics.map((topic) => (
              <div 
                key={topic.name}
                className="cursor-pointer group"
                onClick={() => handleTopicClick(topic.name)}
              >
                <div className={`
                  relative p-6 rounded-2xl backdrop-blur-md border transition-all duration-500 transform hover:scale-105 hover:rotate-1
                  ${selectedTopic === topic.name 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/60 shadow-2xl shadow-cyan-500/30' 
                    : 'bg-gradient-to-r from-slate-800/30 to-slate-700/30 border-slate-400/40 hover:border-cyan-400/60'
                  }
                `}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 text-center">
                    <div className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Michroma, sans-serif" }}>
                      {topic.displayName.toUpperCase()}
                    </div>
                    <div className="text-sm text-cyan-300 font-semibold">
                      {topic.count} quotes available
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;