"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Data
import { blogPosts } from "../data";

export default function Blog() {
  const [category] = useState("all");
  // const navigate = useNavigate();

  // const categories = [
  //   { id: "all", name: "All Posts" },
  //   { id: "fitness", name: "Fitness" },
  //   { id: "nutrition", name: "Nutrition" },
  //   { id: "wellness", name: "Wellness" },
  //   { id: "motivation", name: "Motivation" },
  // ];

  const filteredPosts =
    category === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category.toLowerCase() === category);

  return (
    <PageTransition>
      <Navbar />

      <Hero
        title="Classes"
        subtitle="LATEST ARTICLES"
        description="Expert advice, tips, and insights to help you on your fitness journey."
        image="/images/blog-hero.jpg"
        height="h-[100vh]"
      />

      {/* Blog Posts Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            tag="OUR CLASSES"
            title="Latest <span class='text-red-500'>Training</span>"
            description="Stay ahead with our newest training methods and techniques.
Experience cutting-edge workouts designed for maximum results."
          />

          {/* Category Filter */}
          {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  category === cat.id
                    ? "bg-red-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </div> */}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                delay={0.1 + (index % 6) * 0.05}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              {/* {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    page === 1
                      ? "bg-red-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {page}
                </button>
              ))} */}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm font-semibold mb-4"
            >
              STAY UPDATED
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to <span className="text-red-500">Transform</span> Your
              Body?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-8"
            >
              Join FITBIZZ FITNESS today and take the first step towards a
              healthier, stronger you. Sign up now or contact us for more
              information.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {/* <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              /> */}
              <Link to="/contact">
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 whitespace-nowrap">
                  Join Now
                </button>
              </Link>
            </motion.form>
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/contact" className="btn-primary">
                Join Now
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </motion.div> */}
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}
