"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function ClassCard({
  title= "Class Title",
  description="Class description goes here.",
  image="/placeholder.svg",
  color = "from-red-500 to-orange-500",
  delay = 0,
  link = "/Workouts",
}) {

  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-gray-900 rounded-xl overflow-hidden group shadow-lg"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${color} opacity-60`}></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <Link to={link} className="inline-flex items-center text-red-500 font-medium group">
          Learn More
          <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>
    </motion.div>
  )
}

