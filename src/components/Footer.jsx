"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {  Instagram , ArrowRight } from "lucide-react";
import timg1 from "../images/Threads-app-logo-white-png-transparent.png"
import imgl from "../images/logofitbizz.png"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom ">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center mb-6">
              <div className="text-2xl font-bold text-red-500">
                <img src={imgl} alt="" />
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming lives through fitness. Join our community and achieve
              <br />
              your fitness goals with expert guidance.
            </p>
            <div className="flex space-x-4"> 
              <a
                href="https://www.instagram.com/fitbizzfitnessqa/"
                className="bg-gray-800 hover:bg-red-500 p-2 rounded-full transition-colors duration-300"
              >
                < Instagram size={20} />
              </a>
              <a href="https://www.threads.com/@fitbizzfitnessqa?xmt=AQF0k3aVpyGHdXbuwEJWvv0jhsbC63eRH--DCyELsz2cKhw" className="bg-gray-800 hover:bg-red-500 p-2 rounded-full transition-colors duration-300">
                <img src={timg1} alt="" />
                {/* <MessageCircle  size={20} /> */}
              </a>
              {/* <a href="#" className="bg-gray-800 hover:bg-red-500 p-2 rounded-full transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-500 p-2 rounded-full transition-colors duration-300">
                <Youtube size={20} />
              </a> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Workouts", path: "/Workouts" },
                { name: "Schedule", path: "/Schedule" },
                { name: "Classes", path: "/classes" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Working Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-400">Monday - Friday:</span>
                <span className="text-white">5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Saturday:</span>
                <span className="text-white">6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday:</span>
                <span className="text-white">6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Holidays:</span>
                <span className="text-white">8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-lg font-medium transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} FITBIZZ FITNESS. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="#"
              className="text-gray-400 hover:text-red-500 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-red-500 text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-red-500 text-sm transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
