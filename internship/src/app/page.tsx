"use client";
import React from "react";
import QuoteForm from "@/components/QuoteForm";
import QuoteList from "@/components/QuoteList";
import Superman from "@/components/superman";

const quotes = [
  { topic: "success", text: "Success is not final; failure is not fatal: It is the courage to continue that counts." },
  { topic: "success", text: "Don't be afraid to give up the good to go for the great." },
  { topic: "success", text: "I never dreamed about success. I worked for it." },
  { topic: "motivation", text: "Push yourself, because no one else is going to do it for you." },
  { topic: "motivation", text: "Great things never come from comfort zones." },
  { topic: "life", text: "Life is what happens when you’re busy making other plans." },
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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black text-foreground">
      <section className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-50 items-center">
            {/* Left: Text and form */}
            <div className="space-y-10">
              <h1 className="text-5xl font-bold tracking-tight text-blue-400">
                <span className="text-blue-600">Quotify</span>
                <span className="text-slate-300">.io</span>
              </h1>

              <div className="w-full bg-slate-800 text-card-foreground border border-border rounded-xl shadow-xl backdrop-blur-md p-8">
                <h2 className="text-3xl font-semibold text-center mb-6 tracking-wide text-primary-foreground">
                  AI Quote Generator
                </h2>
                <QuoteForm onSearch={handleSearch} />
                <div className="mt-8">
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
