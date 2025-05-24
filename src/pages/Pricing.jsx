"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Check } from "lucide-react"

import PageTransition from "../components/PageTransition"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SectionTitle from "../components/SectionTitle"
import PricingCard from "../components/PricingCard"
import Footer from "../components/Footer"

// Data
import { plans } from "../data"

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <PageTransition>
      <Navbar />

      <Hero
        title="Pricing"
        subtitle="PRICING OPTIONS"
        description="Choose the perfect membership plan that fits your fitness goals and budget."
        image="/images/pricing-hero.jpg"
        height="h-[70vh]"
      />

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            tag="MEMBERSHIP PLANS"
            title="Choose Your <span class='text-red-500'>Plan</span>"
            description="Select from our range of membership options designed to fit different needs and budgets."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-12"
          >
            <span className={`mr-3 text-sm font-medium ${annual ? "text-gray-400" : "text-white"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-800"
            >
              <span className="sr-only">Toggle billing frequency</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-red-500 transition-transform ${
                  annual ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`ml-3 text-sm font-medium ${annual ? "text-white" : "text-gray-400"}`}>
              Yearly <span className="text-red-500 text-xs">(Save 20%)</span>
            </span>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} annual={annual} delay={0.3 + index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <SectionTitle
            tag="MEMBERSHIP BENEFITS"
            title="What's <span class='text-red-500'>Included</span>"
            description="All memberships include these core benefits to enhance your fitness experience."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Access to Facilities",
                description:
                  "Full access to our state-of-the-art gym equipment, locker rooms, and amenities during operational hours.",
                included: true,
              },
              {
                title: "Fitness Assessment",
                description:
                  "Initial fitness assessment to establish your baseline and set realistic goals for your fitness journey.",
                included: true,
              },
              {
                title: "Group Classes",
                description:
                  "Access to our diverse schedule of group fitness classes led by certified instructors (varies by plan).",
                included: true,
              },
              {
                title: "Locker Room Access",
                description: "Access to our premium locker rooms with showers, towel service, and grooming amenities.",
                included: true,
              },
              {
                title: "Mobile App Access",
                description: "Access to our mobile app for class bookings, progress tracking, and workout plans.",
                included: true,
              },
              {
                title: "Free Parking",
                description: "Complimentary parking for members during their workout sessions at our facility.",
                included: true,
              },
              {
                title: "Nutrition Consultation",
                description: "Professional nutrition guidance to complement your fitness routine (premium plans only).",
                included: false,
              },
              {
                title: "Personal Training",
                description:
                  "One-on-one sessions with certified personal trainers (included in select plans, available as add-on).",
                included: false,
              },
              {
                title: "Guest Passes",
                description: "Bring friends or family to experience our gym (number varies by membership level).",
                included: false,
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg flex items-start"
              >
                <div className={`mt-1 mr-4 flex-shrink-0 ${benefit.included ? "text-green-500" : "text-yellow-500"}`}>
                  <Check size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            tag="FREQUENTLY ASKED QUESTIONS"
            title="Common <span class='text-red-500'>Questions</span>"
            description="Find answers to common questions about our membership plans."
          />

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Can I freeze my membership?",
                answer:
                  "Yes, you can freeze your membership for up to 3 months per year with a small administrative fee. This is useful for extended vacations or medical reasons.",
              },
              {
                question: "Is there a joining fee?",
                answer:
                  "Yes, there is a one-time joining fee for new members. However, we often run promotions where this fee is waived. Check our current offers for details.",
              },
              {
                question: "What is the cancellation policy?",
                answer:
                  "Memberships require a 30-day written notice for cancellation. There may be a cancellation fee if you're within a minimum contract period.",
              },
              {
                question: "Can I upgrade my membership?",
                answer:
                  "Yes, you can upgrade your membership at any time. The new rate will be prorated for the remainder of your billing cycle.",
              },
              {
                question: "Are there family or corporate discounts?",
                answer:
                  "Yes, we offer special rates for families and corporate groups. Contact our membership team for more information on these discounts.",
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
                  <h4 className="text-xl font-bold text-white mb-3">{faq.question}</h4>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/cta-bg.jpg" alt="Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-black/80"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to <span className="text-red-500">Get Started</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg mb-8"
            >
              Join FITBIZZ FITNESS today and take the first step towards a healthier, stronger you. Sign up now or contact us
              for more information.
            </motion.p>
            <motion.div
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
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  )
}
