import React from "react";
import img from "../assets/images/natalie-kovach-ph7QQq63lCs-unsplash.jpg";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Contactus = () => {
  return (
    <div
      className="h-[100vh] relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0"></div>

      {/* Foreground content */}
      <div className="relative z-10 w-[98%] md:w-[70%] flex flex-col md:flex-row rounded-lg overflow-hidden shadow-xl bg-white bg-opacity-90 backdrop-blur-lg">
        {/* Image Section */}
        <div className="hidden md:block w-[40%]">
          <img src={img} alt="contact" className="h-full w-full object-cover" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-[60%] p-6 md:p-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">24/7 support. Send us a message.</p>

          <form className="space-y-5">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 bg-gray-100 p-3 rounded-md outline-none focus:ring-2 ring-primary transition"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 bg-gray-100 p-3 rounded-md outline-none focus:ring-2 ring-primary transition"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-100 p-3 rounded-md outline-none focus:ring-2 ring-primary transition"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-gray-100 p-3 rounded-md outline-none focus:ring-2 ring-primary transition"
            />

            <textarea
              placeholder="Enter a message"
              className="w-full bg-gray-100 p-3 h-28 rounded-md outline-none focus:ring-2 ring-primary transition"
            ></textarea>
            <div className="flex w-[100%] flex-col">
              <button className="ml-auto px-12 bg-secondprimary p-2 text-white hover:shadow-none transition-all rounded-md text-lg shadow-md shadow-black cursor-pointer">
                Submit
              </button>
            </div>
            <div className="mt-6 space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-primary" /> Email us at:{" "}
                <a
                  href="mailto:support@homeparadis.com"
                  className="underline text-primary"
                >
                  support@homeparadis.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-primary" /> Call us:{" "}
                <span className="text-primary font-medium">
                  +1 (800) 123-4567
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
