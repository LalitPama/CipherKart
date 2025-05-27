// app/search/SearchResults.jsx or components/SearchResults.jsx
'use client'

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";

const SearchResults = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;
      try {
        const res = await fetch(`/api/search?q=${query}`);
        const data = await res.json();
        setFilteredProducts(data);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  if (loading) return <p className="mt-10">Loading...</p>;

  return (
    <>
      {filteredProducts.length === 0 ? (
        <p className="mt-10">
          No products found for "<span className="font-semibold">{query}</span>"
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12 pb-14 w-full">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchResults;
