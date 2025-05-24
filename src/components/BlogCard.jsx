"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";

export default function BlogCard({ post, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-gray-900 rounded-xl overflow-hidden group"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          {/* <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span> */}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
          <div className="flex items-center">
            {/* <Calendar size={14} className="mr-1" /> */}
            {post.time}
          </div>
          <div className="flex items-center">
            {/* <User size={14} className="mr-1" /> */}
            {post.author}
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
        <p className="text-gray-400 mb-4">{post.excerpt}</p>
        <div>
          <h4 className="text-white font-medium mb-1"> Address</h4>
          <p className="text-gray-400">Cambridge International School - Nuaija</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-1">Phone Number</h4>
          <p className="text-gray-400">+974 5000 7359</p>
          <p className="text-gray-400">+974 6662 8322</p>
        </div>
        {/* <Link
          to={`/blog/${post.id}`}
          className="inline-block bg-gray-800 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
        >
          Read More
        </Link> */}
        
      </div>
    </motion.div>
  );
}
