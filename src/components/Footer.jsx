import React from "react";


const Footer = () => (
  <div className="w-full flex flex-row justify-center items-center p-4 gradient-bg-footer">
    <div className="flex flex-row justify-center items-center mt-3">
        <img class="rounded w-48" src="https://media.giphy.com/media/vrxxqQbyRxYi6scCjT/giphy.gif" alt="logo" className="w-32" />     
    </div>
    <div className="flex flex-col justify-center items-center m-5">     
      <p className="text-white mt-5 text-center text-lg">All Rights Reserved @Z-Visualizer {new Date().getFullYear()}</p>
        <hr class='text-white h-5 w-96 mt-2' />
      <p className="text-white text-center text-lg">Made with <span class='text-[red]'>❤</span> by <a class="text-[#0ddfff]" href="https://zakariya-ardent10.vercel.app/">Zakariya</a> </p>
    </div>
  </div>
);

export default Footer;