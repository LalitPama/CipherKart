'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
        <div className="flex flex-col items-end pt-12">
          <p className="text-2xl font-medium">About Us</p>
          <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
        </div>
        <div className="mt-8 pb-14 w-full max-w-4xl text-gray-700 leading-relaxed">
          <p>
            Welcome to our store! We are committed to offering the best quality products
            with a focus on customer satisfaction, fast delivery, and reliable service.
          </p>
          <p className="mt-4">
            Our team works hard to bring you the latest and greatest items from around the world. 
            Whether you're shopping for everyday needs or special gifts, we've got you covered.
          </p>
          <p className="mt-4">
            Thank you for choosing us — we truly appreciate your support!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
