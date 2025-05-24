import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { useState } from "react";
import { p } from "framer-motion/client";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
    } else {
      setError("");
      // Do something with the data (e.g., send to backend or show success)
      console.log("Message sent:", formData);
      // Optionally reset
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <PageTransition>
      <Navbar />

      <Hero
        title="Contact"
        subtitle="CONTACT US"
        description="Have questions or ready to start your fitness journey? Reach out to us today."
        image="/images/contact-hero.jpg"
        height="h-[100vh]"
      />

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            tag="CONTACT US"
            title="Get In <span class='text-red-500'>Touch</span>"
            description="Have questions or ready to start your fitness journey? Reach out to us today."
          />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                      <MapPin className="text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Our Location
                      </h4>
                      <p className="text-gray-400">
                        Al Thumama Mall Building No.14,Zone 50 Street 419
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                      <Phone className="text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Phone Number
                      </h4>
                      <p className="text-gray-400">3385 8178</p>
                      <p className="text-gray-400">6646 9970</p>
                    </div>
                  </div>
                  <br />
                  <div className="flex items-start ">
                    <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                      <MapPin className="text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Our Location
                      </h4>

                      <p className="text-red-500">
                        Madinakhalifa South Building No.120,Zone 56, Street 901
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                      <Phone className="text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Phone Number
                      </h4>

                      <p className="text-red-500">3386 0516</p>
                    </div>
                  </div>

                  {/* <div className="flex items-start">
                    <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                      <Mail className="text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Email Address
                      </h4>
                      <p className="text-gray-400">info@gymfit.com</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </motion.div>

            {/* Contact Form Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-6 " onSubmit={handleSubmit}>
                  {error && <p className="text-red-500 font-medium">{error}</p>}
                  <div>
                    <label className="text-gray-400 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 block mb-1">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700"
                      rows="5"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
