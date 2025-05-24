// "use client"
// import { motion } from "framer-motion"

// import PageTransition from "../components/PageTransition"
// import Navbar from "../components/Navbar"
// import Hero from "../components/Hero"
// import SectionTitle from "../components/SectionTitle"
// import ScheduleTable from "../components/ScheduleTable"
// import Footer from "../components/Footer"

// // Sample schedule data
// const scheduleData = {
//   Monday: [
//     { time: "06:00 AM", class: "HIIT", trainer: "John Smith", duration: "45 min", color: "yellow" },
//     { time: "08:00 AM", class: "Yoga Flow", trainer: "Sarah Johnson", duration: "60 min", color: "green" },
//     { time: "10:00 AM", class: "Strength Training", trainer: "Mike Brown", duration: "60 min", color: "red" },
//     { time: "12:00 PM", class: "Spin Class", trainer: "Emily Davis", duration: "45 min", color: "blue" },
//     { time: "05:00 PM", class: "Boxing", trainer: "Alex Thompson", duration: "60 min", color: "purple" },
//     { time: "07:00 PM", class: "Core Conditioning", trainer: "Lisa Wilson", duration: "45 min", color: "orange" },
//   ],
//   Tuesday: [
//     { time: "06:00 AM", class: "CrossFit", trainer: "Mike Brown", duration: "60 min", color: "red" },
//     { time: "08:00 AM", class: "Pilates", trainer: "Sarah Johnson", duration: "60 min", color: "green" },
//     { time: "10:00 AM", class: "Zumba", trainer: "Maria Rodriguez", duration: "45 min", color: "pink" },
//     { time: "12:00 PM", class: "Kettlebell", trainer: "John Smith", duration: "45 min", color: "yellow" },
//     { time: "05:00 PM", class: "TRX Training", trainer: "Alex Thompson", duration: "45 min", color: "purple" },
//     { time: "07:00 PM", class: "Power Yoga", trainer: "Lisa Wilson", duration: "60 min", color: "green" },
//   ],
//   Wednesday: [
//     { time: "06:00 AM", class: "HIIT", trainer: "John Smith", duration: "45 min", color: "yellow" },
//     { time: "08:00 AM", class: "Barre", trainer: "Sarah Johnson", duration: "60 min", color: "pink" },
//     { time: "10:00 AM", class: "Strength Training", trainer: "Mike Brown", duration: "60 min", color: "red" },
//     { time: "12:00 PM", class: "Spin Class", trainer: "Emily Davis", duration: "45 min", color: "blue" },
//     { time: "05:00 PM", class: "Kickboxing", trainer: "Alex Thompson", duration: "60 min", color: "purple" },
//     { time: "07:00 PM", class: "Abs & Core", trainer: "Lisa Wilson", duration: "30 min", color: "orange" },
//   ],
//   Thursday: [
//     { time: "06:00 AM", class: "CrossFit", trainer: "Mike Brown", duration: "60 min", color: "red" },
//     { time: "08:00 AM", class: "Yoga Flow", trainer: "Sarah Johnson", duration: "60 min", color: "green" },
//     { time: "10:00 AM", class: "Dance Fitness", trainer: "Maria Rodriguez", duration: "45 min", color: "pink" },
//     { time: "12:00 PM", class: "Circuit Training", trainer: "John Smith", duration: "45 min", color: "yellow" },
//     { time: "05:00 PM", class: "Boxing", trainer: "Alex Thompson", duration: "60 min", color: "purple" },
//     { time: "07:00 PM", class: "Stretching", trainer: "Lisa Wilson", duration: "45 min", color: "green" },
//   ],
//   Friday: [
//     { time: "06:00 AM", class: "HIIT", trainer: "John Smith", duration: "45 min", color: "yellow" },
//     { time: "08:00 AM", class: "Pilates", trainer: "Sarah Johnson", duration: "60 min", color: "green" },
//     { time: "10:00 AM", class: "Strength Training", trainer: "Mike Brown", duration: "60 min", color: "red" },
//     { time: "12:00 PM", class: "Spin Class", trainer: "Emily Davis", duration: "45 min", color: "blue" },
//     { time: "05:00 PM", class: "TRX Training", trainer: "Alex Thompson", duration: "45 min", color: "purple" },
//     { time: "07:00 PM", class: "Power Yoga", trainer: "Lisa Wilson", duration: "60 min", color: "green" },
//   ],
//   Saturday: [
//     { time: "08:00 AM", class: "CrossFit", trainer: "Mike Brown", duration: "60 min", color: "red" },
//     { time: "10:00 AM", class: "Zumba", trainer: "Maria Rodriguez", duration: "45 min", color: "pink" },
//     { time: "12:00 PM", class: "Kettlebell", trainer: "John Smith", duration: "45 min", color: "yellow" },
//     { time: "02:00 PM", class: "Yoga Flow", trainer: "Sarah Johnson", duration: "60 min", color: "green" },
//   ],
//   Sunday: [
//     { time: "09:00 AM", class: "Strength Training", trainer: "Mike Brown", duration: "60 min", color: "red" },
//     { time: "11:00 AM", class: "Spin Class", trainer: "Emily Davis", duration: "45 min", color: "blue" },
//     { time: "01:00 PM", class: "Yoga Flow", trainer: "Sarah Johnson", duration: "60 min", color: "green" },
//   ],
// }

// export default function Schedule() {
//   return (
//     <PageTransition>
//       <Navbar />

//       <Hero
//         title="Schedule"
//         subtitle="WEEKLY TIMETABLE"
//         description="Find the perfect class that fits your schedule and fitness goals."
//         image="/images/schedule-hero.jpg"
//         height="h-[100vh]"
//       />

//       {/* Schedule Section */}
//       <section className="py-20 bg-gray-900">
//         <div className="container-custom">
//           <SectionTitle
//             tag="CLASS TIMETABLE"
//             title="Weekly <span class='text-red-500'>Schedule</span>"
//             description="Browse our comprehensive weekly class schedule and find the perfect time to work out."
//           />

//           <ScheduleTable schedule={scheduleData} />
//         </div>
//       </section>

//       {/* Class Categories Section */}
//       <section className="py-20 bg-black">
//         <div className="container-custom">
//           <SectionTitle
//             tag="CLASS CATEGORIES"
//             title="Our <span class='text-red-500'>Class Types</span>"
//             description="Learn more about the different types of classes we offer."
//           />

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Strength Training",
//                 description:
//                   "Build muscle, increase strength, and improve bone density with our comprehensive strength training classes.",
//                 color: "red",
//               },
//               {
//                 title: "Cardio",
//                 description:
//                   "Improve cardiovascular health, burn calories, and boost endurance with our high-energy cardio sessions.",
//                 color: "blue",
//               },
//               {
//                 title: "Yoga & Flexibility",
//                 description:
//                   "Enhance flexibility, balance, and mental well-being with our range of yoga and stretching classes.",
//                 color: "green",
//               },
//               {
//                 title: "HIIT & CrossFit",
//                 description:
//                   "Maximize calorie burn and boost metabolism with high-intensity interval training and CrossFit workouts.",
//                 color: "yellow",
//               },
//               {
//                 title: "Dance & Rhythmic",
//                 description:
//                   "Have fun while getting fit with our dance-based fitness classes like Zumba and Dance Fitness.",
//                 color: "pink",
//               },
//               {
//                 title: "Specialized Training",
//                 description:
//                   "Target specific areas or goals with specialized classes like TRX, Kettlebell, and Core Conditioning.",
//                 color: "purple",
//               },
//             ].map((category, index) => (
//               <motion.div
//                 key={category.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
//                 viewport={{ once: true }}
//                 className="bg-gray-900 p-6 rounded-lg"
//               >
//                 <div className={`w-4 h-4 rounded-full  mb-4`}></div>
//                 <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
//                 <p className="text-gray-400">{category.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Class Booking Info Section */}
//       {/* <section className="py-20 bg-gray-900">
//         <div className="container-custom">
//           <SectionTitle
//             tag="BOOKING INFORMATION"
//             title="How to <span class='text-red-500'>Book Classes</span>"
//             description="Learn how to reserve your spot in our popular fitness classes."
//           />

//           <div className="max-w-3xl mx-auto">
//             <div className="bg-gray-800 p-8 rounded-xl">
//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-xl font-bold text-white mb-3">Booking Methods</h3>
//                   <ul className="list-disc pl-5 text-gray-400 space-y-2">
//                     <li>Through our mobile app (recommended)</li>
//                     <li>Via our website member portal</li>
//                     <li>By calling our reception desk</li>
//                     <li>In person at the gym</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-bold text-white mb-3">Booking Policies</h3>
//                   <ul className="list-disc pl-5 text-gray-400 space-y-2">
//                     <li>Classes can be booked up to 7 days in advance</li>
//                     <li>Please arrive 10 minutes before class start time</li>
//                     <li>Late arrivals (5+ minutes) may lose their spot to waitlisted members</li>
//                     <li>Cancellations must be made at least 4 hours before class time</li>
//                     <li>No-shows or late cancellations may incur a fee</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-bold text-white mb-3">Waitlist System</h3>
//                   <p className="text-gray-400 mb-3">
//                     If a class is full, you can join the waitlist. If a spot becomes available, you'll be automatically
//                     enrolled and notified via email and app notification.
//                   </p>
//                 </div>

//                 <div className="bg-red-500/10 p-4 rounded-lg">
//                   <h3 className="text-lg font-bold text-red-500 mb-2">Important Note</h3>
//                   <p className="text-gray-300">
//                     Class schedules are subject to change based on instructor availability and holidays. Always check
//                     the app or website for the most up-to-date schedule.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       <Footer />
//     </PageTransition>
//   )
// }
