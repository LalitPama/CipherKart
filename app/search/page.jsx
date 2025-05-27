// app/search/page.jsx
import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchResults from "@/components/SearchResults"; // or "@/components/SearchResults" if stored elsewhere

const SearchPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
        <div className="flex flex-col items-end pt-12">
          <p className="text-2xl font-medium">Search Results</p>
          <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
        </div>

        <Suspense fallback={<p className="mt-10">Loading search results...</p>}>
          <SearchResults />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
