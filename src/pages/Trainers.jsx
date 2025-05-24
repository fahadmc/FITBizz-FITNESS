import PageTransition from "../components/PageTransition"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SectionTitle from "../components/SectionTitle"
import TrainerCard from "../components/TrainerCard"
import Footer from "../components/Footer"

// Data
import { trainers } from "../data"

export default function Trainers() {
  return (
    <PageTransition>
      <Navbar />

      <Hero
        title="Trainers"
        subtitle="MEET THE TEAM"
        description="Our certified trainers are here to guide you through your fitness journey with personalized plans and expert advice."
        image="/images/trainers-hero.jpg"
        height="h-[70vh]"
      />

      {/* Trainers Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            tag="OUR TRAINERS"
            title="Expert <span class='text-red-500'>Coaches</span>"
            description="Meet our team of certified fitness professionals dedicated to helping you achieve your goals."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <TrainerCard key={trainer.name} trainer={trainer} delay={0.1 + (index % 6) * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Trainers Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <SectionTitle
            tag="WHY CHOOSE OUR TRAINERS"
            title="What Sets Our <span class='text-red-500'>Trainers</span> Apart"
            description="Learn about the qualifications and approach of our expert coaching team."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Certified Professionals",
                description:
                  "All our trainers hold nationally recognized certifications and undergo continuous education to stay updated with the latest fitness trends and research.",
              },
              {
                title: "Specialized Expertise",
                description:
                  "Our trainers specialize in different areas of fitness, from strength training and weight loss to rehabilitation and sports performance.",
              },
              {
                title: "Personalized Approach",
                description:
                  "We believe in customized training plans that consider your unique goals, fitness level, preferences, and any limitations or injuries.",
              },
              {
                title: "Results-Driven",
                description:
                  "Our trainers focus on measurable results, tracking your progress and adjusting your program as needed to ensure you achieve your goals.",
              },
              {
                title: "Motivational Support",
                description:
                  "Beyond physical training, our coaches provide the motivation, accountability, and support you need to stay consistent and push through challenges.",
              },
              {
                title: "Holistic Perspective",
                description:
                  "We take a comprehensive approach to fitness, addressing nutrition, recovery, stress management, and lifestyle factors that impact your results.",
              },
            ].map((item, index) => (
              <div key={item.title} className="bg-gray-900 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            tag="OUR TRAINING PROCESS"
            title="How We <span class='text-red-500'>Work</span>"
            description="Our systematic approach to helping you achieve your fitness goals."
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div>

            {/* Timeline Items */}
            <div className="relative z-10">
              {[
                {
                  title: "Initial Consultation",
                  description:
                    "We begin with a comprehensive assessment of your current fitness level, goals, medical history, and lifestyle factors to understand your unique needs.",
                  icon: "1",
                },
                {
                  title: "Goal Setting",
                  description:
                    "Together, we establish clear, measurable, and realistic fitness goals with specific timelines to track your progress effectively.",
                  icon: "2",
                },
                {
                  title: "Custom Program Design",
                  description:
                    "Your trainer creates a personalized training program tailored to your goals, preferences, schedule, and any limitations you may have.",
                  icon: "3",
                },
                {
                  title: "Implementation & Training",
                  description:
                    "Regular training sessions where your trainer guides you through proper technique, provides motivation, and ensures you're challenged appropriately.",
                  icon: "4",
                },
                {
                  title: "Progress Tracking",
                  description:
                    "Consistent monitoring of your progress through measurements, assessments, and feedback to ensure you're moving toward your goals.",
                  icon: "5",
                },
                {
                  title: "Program Adjustment",
                  description:
                    "Based on your progress and feedback, your trainer will make necessary adjustments to your program to prevent plateaus and ensure continued results.",
                  icon: "6",
                },
              ].map((step, index) => (
                <div key={step.title} className="mb-12 relative">
                  <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? "pr-16 text-right" : "pl-16 text-left"}`}>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>

                    {/* Empty Space */}
                    <div className="w-5/12"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  )
}
