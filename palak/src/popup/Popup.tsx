import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

// interface Colors {
//   bgColor: string;
//   glassBgColor: string;
//   textColor: string;
//   inputBgColor: string;
//   buttonBgColor: string;
// }

function Popup() {
  const colors = {
    bgColor: "bg-[#4335A7]",
    glassBgColor: "bg-white/10",
    textColor: "text-white",
    inputBgColor: "bg-white/80",
    buttonBgColor: "bg-white/10 text-white",
    spanColor: "text-blue-950",
    popupBgColor: "bg-gradient-to-br from-[#4335A7] to-white",
    popupButton: "bg-[#4335A7] text-white",
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative inset-0 h-screen w-screen flex items-center justify-center ${colors.bgColor}`}
      onMouseDownCapture={() => setIsOpen(false)}
    >
      <div className={`absolute inset-0 transition-all duration-300 ${isOpen ? "bg-black/60" : ""}`}></div>

      {/* GlassEffect Popup */}
      <div
        className={`absolute z-20 w-96 max-h-screen pb-20 flex flex-col rounded-md shadow-lg transform transition-all duration-300 ${colors.glassBgColor} backdrop-blur-md`}
      >
        <p className={`mt-10 mx-auto ${colors.textColor} font-semibold text-lg`}>
          Login for <span className={`${colors.spanColor}`}>better</span> experience
        </p>
        <label className={`mt-12 px-8 ${colors.textColor}`}>Email</label>
        <input
          type="text"
          placeholder="Your Email here.."
          className={`mx-auto mt-1 rounded-md h-10 w-80 focus-visible:outline-none focus-visible:ring-1 focus:ring-blue-400 p-2 border border-blue-300 text-sm ${colors.inputBgColor}  backdrop-blur-md`}
        />
        <label className={`mt-6 px-8 ${colors.textColor}`}>Password</label>
        <input
          type="text"
          placeholder="Your Password here.."
          className={`mx-auto mt-1 rounded-md h-10 w-80 focus-visible:outline-none focus-visible:ring-1 focus:ring-blue-400 p-2 border border-blue-300 text-sm ${colors.inputBgColor}  backdrop-blur-md`}
        />
        <a className={`text-sm px-8 ${colors.textColor} underline mt-1.5`} href="">
          Forgot Password
        </a>

        <button
          className={`px-36 mt-16 h-10 mx-auto rounded-md p-2  ${colors.buttonBgColor} backdrop-blur-lg`}
          onClick={handleClick}
        >
          Login
        </button>
      </div>

      {/* Normal Popup */}
      <div
        className={`absolute z-20 max-w-lg h-96 ${
          colors.popupBgColor
        } flex flex-col p-2 rounded-md shadow-lg transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"
        }`}
        onMouseDownCapture={() => setIsOpen(true)}
      >
        <button className={`text-white text-xl absolute top-3 right-3`} onClick={handleClick}>
          <MdOutlineCancel />
        </button>

        <p className={`mt-14 mx-auto ${colors.textColor} font-semibold text-lg`}>Subscribe for free Music</p>
        <p className={`mt-2 px-10 ${colors.textColor} text-sm`}>
          Enjoy the next 2 months for free. Pay <span className={`${colors.spanColor}`}>99/month </span>after your free
          subscription expires.
        </p>

        <div className="flex gap-3 mx-auto">
          <input
            type="text"
            placeholder="Your Email here.."
            className="mt-12 rounded-md h-10 w-80 focus-visible:outline-none focus-visible:ring-1  p-2 border border-blue-300 text-sm"
          />
          <button className={`w-24 mt-12 h-10 rounded-md p-2 ${colors.popupButton}`}>Subscribe</button>
        </div>

        <a href="#" className={`${colors.spanColor} text-sm mx-auto my-auto underline`}>
          Read More
        </a>
      </div>
    </div>
  );
}

export default Popup;

// import { useState } from "react";
// import { MdOutlineCancel } from "react-icons/md";

// function Popup() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div
//       className="relative inset-0 h-screen w-screen flex items-center justify-center bg-popup bg-cover"
//       onMouseDownCapture={() => setIsOpen(false)}
//     >
//       <div className={`absolute inset-0 transition-all duration-300 ${isOpen ? "bg-black/60" : ""}`}></div>

//       {/* GlassEffect Popup */}
//       <div
//         className={`absolute z-20 w-96 max-h-screen pb-20 flex flex-col rounded-md shadow-lg transform transition-all duration-300 bg-blue-500/20 backdrop-blur-md`}
//       >
//         <p className="mt-10 mx-auto text-white font-semibold text-lg">
//           Login for <span className="text-blue-900">better</span> experience
//         </p>
//         <label className="mt-12 px-8 text-blue-950">Email</label>
//         <input
//           type="text"
//           placeholder="Your Email here.."
//           className="mx-auto mt-1 rounded-md h-10 w-80 focus-visible:outline-none focus-visible:ring-1 focus:ring-blue-400 p-2 border border-blue-300 text-sm bg-blue-100/40 backdrop-blur-md text-white"
//         />
//         <label className="mt-6 px-8 text-blue-950">Password</label>
//         <input
//           type="text"
//           placeholder="Your Password here.."
//           className="mx-auto mt-1 rounded-md h-10 w-80 focus-visible:outline-none focus-visible:ring-1 focus:ring-blue-400 p-2 border border-blue-300 text-sm bg-blue-100/40 backdrop-blur-md text-white"
//         />
//         <a className="text-sm px-8 text-blue-950 underline mt-1.5" href="">
//           Forgot Password
//         </a>

//         <button
//           className="px-36 mt-16 h-10 mx-auto rounded-md p-2 text-white bg-white/20 backdrop-blur-lg"
//           onClick={handleClick}
//         >
//           Login
//         </button>
//       </div>

//       {/* Normal Popup */}
//       <div
//         className={`absolute z-20 max-w-lg h-96 bg-gradient-to-br from-blue-400 to-white flex flex-col p-2 rounded-md shadow-lg transform transition-all duration-300 ${
//           isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"
//         } `}
//         onMouseDownCapture={() => setIsOpen(true)}
//       >
//         <button className="text-white text-xl absolute top-3 right-3" onClick={handleClick}>
//           <MdOutlineCancel />
//         </button>

//         <p className="mt-14 mx-auto text-white font-semibold text-lg">Subscribe for free Music</p>
//         <p className="mt-2 px-10 text-white text-sm">
//           Enjoy the next 2 months for free. Pay <span className="text-blue-950">99/month </span>after your free
//           subscription expires.
//         </p>

//         <div className="flex gap-3 mx-auto">
//           <input
//             type="text"
//             placeholder="Your Email here.."
//             className="mt-12 rounded-md h-10 w-80 focus-visible:outline-none focus-visible:ring-1 bg-gradient-to-br from-white to-blue-200 focus:ring-blue-400 p-2 border border-blue-300 text-sm"
//           />
//           <button className="w-24 mt-12 h-10 bg-blue-400 rounded-md p-2 text-white">Subscribe</button>
//         </div>

//         <a href="#" className="text-blue-700 text-sm mx-auto my-auto underline">
//           Read More
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Popup;
