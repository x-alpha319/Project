import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calculator, BarChart2, Activity, Sliders } from "lucide-react"; // icons

export default function BudgetModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-white backdrop-blur-sm bg-opacity-50 z-50"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className=" dark:bg-gray-800 p-6 rounded-xl shadow-xl w-[400px] relative flex flex-col items-center gap-6"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <Calculator className="w-16 h-16 text-gray-800 dark:text-white" />

            {/* Sections */}
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-start gap-3">
                <Sliders className="w-6 h-6 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Set up annual budgets by account category
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Allocate funds across income and expense lines with full
                    visibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Activity className="w-6 h-6 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Track actuals vs budget in real time
                  </h3>
                  <p className="text-gray-500 text-sm">
                    See how your community is performing against plan, month by
                    month.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BarChart2 className="w-6 h-6 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Adjust figures and forecast with ease
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Edit amounts, apply percentage changes, or roll forward last
                    year’s data—all in one place.
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="mt-4 bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition">
              Create Budget
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
