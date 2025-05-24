"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Dumbbell, Clock, Users, Award, ChevronLeft, ChevronRight } from "lucide-react"
import img1 from "/images/GYM-02.jpg"

import PageTransition from "../components/PageTransition"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SectionTitle from "../components/SectionTitle"
import Workoutscard from "../components/WorkoutsCard"
import TrainerCard from "../components/TrainerCard"
import PricingCard from "../components/PricingCard"
import TestimonialCard from "../components/TestimonialCard"
import Footer from "../components/Footer"
import Blogcard from "../components/BlogCard"
// import bgimg from "../images/homepage.jpg"



// Data
import { classes,  blogPosts, } from "../data"
import ClassCard2 from "../components/Classcard2"


export default function Home() {
  // const [annual, setAnnual] = useState(false)
  // const [current, setCurrent] = useState(0)
  //  const [category,] = useState("all");

  // const next = () => {
  //   setCurrent((current + 1) % testimonials.length)
  // }

  // const prev = () => {
  //   setCurrent((current - 1 + testimonials.length) % testimonials.length)
  // }

  const stats = [
    { icon: Dumbbell, value: "50+", label: "Equipment" },
    { icon: Clock, value: "24/7", label: "Open Hours" },
    { icon: Users, value: "500+", label: "Members" },
    { icon: Award, value: "15+", label: "Trainers" },
  ]
    // const filteredPosts =
    // category === "all"
    //   ? blogPosts
    //   : blogPosts.filter((post) => post.category.toLowerCase() === category);


  return (
    <PageTransition>
      <Navbar />

      <Hero
      title={
    <>
      <span className="text-red-500">LIFE</span>  Longer <br /> AND <span className="text-red-500">Stronger</span>
    </>
  }
        subtitle={
          <>
          <span className="text-white">TRANSFORM YOUR BODY</span>
          </>
        }
        description="Join FITBIZZ FITNESS — the ultimate fitness destination for strength, endurance, and lifestyle change."
        image="/images/hero-bg.jpg"
        overlay = "from-black "
      />

      {/* About Section */}
      <section id="about"
      //  style={{ backgroundImage: `url(${bgimg})` }}
      className="py-20 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-950">
        <div className="container-custom">
          <SectionTitle
            tag="ABOUT US"
            title="Welcome to <span class='text-red-500'>FITBIZZ FITNESS</span>"
            description="We’re not just a gym — we’re a community of fitness lovers striving for progress. Whether you’re a beginner or a pro, our expert trainers, state-of-the-art equipment, and supportive environment will help you crush your fitness goals."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <img src={img1} alt="Gym Interior" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red-500 text-white p-6 rounded-lg">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                We Are Here to <span className="text-red-500">Build</span> Your Body
              </h3>
              <p className="text-gray-400 mb-8">
                At FITBIZZ FITNESS, we believe that fitness is not just about looking good, but feeling good too. Our
                comprehensive approach to fitness focuses on strength, endurance, flexibility, and overall well-being.
              </p>
              <p className="text-gray-400 mb-8">
                Our team of certified trainers will work with you to create a personalized fitness plan that aligns with
                your goals, whether you're looking to build muscle, lose weight, or improve your overall health.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 p-6 rounded-lg flex flex-col items-center"
                  >
                    <stat.icon className="text-red-500 mb-3" size={28} />
                    <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                    <p className="text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workou Section */}
      <section id="classes" className="py-20 bg-black">
        <div className="container-custom">
          <SectionTitle
            tag="OUR WORKOUTS"
            title="What We <span class='text-red-500'>Offer</span>"
            description="Discover our wide range of fitness programs designed to help you achieve your specific goals."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {classes.slice(0, 4).map((classItem, index) => (
              <Workoutscard
                key={classItem.title}
                title={classItem.title}
                description={classItem.description}
                image={classItem.image}
                color={classItem.color}
                delay={0.3 + index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link to="/classes" className="btn-primary">
              View All Classes
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trainers Section */}
      {/* <section id="trainers" className="py-20 bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            tag="OUR TRAINERS"
            title="Expert <span class='text-red-500'>Coaches</span>"
            description="Our certified trainers are here to guide you through your fitness journey with personalized plans and expert advice."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.slice(0, 4).map((trainer, index) => (
              <TrainerCard key={trainer.name} trainer={trainer} delay={0.3 + index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link to="/trainers" className="btn-primary">
              View All Trainers
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* Pricing Section */}
      {/* <section id="pricing" className="py-20 bg-black">
        <div className="container-custom">
          <SectionTitle
            tag="PRICING PLANS"
            title="Choose Your <span class='text-red-500'>Membership</span>"
            description="Select the perfect membership plan that fits your fitness goals and budget."
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
      </section> */}

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            tag="TESTIMONIALS"
            title="What Our <span class='text-red-500'>Members</span> Say"
            description="Hear from our members who have transformed their lives with our fitness programs."
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="overflow-hidden">
              <motion.div
                initial={false}
                animate={{ x: `-${current * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex"
              >
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>

            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition-colors duration-300 md:flex hidden"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition-colors duration-300 md:flex hidden"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                  current === index ? "bg-red-500" : "bg-gray-700"
                }`}
              />
            ))}
          </div>
        </div>
      </section> */}

{/* ff */}
       <section id="classes" className="py-20 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-950">
        <div className="container-custom">
          <SectionTitle
            tag="OUR CLASSES"
            title="Latest<span class='text-red-500'> Training</span>"
            description="Discover our wide range of fitness programs designed to help you achieve your specific goals."
          />

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {filteredPosts.map((post, index) => (
                       <BlogCard
                         key={post.id}
                         post={post}
                         delay={0.1 + (index % 6) * 0.05}
                       />
                     ))}
                   </div> */}
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((classItem, index) => (
              <ClassCard2
                key={classItem.title}
                title={classItem.title}
                description={classItem.excerpt}
                image={classItem.image}
                color={classItem.color}
                delay={0.3 + index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link to="/classes" className="btn-primary">
              View All Classes
            </Link>
          </motion.div>
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
              Ready to <span className="text-red-500">Transform</span> Your Body?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg mb-8"
            >
              Join FITBIZZ FITNESS Gym today and start your journey to a healthier, stronger you. Our expert trainers and
              state-of-the-art facilities are waiting for you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/contact" className="btn-primary">
                 Contact Now
              </Link>
              <Link to="/Workouts" className="btn-secondary">
                View Workouts
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  )
}
