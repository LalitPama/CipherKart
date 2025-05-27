'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
        <div className="flex flex-col items-end pt-12">
          <p className="text-2xl font-medium">Contact Us</p>
          <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
        </div>
        <div className="mt-8 pb-14 w-full max-w-4xl text-gray-700 leading-relaxed">
          <p>If you have any questions or need help, feel free to reach out:</p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Email: <a href="mailto:support@CipherKart.com" className="text-blue-600">support@cipherkart.com</a></li>
            <li>Phone: +91 12345 67890</li>
            <li>Office Hours: Mon - Fri, 10 AM - 6 PM</li>
          </ul>
          <p className="mt-6">
            We’ll get back to you as soon as possible. Your satisfaction is our priority.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
