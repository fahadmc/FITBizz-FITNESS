"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Clock,
  Users,
  Award,
  Target,
  Heart,
  Shield,
  Zap,
} from "lucide-react";

import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";

export default function About() {
  const stats = [
    { icon: Dumbbell, value: "50+", label: "Equipment" },
    { icon: Clock, value: "24/7", label: "Open Hours" },
    { icon: Users, value: "500+", label: "Members" },
    { icon: Award, value: "15+", label: "Trainers" },
  ];

  const values = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description:
        "We focus on helping you achieve your specific fitness goals through personalized training plans.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Our team is passionate about fitness and dedicated to helping you succeed on your fitness journey.",
    },
    {
      icon: Shield,
      title: "Safety",
      description:
        "We prioritize proper form and technique to ensure safe and effective workouts for all members.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We continuously update our equipment and methods to provide the most effective fitness solutions.",
    },
  ];

  return (
    <PageTransition>
      <Navbar />

      <Hero
        title="About "
        subtitle="OUR STORY"
        // description="Learn about our journey, our mission, and the team behind POWERGYM."
        // image="/images/about-hero.jpg"
        height="h-[100vh]"
      />

      {/* Our Story Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm font-semibold mb-4">
                OUR STORY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Top Benefits of{" "}
                <span className="text-red-500">Joining a Gym</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Top Benefits of Joining a Gym Why You Should Join a Gym Today
                Amazing Advantages of Gym Membership Join the Gym – Transform
                Your Life
              </p>
              <p className="text-gray-400 mb-6">
                Health Benefits of Going to the Gym Fitness Starts Here: Gym
                Join Benefits From Couch to Fit – Gym Membership Perks Unlock
                Your Potential with Gym Workouts Join the Gym for a Healthier
                Tomorrow Strong Body, Strong Mind – Gym Benefits
              </p>
              <p className="text-gray-400">
                Access to a variety of workout options like cardio, strength
                training, and group classes. Motivating atmosphere that
                encourages consistency and dedication. Expert guidance from
                certified trainers for better results and injury prevention.
                Tracking progress with fitness apps and gym equipment. Improved
                posture and flexibility through regular exercise routines.
                Boosts immunity and overall body function with regular physical
                activity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden h-48 shadow-[0_4px_10px_rgba(239,68,68,0.9)]">
                    <img
                      // src="src/images/beautiful-young-black-sportswoman-gym_152625-3449.jpg"
                      src="/images/WhatsApp Image 2025-05-23 at 15.01.50_99f1a8d0.jpg"
                      alt="Gym History"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden h-64 shadow-[0_4px_10px_rgba(255,255,255,0.9)]">
                    <img
                      // src="src/images/woman-gym-body-building_1303-5506.jpg"
                      src="/images/WhatsApp Image 2025-05-23 at 15.04.41_8fb50196.jpg"
                      alt="Gym History"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-lg overflow-hidden h-64 shadow-[0_4px_10px_rgba(255,255,255,0.9)]">
                    <img
                      // src="src/images/strong-sportsman-lifting-heavy-dumbbell-smoke_136403-4217.jpg"
                      src="/images/WhatsApp Image 2025-05-23 at 15.04.39_3fe4e834.jpg"
                      alt="Gym History"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden h-48 shadow-[0_4px_10px_rgba(239,68,68,0.9)]" >
                    <img
                      src="/images/WhatsApp Image 2025-05-23 at 15.01.50_e3ce31bf.jpg"
                      // src="src/images/bodybuilder-training-arm-with-resistance-band_7502-4758.jpg"
                      alt="Gym History"
                      className="w-full h-full object-cover  "
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      {/* <section className="py-20 bg-black">
        <div className="container-custom">
          <SectionTitle
            tag="OUR MISSION & VISION"
            title="What Drives <span class='text-red-500'>Us</span>"
            description="Our mission and vision guide everything we do at POWERGYM."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-400 mb-6">
                To empower individuals to transform their lives through fitness
                by providing expert guidance, supportive community, and
                state-of-the-art facilities in an inclusive environment.
              </p>
              <p className="text-gray-400">
                We believe that fitness is for everyone, regardless of age,
                background, or current fitness level. Our mission is to make
                quality fitness accessible and enjoyable for all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 mb-6">
                To be the leading fitness center known for transforming lives,
                setting industry standards, and creating a global community of
                healthier, stronger individuals.
              </p>
              <p className="text-gray-400">
                We envision a world where fitness is an integral part of
                everyone's lifestyle, contributing to overall well-being,
                longevity, and quality of life.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Our Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            tag="OUR VALUES"
            title="What We <span class='text-red-500'>Stand For</span>"
            description="Our core values define how we operate and serve our members."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-8 rounded-xl text-center"
              >
                <div className="bg-red-500/10 p-4 rounded-full inline-flex mb-6">
                  <value.icon size={32} className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <SectionTitle
            tag="OUR ACHIEVEMENTS"
            title="FITBIZZ FITNESS <span class='text-red-500'>By The Numbers</span>"
            description="Our growth and success over the years in numbers."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-xl text-center"
              >
                <stat.icon className="text-red-500 mx-auto mb-4" size={40} />
                <h3 className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            tag="OUR LEADERSHIP"
            title="Meet The <span class='text-red-500'>Team</span>"
            description="The dedicated professionals behind POWERGYM's success."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "Founder & CEO",
                image: "/images/team-1.jpg",
                bio: "Former professional athlete with a passion for helping others achieve their fitness goals.",
              },
              {
                name: "Sarah Johnson",
                role: "Fitness Director",
                image: "/images/team-2.jpg",
                bio: "Certified fitness expert with over 15 years of experience in the fitness industry.",
              },
              {
                name: "Michael Brown",
                role: "Operations Manager",
                image: "/images/team-3.jpg",
                bio: "Business management professional ensuring smooth operations of all POWERGYM facilities.",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl overflow-hidden"
              >
                <div className="h-80 w-full">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
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
