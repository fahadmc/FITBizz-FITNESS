"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export default function ScheduleTable({ schedule }) {
  const [activeDay, setActiveDay] = useState("Monday")

  return (
    <div className="w-full">
      {/* Day Tabs */}
      <div className="flex flex-wrap mb-8 gap-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeDay === day ? "bg-red-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule Table */}
      <div className="bg-gray-900 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800">
                <th className="py-4 px-6 text-left text-sm font-semibold text-white">Time</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-white">Class</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-white">Trainer</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-white">Duration</th>
              </tr>
            </thead>
            <tbody>
              {schedule[activeDay].map((session, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`border-b border-gray-800 ${index % 2 === 0 ? "bg-gray-900" : "bg-gray-800/50"}`}
                >
                  <td className="py-4 px-6 text-white font-medium">{session.time}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <span className={`w-3 h-3 rounded-full mr-2 bg-${session.color}-500`}></span>
                      <span className="text-white">{session.class}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300">{session.trainer}</td>
                  <td className="py-4 px-6 text-gray-300">{session.duration}</td>
                </motion.tr>
              ))}
              {schedule[activeDay].length === 0 && (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-gray-400">
                    No classes scheduled for this day.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
