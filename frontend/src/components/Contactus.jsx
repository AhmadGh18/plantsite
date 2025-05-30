// import React from "react";
// import img from "../assets/images/natalie-kovach-ph7QQq63lCs-unsplash.jpg";
// const Contactus = () => {
//   return (
//     <div
//       className="h-[90vh]"
//       style={{
//         backgroundImage: `url(${img})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

//       <div className="flex  flex-row bg-white shadow-2xl shadow-black h-[100%] w-[70%] md:mx-auto !rounded-lg ">
//         <div className="w-[30%] object-cover h-[100%]">
//           <img src={img} className="h-[100%] object-cover rounded-lg" />
//         </div>
//         <div className=" w-[60%]  flex flex-col md:ml-10">
//           <div className="md:mt-12 leading-relaxed space-y-4">
//             <p className="text-4xl">Get in touch</p>
//             <p>24/7 support .send us a message</p>
//           </div>
//           <div className="mt-4 gap-4 flex flex-col">
//             <div className="gap-4 flex ">
//               <input
//                 placeholder="First Name"
//                 className="bg-gray-100 shadow-lg  p-3 w-1/3  rounded-md outline-secondorimary outline-3"
//               />
//               <input
//                 placeholder="First Name"
//                 className="bg-gray-100 shadow-lg  p-3 w-1/3 rounded-md outline-secondorimary outline-3"
//               />
//             </div>
//             <div className="flex w-full  mt-7">
//               <input
//                 placeholder="Email Address"
//                 className="bg-gray-100 shadow-lg w-[77%] p-3 rounded-md outline-secondorimary outline-3"
//               />
//             </div>
//             <div className="flex w-full  m">
//               <input
//                 placeholder="Phone number"
//                 className="bg-gray-100 shadow-lg w-[77%] p-3 rounded-md outline-secondorimary outline-3"
//               />
//             </div>
//             <div className="mt-4">
//               <textarea
//                 placeholder="Enter a message"
//                 className="bg-gray-100 shadow-lg w-[77%] md:h-[120px]  p-3  rounded-md outline-secondorimary outline-3"
//               ></textarea>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contactus;

import React from "react";
import img from "../assets/images/natalie-kovach-ph7QQq63lCs-unsplash.jpg";

const Contactus = () => {
  return (
    <div
      className="h-[90vh] relative flex items-center justify-center"
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
                className="flex-1 bg-gray-100 p-3 rounded-md outline-none focus:ring-2 ring-green-400 transition"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 bg-gray-100 p-3 rounded-md outline-none focus:ring-2 ring-green-400 transition"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-100 p-3 rounded-md outline-none focus:ring-2 ring-green-400 transition"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-gray-100 p-3 rounded-md outline-none focus:ring-2 ring-green-400 transition"
            />

            <textarea
              placeholder="Enter a message"
              className="w-full bg-gray-100 p-3 h-28 rounded-md outline-none focus:ring-2 ring-green-400 transition"
            ></textarea>
            <div className="flex w-[100%]">
              <button className="ml-auto px-12  bg-secondorimary p-2 text-white hover:shadow-none transition-all rounded-md text-lg shadow-md shadow-black cursor-pointer">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
