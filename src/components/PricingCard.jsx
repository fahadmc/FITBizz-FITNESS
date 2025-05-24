"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function PricingCard({ plan, annual, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`border-2 ${plan.color} rounded-2xl overflow-hidden bg-gray-900 transition-all duration-300 relative ${
        plan.popular ? "md:-mt-4 md:mb-4" : ""
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MOST POPULAR</div>
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">${annual ? plan.price.yearly : plan.price.monthly}</span>
          <span className="text-gray-400 ml-2">{annual ? "/year" : "/month"}</span>
        </div>
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          className={`w-full ${plan.buttonClass} text-white py-3 rounded-lg font-medium transition-colors duration-300`}
        >
          Get Started
        </button>
      </div>
    </motion.div>
  )
}
