import React from "react";
import banner from "../assets/images/realimage.png";
import phonebaneer from "../assets/images/phonebanner.jpeg";

const Body = () => {
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
          backgroundPosition: "bottom",
        }}
        role="img"
        aria-label="Living room styled with plants and natural decor"
      />

      {/* Mobile fixed background */}
      <div
        className="md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${phonebaneer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label="Cozy plant styled corner for mobile"
      />

      {/* Light overlay for content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-light/5 via-light/10 to-light/20" />

      {/* Centered content container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl px-6 sm:px-8 md:px-12 text-right">
          {/* Main heading with italicized "home" */}
          <h1 className="font-serif text-dark text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-light tracking-wide">
            Bring a touch of paradise into your{" "}
            <span className="italic">home</span>.
          </h1>

          {/* Subheading - Think green */}
          <p className="mt-8 font-serif text-secondary text-xl sm:text-2xl md:text-3xl italic font-light tracking-wide">
            Think green
          </p>

          {/* Description */}
          <p className="mt-10 text-secondary text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-normal max-w-3xl mx-auto">
            Handcrafted home decor inspired by nature
            <br />
            to create calm, beautiful spaces.
          </p>

          {/* Shop Now button */}
          <div className="mt-20 flex justify-end">
            <a
              href="/shop"
              className="bg-highlight hover:bg-accent text-dark px-14 py-4 rounded-full font-light text-base tracking-wider uppercase border-2 border-highlight hover:border-accent transition-all duration-300 inline-flex items-center gap-3 group shadow-lg hover:shadow-2xl hover:shadow-highlight/30"
              aria-label="Shop now"
            >
              Shop Now
              <span className="ml-1 group-hover:translate-x-2 transition-transform duration-300">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
