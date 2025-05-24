"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import Workoutscard from "../components/WorkoutsCard";
import Footer from "../components/Footer";

// Data
import { classes } from "../data";

export default function Classes() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Classes" },
    { id: "strength", name: "Strength" },
    { id: "cardio", name: "Cardio" },
    { id: "flexibility", name: "Flexibility" },
    { id: "hiit", name: "HIIT" },
  ];

  const filteredClasses =
    filter === "all" ? classes : classes.filter((c) => c.category === filter);

  return (
    <PageTransition>
      <Navbar />

      <Hero
        title="Workouts"
        subtitle="WORKOUT PROGRAMS"
        description="Discover our wide range of fitness classes designed to help you achieve your specific goals."
        image="/images/classes-hero.jpg"
        height="h-[100vh]"
      />

      {/* Classes Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            tag="OUR PROGRAMS"
            title="Find The Perfect <span class='text-red-500'>Class</span> For You"
            description="Browse our comprehensive selection of fitness classes for all levels and goals."
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  filter === category.id
                    ? "bg-red-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Classes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((classItem, index) => (
              <Workoutscard
                key={classItem.title}
                title={classItem.title}
                description={classItem.description}
                image={classItem.image}
                color={classItem.color}
                delay={0.1 + (index % 6) * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Class Details Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <SectionTitle
            tag="REAL BENEFITS"
            title="We <span class='text-red-500'>Offer's</span>"
            description="We offer expert-led workouts, personalized plans, and total body transformation.
Achieve your fitness goals with state-of-the-art equipment and support."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <img
                  src="/images/class-details.jpg"
                  alt="Class in session"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* <h3 className="text-3xl font-bold text-white mb-6 " >
                Join  <span className="text-red-500">Member</span>Benefits
              </h3> */}

              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-red-500 mb-2">
                    Vehicle parking
                  </h4>
                  <p className="text-gray-400">
                    We provide secure and easily accessible parking for all our
                    members. No more wasting time looking for a spot—just park
                    and get started.
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-red-500 mb-2">
                    Personal Trainer
                  </h4>
                  <p className="text-gray-400">
                    Get expert support and motivation from professionals who
                    keep you on track. Your personal trainer is your partner in
                    success, every step of the way.
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-red-500 mb-2">
                    Prayer Room
                  </h4>
                  <p className="text-gray-400">
                    Take a moment to reconnect spiritually in our calm and
                    respectful prayer room. We value holistic wellness—mind,
                    body, and soul.
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-red-500 mb-2">Shower</h4>
                  <p className="text-gray-400">
                    Refresh yourself after every workout with our clean and
                    well-maintained shower facilities. Stay energized and
                    comfortable before heading to work or home.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-red-500 mb-2">Lockers</h4>
                  <p className="text-gray-400">
                    Keep your belongings safe with our secure, individual
                    lockers available to all members. Focus on your workout
                    knowing your items are protected.
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-red-500 mb-2">
                    Changing Room
                  </h4>
                  <p className="text-gray-400">
                    Enjoy clean, spacious changing rooms designed for your
                    comfort and privacy. Freshen up easily with well-maintained
                    facilities before and after your workout.
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-red-500 mb-2">
                    Free Wifi
                  </h4>
                  <p className="text-gray-400">
                    Stay connected anytime with our fast and reliable free WiFi
                    throughout the gym. Stream workouts, play your favorite
                    music, or catch up on emails without interruption.
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-red-500 mb-2">
                    Certified and Friendly Staff
                  </h4>
                  <p className="text-gray-400">
                    Our certified trainers and friendly staff ensure you get
                    expert guidance with a welcoming smile. They’re here to
                    support your fitness journey every step of the way.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            tag="FREQUENTLY ASKED QUESTIONS"
            title="Common <span class='text-red-500'>Questions</span>"
            description="Find answers to common questions about our classes."
          />

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Do I need to book classes in advance?",
                answer:
                  "Yes, we recommend booking classes at least 24 hours in advance through our app or website to secure your spot. Popular classes fill up quickly.",
              },
              {
                question: "What should I bring to class?",
                answer:
                  "We recommend bringing a water bottle, towel, and wearing comfortable workout attire. All equipment needed for the class is provided.",
              },
              {
                question: "Are there classes suitable for beginners?",
                answer:
                  "We offer beginner-friendly classes and our instructors provide modifications for all fitness levels in every class.",
              },
              {
                question:
                  "Can I try a class before committing to a membership?",
                answer:
                  "Yes, we offer a free trial class for new members. You can also purchase a day pass to try multiple classes.",
              },
              {
                question: "What is the cancellation policy?",
                answer:
                  "Please cancel at least 4 hours before class to avoid a late cancellation fee. This allows others to take your spot.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="bg-gray-800 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-white mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </PageTransition>
  );
}
