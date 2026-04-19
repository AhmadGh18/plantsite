import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLeaf, FaHeart, FaGlobeAmericas, FaHome } from "react-icons/fa";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <FaLeaf size={40} />,
      title: "Natural Materials",
      subtitle: "Sustainably sourced from ethical suppliers",
    },
    {
      icon: <FaHeart size={40} />,
      title: "Handcrafted",
      subtitle: "Lovingly made with attention to detail",
    },
    {
      icon: <FaGlobeAmericas size={40} />,
      title: "Eco-Conscious",
      subtitle: "Good for you and the environment",
    },
    {
      icon: <FaHome size={40} />,
      title: "Timeless Design",
      subtitle: "Beauty that lasts for generations",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-light relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-dark font-light tracking-wide mb-6">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-highlight via-accent to-highlight mx-auto mb-7"></div>
          <p className="mt-8 text-secondary font-light max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            We believe in creating beautiful home spaces that are good for your
            wellbeing and the world around you.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group h-full"
            >
              <div className="relative bg-gradient-to-br from-white to-light/50 rounded-2xl p-9 h-full border border-accent/50 hover:border-highlight/70 shadow-md hover:shadow-lg hover:shadow-highlight/10 transition-all duration-300 overflow-hidden">
                {/* Background Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-highlight/8 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 400,
                    }}
                    className="mb-8 inline-flex w-20 h-20 bg-gradient-to-br from-highlight to-accent rounded-full items-center justify-center text-dark shadow-lg group-hover:shadow-xl group-hover:shadow-highlight/20 transition-shadow duration-300"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </motion.div>

                  {/* Text Content */}
                  <h3 className="font-serif text-2xl font-light text-dark mb-4 tracking-wide group-hover:text-highlight transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-secondary text-sm font-light leading-relaxed flex-grow group-hover:text-muted transition-colors duration-300">
                    {feature.subtitle}
                  </p>

                  {/* Bottom Line */}
                  <div className="mt-8 h-1 w-0 bg-gradient-to-r from-highlight to-accent group-hover:w-16 transition-all duration-300 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
