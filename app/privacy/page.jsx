import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address, and browsing behavior when you register on our site, subscribe to our newsletter, or make a purchase.
        </p>

        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-4">
          The information we collect is used to improve your experience, process transactions, send promotional emails (with your consent), and enhance our services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to analyze site traffic and personalize content. You can control cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="mb-4">
          We implement reasonable security measures to protect your information from unauthorized access or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
        <p className="mb-4">
          We may share your data with trusted third-party service providers who help operate our website and deliver services, but only under strict confidentiality agreements.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
        </p>

        <p>If you have any questions about this policy, please contact us at contact@greatstack.dev.</p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
