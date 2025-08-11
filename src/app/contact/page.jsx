"use client";
import React from 'react';
import { toast } from 'react-toastify';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "fcfe2901-35a0-4847-b339-4bbc567ed834");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message || "Something went wrong!");
      setResult("");
    }
  };

  return (
    <div className=" py-20 px-6 md:px-10 lg:px-20 flex justify-center" id="contact">
      <div className="w-full max-w-4xl bg-gradient-to-br from-[#f5f8fb] to-[#eaf0f6] shadow-xl rounded-xl p-8 md:p-12 border border-gray-100">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-gray-800">
          Contact <span className='underline underline-offset-4 
      decoration-1  
      text-orange-400 under font-light'>Us</span>
        </h1>
        <p className="max-w-xl mx-auto text-center text-[#0b2341] text-xl mb-10">
          We’re always ready to discuss your mechanical, electrical, or sanitary project needs.
          Fill out the form below and our team will get back to you promptly.
        </p>

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Name & Email */}
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[250px]">
              <label className="block text-[#0b2341] font-medium mb-2">Your Name</label>
              <input 
                type="text" 
                name="Name" 
                required 
                placeholder="Enter your name" 
                className="w-full border border-[#0b2341] rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
              />
            </div>
            <div className="flex-1 min-w-[250px]">
              <label className="block text-[#0b2341] font-medium mb-2">Your Email</label>
              <input 
                type="email" 
                name="Email" 
                required 
                placeholder="Enter your email" 
                className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea 
              name="Message" 
              required 
              placeholder="Enter your message" 
              className="w-full border border-gray-300 rounded-lg py-3 px-4 h-44 resize-none outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-[#0b2341] cursor-pointer text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-md"
            >
              {result ? result : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
