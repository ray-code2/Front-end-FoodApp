'use client';


import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

// Example category data with placeholder icons & pastel background colors
const categories = [
  {
    name: "Cupcake",
    items: 22,
    icon: "/icons/cupcake.png", // Replace with your icon path
    bgColor: "#F0FEEB",
  },
  {
    name: "Pizza",
    items: 25,
    icon: "/icons/pizza.png", // Replace with your icon path
    bgColor: "#E4F2F4",
    bgImage: "/images/background.png",
  },
  {
    name: "Kebab",
    items: 12,
    icon: "/icons/kebab.png", // Replace with your icon path
    bgColor: "#EAEEFA"
  },
  {
    name: "Salmon",
    items: 22,
    icon: "/icons/salmon.png", // Replace with your icon path
    bgColor: "#F9EEF3",
  },
  {
    name: "Doughnut",
    items: 11,
    icon: "/icons/doughnut.png", // Replace with your icon path
    bgColor: "#F3F7D9",
  },
];

const Trending = [
  {
    name: "Pizza Pepperoni",
    category: "Pizza",
    icon: "/icons/Pizza-Pepperoni.png", // Replace with your icon path
    bgColor: "#E6F3F5",
  },
  {
    name: "Pizza Meat",
    category: "Pizza",
    icon: "/icons/Pizza-Meat.png", // Replace with your icon path
    bgColor: "#E6F3F5",
  },
  {
    name: "Doner Kebab",
    category: "Kebab",
    icon: "/icons/Doner-kebab.png", // Replace with your icon path
    bgColor: "#EAEEFA"
  },
  {
    name: "Salmon Roll",
    category: "Salmon",
    icon: "/icons/Salmon-Roll.png", // Replace with your icon path
    bgColor: "#F9EEF3",
  },
  {
    name: "Cupcake Choco",
    category: "Cupcake",
    icon: "/icons/Cupcake-Choco.png", // Replace with your icon path
    bgColor: "#F0FEEB",
  },
  {
    name: "Doughnut Milk",
    category: "Doughnut",
    icon: "/icons/Doughnut-milk.png", // Replace with your icon path
    bgColor: "#F3F7D9",
    bgImage: "/images/background.png",
  },
  {
    name: "Doughnut Unicorn",
    category: "Doughnut",
    icon: "/icons/Doughnut-Unicorn.png", // Replace with your icon path
    bgColor: "#F3F7D9",
  },
  {
    name: "Kathi Kebab",
    category: "Kebab",
    icon: "/icons/Kathi-Kebab.png", // Replace with your icon path
    bgColor: "#EAEEFA"
  }
]

const HomePage = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    // Function to update constraints
    const updateConstraints = () => {
      if (constraintsRef.current) {
        setDragConstraints({
          left: -constraintsRef.current.scrollWidth + constraintsRef.current.clientWidth,
          right: 0
        });
      }
    };

    // Initial update
    updateConstraints();

    // Add resize event listener
    window.addEventListener('resize', updateConstraints);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', updateConstraints);
  }, []); 

  return (

    
    <div>
       <div
      style={{
        backgroundImage: "url(/images/background-hero.png)", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen flex flex-col"
    >
      {/* NAVIGATION */}
      <header className="flex items-center justify-between p-4 md:px-24">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          {/* Replace with your actual logo */}
          <Image src="/images/elemes-logo.png" alt="Elemes Logo" width={140} height={60} />
          {/* <span className="text-xl font-bold text-[#8BAC3E]">elemes.id</span> */}
        </div>

     {/* Middle: Nav Links (hidden on mobile, show on md+) */}
<nav className="hidden md:flex items-center space-x-10 text-gray-600" >
  <Link href="#home" className="hover:text-[#8BAC3E] transition-colors duration-200">Home</Link>
  <Link href="#about" className="hover:text-[#8BAC3E] transition-colors duration-200">About</Link>

  {/* Promotions with HOT badge */}
  <div className="relative flex items-center">
    <Link href="#promotions" className="hover:text-[#8BAC3E] transition-colors duration-200">Promotions</Link>
    <span className="absolute -top-4 -right-5 bg-red-500 text-white text-xs px-2 py-0.5  rounded-full">
      HOT
    </span>
  </div>

  <Link href="#blogs" className="hover:text-[#8BAC3E] transition-colors duration-200">Blogs</Link>
  <Link href="#contacts" className="hover:text-[#8BAC3E] transition-colors duration-200">Contact Us</Link>
</nav>
        {/* Right: Auth Buttons (hidden on small screens, show on md+) */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-black font-semibold cursor-pointer">Masuk</button>
          <button className="bg-[#8BAC3E] text-white px-4 py-2 rounded-4xl cursor-pointer over:opacity-90 hover:scale-105 transition">Daftar Sekarang</button>
        </div>

        {/* Mobile Menu Icon (shown on small screens) */}
        <div className="md:hidden">
          {/* Typically a hamburger menu icon. You can replace with your own logic or icons. */}
          <button className="bg-[#8BAC3E] text-white px-4 py-2 rounded-4xl cursor-pointer over:opacity-90 hover:scale-105 transition">Daftar Sekarang</button>
        </div>
      </header>
{/* HERO SECTION */}
<section
  id="home"
  style={{ backgroundImage: `url(/images/background-hero.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  className="flex flex-col w-full p-6 md:flex-col md:px-24 bg-gray-50 md:text-left"
>
  {/* Text Content (Always Above Image on Mobile) */}
<div className="flex flex-col md:flex-row items-start md:items-center justify-between">
<motion.h1
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-3xl md:text-5xl font-sans text-[#8BAC3E] leading-tight text-start order-1 md:order-1"
    >
      Good Food Us <br /> Good Mood
    </motion.h1>

   
  

  {/* Image Section (Always Below Text on Mobile) */}
  <motion.div
    className="relative w-full md:w-1/2 flex justify-start md:justify-center mt-8 md:mt-0 order-2 md:order-last"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    {/* Salad Image */}
    <img
      src="/images/Hero-salad.png"
      alt="Green Salad Tomato"
      width={500}
      height={500}
      className="object-contain w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
    />

    {/* Floating Card (More to the Right on Mobile) */}
    <div className="absolute bottom-4 right-2 md:left-8 md:right-auto transform opacity-80 bg-white shadow-lg rounded-xl p-4 flex items-center gap-3 w-56 md:w-60">
      <img
        src="/images/salad-thumbnail.png"
        alt="Salad Thumbnail"
        width={40}
        height={40}
        className="rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold text-sm text-black">Green Salad Tomato</h4>
        <p className="text-xs text-black">Tomato</p>
        <div className="flex">
          <span className="text-yellow-400 text-xs">⭐</span>
          <span className="text-yellow-400 text-xs">⭐</span>
          <span className="text-yellow-400 text-xs">⭐</span>
          <span className="text-yellow-400 text-xs">⭐</span>
          <span className="text-gray-300 text-xs">⭐</span>
        </div>
        
      </div>
    </div>
  </motion.div>
</div>
   <div className="mt-20 md:-mt-40">
   <p className="text-gray-600 text-start md:text-left max-w-lg leading-relaxed order-3">
      I would think that conserving our natural resources should be a conservative position:
      Not to waste food, and not to throw away a lot of the food that we buy.
    </p>

    {/* Buttons */}
    <div className="mt-6 flex gap-4 order-4 md:order-3">
      <button className="bg-[#8BAC3E] text-white px-6 py-2 rounded-full cursor-pointer shadow-lg over:opacity-90 hover:scale-105 transition">
        Daftar Sekarang
      </button>
      <button className="border border-[#F2F2F2] bg-[#F2F2F2] text-[#333333] px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition">
        About Us
      </button>
    </div>
   </div>
  
</section>



    </div>
       {/* browse Category Section */}
      <section className="px-24 pt-9 text-center">
      <div className="flex flex-col items-start">
    <h2 className="text-2xl font-bold text-[#333]">Browser Our Category</h2>
    <p className="text-[#8BAC3E] text-2xl font-bold">Receipt</p>
      </div>
        
       {/* Horizontal Scroller */}
    <div className="relative mt-6 overflow-hidden" ref={constraintsRef}>
      <motion.div 
        className="flex gap-4 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={0}
        dragMomentum={true}  
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10, power: 0.5 }}
      >
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="min-w-[200px] min-h-[150px] p-4 rounded-lg flex flex-col items-center cursor-pointer shrink-0"
            style={{
              backgroundColor: cat.bgColor,
              backgroundImage: `url(${cat.bgImage})`,
              backgroundRepeat: "repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            {/* Rest of your category card content remains the same */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
              <img
                src={cat.icon}
                alt={cat.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="font-semibold text-gray-700">{cat.name}</p>
            <p className="text-sm text-gray-500">{cat.items} Items</p>
          </motion.div>
        ))}
      </motion.div>
    

          <div className="mt-10 hidden md:flex justify-end gap-3 ">
      {/* Prev Button */}
      <button className="flex items-center gap-2 bg-[#8BAC3E] text-white px-5 py-2 rounded-full hover:bg-[#79932E] transition cursor-pointer">
        <span className="bg-white text-[#8BAC3E] rounded-full p-1">
          <ChevronLeft size={24} />
        </span>
        PREV
      </button>

      {/* Next Button */}
      <button className="flex items-center gap-2 bg-[#8BAC3E] text-white px-5 py-2 rounded-full hover:bg-[#79932E] transition cursor-pointer">
        NEXT
        <span className="bg-white text-[#8BAC3E] rounded-full p-1">
          <ChevronRight size={24} />
        </span>
      </button>
    </div>
        </div>
      </section>

      
      {/* Trending Items */}
      <section className="px-24 pt-16 text-center">
      <div className="flex flex-col items-start">
    <h2 className="text-2xl font-bold text-[#333]">Browser Our Trending</h2>
    <p className="text-[#8BAC3E] text-2xl font-bold">Receipt</p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 ">
        {Trending.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-lg shadow-lg flex flex-col items-start sm:mb-8 cursor-pointer"
            style={{
              backgroundColor: item.bgColor,
              backgroundImage: item.bgImage ? `url(${item.bgImage})` : undefined,
              backgroundRepeat: 'repeat',       
              backgroundPosition: 'center',
              backgroundSize: 'cover',          
            }}
          >
            {/* Item Icon */}
            <div className="w-24 h-24 relative">
              <img
                src={item.icon}
                alt={item.name}
      
                className="object-contain"
              />
            </div>

            {/* Item Name & Category */}
            <h3 className="mt-4 font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-500">{item.category}</p>

            {/* Simple Star Rating */}
            <div className="mt-2 text-[#FFB800] text-sm">★★★★★</div>
          </motion.div>
        ))}
        </div>
         {/* All Receipt Button */}
      <div className="mt-12 hidden md:block">
        <button className="bg-[#8BAC3E] text-white px-6 py-2 mb-32 rounded-4xl hover:opacity-90 hover:scale-105 transition cursor-pointer">
          ALL Receipt
        </button>
      </div>
      </section>
     {/* Footer Section */}
<div className="bg-[#F9FFF6] pl-16 pb-20 pt-20 pr-32 mt-24 mx-24 mb-12 rounded-lg hidden md:block">
  <footer className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4  gap-20 text-gray-700">
    {/* Left Section - Logo & Address */}
    <div>
      <img src="images/elemes-logo.png" alt="Elemis ID Logo" className="mb-4" />
      <p className="text-sm w-full text-gray-500">
        Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, 
        Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
      </p>
      {/* Social Icons */}
      <div className="flex gap-3 mt-4">
        <button className="bg-[#8BAC3E] p-4 rounded-full text-white cursor-pointer">
        <img
            src="/icons/mail.png"
            alt="email"
            width={32}
            height={32}
            className="object-contain"
          /> 
        </button>
        <button className="bg-[#F9FFF6] p-4 rounded-full border border-gray-50 cursor-pointer">
        <img
            src="/icons/Phone.png"
            alt="phone"
            width={32}
            height={32}
            className="object-contain"
          /> 
        </button>
        <button className="bg-[#F9FFF6] p-4 rounded-full border border-gray-50 cursor-pointer">
        <img
            src="/icons/instagram.png"
            alt="instagram"
            width={32}
            height={32}
            className="object-contain"
          /> 
        </button>
      </div>
    </div>

    {/* Categories */}
    <div>
      <h3 className="font-semibold text-lg">Categories</h3>
      <ul className="mt-3 space-y-2 text-sm">
        <li><a href="#" className="no-underline text-gray-500">Cupcake</a></li>
        <li><a href="#" className="no-underline text-gray-500">Pizza</a></li>
        <li><a href="#" className="no-underline text-gray-500">Kebab</a></li>
        <li><a href="#" className="no-underline text-gray-500">Salmon</a></li>
        <li><a href="#" className="no-underline text-gray-500">Doughnut</a></li>
      </ul>
    </div>

    {/* About Us */}
    <div>
      <h3 className="font-semibold text-lg">About Us</h3>
      <ul className="mt-3 space-y-2 text-sm">
        <li><a href="#" className="no-underline text-gray-500">About Us</a></li>
        <li><a href="#" className="no-underline text-gray-500">FAQ</a></li>
        <li><a href="#" className="no-underline text-gray-500">Report Problem</a></li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h3 className="font-semibold text-lg">Newsletter</h3>
      <p className="text-sm mt-3 text-gray-500">
        Get now free 50% discount for all products on your first order
      </p>
      <div className="flex items-center mt-4">
        <input
          type="text"
          placeholder="Your email address"
          className="flex-1 px-4 py-2 border rounded-l-md text-sm"
        />
        <button className="bg-[#8BAC3E] text-white px-4 py-2 rounded-r-md text-sm cursor-pointer">
          SEND
        </button>
      </div>
      <div className="flex gap-2 mt-4 items-center">
      <img
            src="/icons/mail-2.png"
            alt="email"
            width={20}
            height={20}
            className="object-contain"
          /> 
        <p className="text-sm">elemesid@gmail.com</p>
      </div>
      <div className="flex gap-2 mt-2 items-center">
      <img
            src="/icons/Phone.png"
            alt="phone"
            width={20}
            height={20}
            className="object-contain"
          /> 
        <p className="text-sm">0888 1111 2222</p>
      </div>
    </div>
  </footer>
</div>

    <div className="bottom-0 mt-10 left-0 right-0 bg-white shadow-md p-4 flex justify-around md:hidden">
        <button className="flex flex-col items-center text-gray-700 cursor-pointer">
            <span className="text-xl text-gray-600">☰</span>
            <span className="text-sm">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-700 cursor-pointer">
            <span className="text-xl text-gray-600">☰</span>
            <span className="text-sm">Promotions</span>
        </button>
        <button className="flex flex-col items-center text-gray-700 cursor-pointer">
            <span className="text-xl text-gray-600">☰</span>
            <span className="text-sm">Others</span>
        </button>
    </div>
{/* Copyright Section */}
<div className="bg-white text-center text-gray-600 m-10 hidden md:block">
  © 2021 ELEMES ID. ALL RIGHTS RESERVED.
</div>


    </div>
  );
};

export default HomePage;
