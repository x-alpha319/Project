import { Home, Box, Users, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import Carousel from "./Footer";
import Carousel2 from "./Carousel2";

function Body() {
  const navItems = [
    { label: "Dashboard", Icon: Home, link: "/" },
    { label: "Listings", Icon: Box, link: "/listings" },
    { label: "Users", Icon: Users, link: "/users" },
    { label: "Requests", Icon: FileText, link: "/requests" },
    { label: "Applications", Icon: FileText, link: "/applications" },
  ];

  const slides = [
    {
      id: 1,
      image: "./Trade_4.webp",
      title: "First Slide",
      desc: "This is the description for the first slide.",
    },
    {
      id: 2,
      image: "./Trade_3.jpg",
      title: "Second Slide",
      desc: "This is the description for the second slide.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <div className="p-2 border-b border-gray-300 mb-4 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {navItems.map(({ label, Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2 hover:bg-gray-200 px-3 py-2 rounded cursor-pointer transition text-sm md:text-base"
            >
              <Icon size={18} />
              <span className="hidden sm:inline">{label}</span>
            </div>
          ))}
        </div>

        <input
          type="text"
          className="border border-gray-300 p-2 rounded w-full md:max-w-60"
          placeholder="Search listings, users..."
        />
      </div>

      <section className="px-4">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Welcome to the Dashboard
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
          <div className="border border-gray-200 rounded-2xl shadow-md overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 pt-5 pb-4 gap-2">
              <div>
                <h1 className="font-bold text-lg font-sans">Sales Overview</h1>
                <p className="text-gray-600 text-sm">
                  Showing overview Jan 2022 - Sep 2022
                </p>
              </div>

              <button className="border border-gray-300 px-3 py-2 rounded-3xl hover:bg-gray-200 text-xs font-semibold">
                View Transactions
              </button>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-end gap-2 px-6 pb-4 text-sm">
              <div className="text-gray-600 hover:bg-gray-200 px-3 py-1 rounded cursor-pointer">
                1 Week
              </div>
              <div className="text-gray-600 hover:bg-gray-200 px-3 py-1 rounded cursor-pointer">
                1 Month
              </div>
              <div className="text-gray-900 bg-gray-200 px-3 py-1 rounded cursor-pointer">
                1 Year
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="w-full">
                <Carousel />
              </div>
              <div className="grid grid-cols-2 gap-4 p-4 w-full">
                <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">
                  <p className="text-blue-600 font-bold text-lg">
                    ₦120,000,000.00
                  </p>
                  <p className="text-gray-500 text-sm">Total Inflow</p>
                </div>
                <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">
                  <p className="text-blue-400 font-bold text-lg">
                    ₦200,000,000.00
                  </p>
                  <p className="text-gray-500 text-sm">Commission Revenue</p>
                </div>
                <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">
                  <p className="text-green-500 font-bold text-lg">
                    ₦50,000,000.00
                  </p>
                  <p className="text-gray-500 text-sm">MRR</p>
                </div>
                <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">
                  <p className="text-red-600 font-bold text-lg">
                    ₦100,000,000.00
                  </p>
                  <p className="text-gray-500 text-sm">GMV</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-md">
              <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Listing Overview
                </h2>
                <a
                  href="/listings"
                  className="text-blue-600 text-sm hover:underline font-medium"
                >
                  View all
                </a>
              </div>

              <div className="grid grid-cols-3 text-center mb-6">
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-gray-900">
                    1.8K
                  </h1>
                  <p className="text-sm text-gray-500">Total</p>
                </div>
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-green-600">
                    80
                  </h1>
                  <p className="text-sm text-gray-500">Active</p>
                </div>
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-gray-600">
                    1K
                  </h1>
                  <p className="text-sm text-gray-500">Archived</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-md">
              <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  User Overview
                </h2>
                <a
                  href="/users"
                  className="text-blue-600 text-sm hover:underline font-medium"
                >
                  View all
                </a>
              </div>

              <div className="grid grid-cols-3 text-center mb-6">
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-gray-900">
                    5.2K
                  </h1>
                  <p className="text-sm text-gray-500">Total</p>
                </div>
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-green-600">
                    3.1K
                  </h1>
                  <p className="text-sm text-gray-500">Active</p>
                </div>
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-gray-600">
                    2.1K
                  </h1>
                  <p className="text-sm text-gray-500">Inactive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <Carousel2 />
          <Carousel2 />
          <Carousel2 />
        </div>
      </section>
    </>
  );
}

export default Body;
