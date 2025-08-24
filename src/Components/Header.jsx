import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Calculator,
  Calendar as CalendarIcon,
  MessageCircle,
} from "lucide-react";
import BudgetModal from "./Budget";
import Calendar from "./Calender";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const navItems = [
    {
      title: "Notifications",
      icon: <Bell className="w-5 h-5" />,
      dropdown: [
        { label: "View Notifications", link: "/notifications" },
        { label: "Mark All as Read", link: "/notifications/mark-all-read" },
      ],
    },
    {
      title: "Calendar",
      icon: <CalendarIcon className="w-5 h-5" />,
      drawer: true,
    },
    {
      title: "Budget",
      icon: <Calculator className="w-5 h-5" />,
      modal: true,
    },
    {
      title: "Messages",
      icon: <MessageCircle className="w-5 h-5" />,
      dropdown: [
        { label: "View Messages", link: "/messages" },
        { label: "Send Message", link: "/messages/new" },
      ],
    },
  ];

  return (
    <div className="bg-black">
      <header className="bg-black shadow-md px-7 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">myexellia</h1>

        {/* Nav */}
        <nav className="flex gap-6">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.title)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                onClick={() => {
                  if (item.modal) setIsBudgetOpen(true);
                  if (item.drawer) setIsCalendarOpen(true);
                }}
              >
                {item.icon}
                <span className="hidden md:inline">{item.title}</span>
              </button>

              {/* Dropdown menu */}
              {!item.modal && !item.drawer && (
                <AnimatePresence>
                  {openMenu === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden z-20"
                    >
                      {item.dropdown.map((subItem, i) => (
                        <Link
                          key={i}
                          to={subItem.link}
                          className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Budget Modal */}
        <AnimatePresence>
          {isBudgetOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[400px] relative"
              >
                <button
                  onClick={() => setIsBudgetOpen(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
                >
                  ✕
                </button>
                <BudgetModal
                  isOpen={isBudgetOpen}
                  onClose={() => setIsBudgetOpen(false)}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Calendar Drawer */}
        <AnimatePresence>
          {isCalendarOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setIsCalendarOpen(false)}
              />

              {/* Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-[300px] bg-white dark:bg-gray-800 shadow-lg z-50 p-6"
              >
                <button
                  onClick={() => setIsCalendarOpen(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
                >
                  ✕
                </button>
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  Calendar
                </h2>
                <Calendar />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
