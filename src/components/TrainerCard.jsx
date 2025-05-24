"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function TrainerCard({ trainer, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-gray-800 rounded-xl overflow-hidden group"
    >
      <div className="relative h-80 w-full overflow-hidden">
        <img
          src={trainer.image || "/placeholder.svg"}
          alt={trainer.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
        <p className="text-red-500 font-medium mb-3">{trainer.role}</p>
        <p className="text-gray-400">{trainer.bio}</p>
      </div>
    </motion.div>
  )
}
