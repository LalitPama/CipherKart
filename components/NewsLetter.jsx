'use client';
import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async () => {
    setStatus('');
    if (!email.includes('@')) {
      setStatus('Please enter a valid email.');
      return;
    }

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('Subscribed successfully!');
        setEmail('');
      } else {
        setStatus(data.error || 'Subscription failed.');
      }
    } catch (err) {
      setStatus('Something went wrong.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14">
      <h1 className="md:text-4xl text-2xl font-medium">
        Subscribe to Our Newsletter
      </h1>
      <p className="md:text-base text-gray-500/80 pb-8">
        Get the latest updates, deals, and product launches directly in your inbox.
      </p>
      <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
        <input
          className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="text"
          placeholder="Enter your email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscribe}
          className="md:px-12 px-8 h-full text-white bg-orange-600 rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </div>
      {status && <p className="text-sm mt-3 text-orange-600">{status}</p>}
    </div>
  );
};

export default NewsLetter;
