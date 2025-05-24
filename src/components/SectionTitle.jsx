"use client"

import { motion } from "framer-motion"

export default function SectionTitle({ tag, title, description, center = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm font-semibold mb-4"
      >
        {tag}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={`text-4xl md:text-5xl font-bold ${light ? "text-gray-900" : "text-white"} mb-6`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className={`${light ? "text-gray-600" : "text-gray-400"} ${center ? "max-w-3xl mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
