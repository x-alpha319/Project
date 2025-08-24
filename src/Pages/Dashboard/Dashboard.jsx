// src/components/DashboardCard.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function DashboardCard({ title, description, dropdownItems }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 cursor-pointer transition hover:shadow-2xl"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Card Title */}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden z-10"
          >
            {dropdownItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
