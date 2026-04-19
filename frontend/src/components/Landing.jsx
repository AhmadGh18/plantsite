import React from "react";
import banner from "../assets/images/realimage.png";
import phonebanner from "../assets/images/phonebanner.jpeg";

const Landing = () => {
  return (
    <section
      className="relative h-[100vh] w-full overflow-hidden"
      aria-label="Homepage hero"
    >
      {/* Desktop fixed background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label="Living room styled with plants and natural decor"
      />

      {/* Mobile fixed background */}
      <div
        className="md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${phonebanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label="Cozy plant styled corner for mobile"
      />

      {/* Light overlay for content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/10 to-white/20" />

      {/* Centered content container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-3xl px-6 sm:px-8 md:px-12 text-center">
          {/* Main heading with italicized "home" */}
          <h1 className="font-serif text-neutral-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-light tracking-wide">
            Bring a touch of paradise into your{" "}
            <span className="italic">home</span>.
          </h1>

          {/* Subheading - Think green */}
          <p className="mt-6 font-serif text-neutral-700 text-lg sm:text-xl md:text-2xl italic font-light tracking-wide">
            Think green
          </p>

          {/* Description */}
          <p className="mt-8 text-neutral-700 text-sm sm:text-base md:text-lg font-light leading-relaxed tracking-normal max-w-2xl mx-auto">
            Handcrafted home decor inspired by nature
            <br />
            to create calm, beautiful spaces.
          </p>

          {/* Shop Now button */}
          <div className="mt-12 flex justify-center">
            <a
              href="/shop"
              className="bg-amber-100 hover:bg-amber-200 text-neutral-700 px-10 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-light text-base tracking-wide"
              aria-label="Shop now"
            >
              Shop Now <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
