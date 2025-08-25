import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Calculator,
  Calendar as CalendarIcon,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import BudgetModal from "./Budget";
import Calendar from "./Calender";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      title: "Notifications",
      icon: <Bell className="w-5 h-5" />,
      dropdown: [{ label: "Notifications", link: "/notifications" }],
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
      dropdown: [{ label: "Email", link: "/messages" }],
    },
  ];

  return (
    <div className="bg-black px-3 sm:px-5">
      <header className="bg-black shadow-md px-4 py-3 sm:px-7 sm:py-4 flex justify-between items-center relative">
        <div className="flex items-center">
          <img
            src="./myxellia.png"
            alt="Myxellia"
            className="h-8 w-auto object-contain sm:h-10 md:h-12 rounded"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 lg:gap-6 items-center">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.title)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition text-base lg:text-lg"
                onClick={() => {
                  if (item.modal) setIsBudgetOpen(true);
                  if (item.drawer) setIsCalendarOpen(true);
                }}
                aria-label={item.title}
              >
                {item.icon}
                {/* <span className="hidden lg:inline">{item.title}</span> */}
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
                          to={subItem.link || "#"}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-black shadow-lg md:hidden z-30"
            >
              <div className="px-4 py-3 border-t border-gray-800">
                {navItems.map((item, index) => (
                  <div key={index} className="py-2">
                    <button
                      className="flex items-center gap-3 text-gray-300 hover:text-blue-400 w-full text-left"
                      onClick={() => {
                        if (item.modal) {
                          setIsBudgetOpen(true);
                          setIsMobileMenuOpen(false);
                        } else if (item.drawer) {
                          setIsCalendarOpen(true);
                          setIsMobileMenuOpen(false);
                        } else if (item.dropdown) {
                          // For mobile, we might want to handle dropdowns differently
                          setOpenMenu(
                            openMenu === item.title ? null : item.title
                          );
                        }
                      }}
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span className="flex-grow">{item.title}</span>
                    </button>

                    {/* Mobile dropdown */}
                    {openMenu === item.title && item.dropdown && (
                      <div className="pl-9 mt-1">
                        {item.dropdown.map((subItem, i) => (
                          <Link
                            key={i}
                            to={subItem.link || "#"}
                            className="block py-2 text-gray-400 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Budget Modal */}
        <AnimatePresence>
          {isBudgetOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
              onClick={() => setIsBudgetOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsBudgetOpen(false)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-red-500 p-1"
                  aria-label="Close"
                >
                  <X size={20} />
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
                className="fixed top-0 right-0 h-full w-full sm:w-80 md:w-96 bg-white dark:bg-gray-800 shadow-lg z-50 p-4 sm:p-6 overflow-y-auto"
              >
                <button
                  onClick={() => setIsCalendarOpen(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-red-500 p-1"
                  aria-label="Close"
                >
                  <X size={20} />
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
