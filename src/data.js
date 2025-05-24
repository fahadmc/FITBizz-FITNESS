import { time } from "framer-motion";

export const plans = [
  {
    name: "Basic",
    price: 29,
    annualPrice: 25,
    features: [
      "Access to all gym equipment",
      "Locker room access",
      "1 Group class per week",
      "Mobile app access",
      "Free parking"
    ],
    excluded: [
      "Personal training",
      "Nutrition consultation",
      "Guest passes"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: 59,
    annualPrice: 49,
    features: [
      "All Basic features",
      "Unlimited group classes",
      "3 Personal training sessions/month",
      "1 Nutrition consultation",
      "2 Guest passes/month"
    ],
    excluded: [
      "Additional personal training",
      "Extra guest passes"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: 99,
    annualPrice: 79,
    features: [
      "All Premium features",
      "Unlimited personal training",
      "Monthly nutrition consultation",
      "5 Guest passes/month",
      "Priority booking",
      "Towel service"
    ],
    excluded: [],
    popular: false
  }
];

export const classes = [
  {
    title: "Powerlifting ",
    description: "Build maximum strength and improve muscle mass with expert powerlifting coaching.",
    image: "src/images/456276578_1966133777185160_7505210778490332381_n.webp",
    category: "strength",
    color: "bg-black-50",
    schedule: [
      { day: "Monday", time: "6:00 PM" },
      { day: "Wednesday", time: "7:00 PM" },
      { day: "Friday", time: "6:00 PM" }
    ],
    intensity: "High",
    duration: "60 mins"
  },
  {
    title: "Cardio &  Endurance",
    description: "Boost your heart health and stamina with tailored cardio workouts.",
    image: "/src/images/cardio.jpg",
    category: "cardio",
    color: "bg-black-50",
    schedule: [
      { day: "Tuesday", time: "6:30 AM" },
      { day: "Thursday", time: "6:30 AM" },
      { day: "Saturday", time: "9:00 AM" }
    ],
    intensity: "Medium-High",
    duration: "45 mins"
  },
  {
    title: "Personal Trainers",
    description: "Stay motivated and achieve results faster with personalized coaching.",
    image: "src/images/prs-trainer.jpg",
    category: "flexibility",
    color: "bg-black-50",
    schedule: [
      { day: "Monday", time: "7:00 AM" },
      { day: "Wednesday", time: "7:00 AM" },
      { day: "Friday", time: "7:00 AM" },
      { day: "Sunday", time: "10:00 AM" }
    ],
    intensity: "Low-Medium",
    duration: "60 mins"
  },
  {
    title: "Body Building",
    description: "Boost confidence and improve overall health through dedicated training.",
    image: "src/images/bdbuilder.jpg",
    category: "strength",
    color: "bg-black-50",
    schedule: [
      { day: "Tuesday", time: "6:00 PM" },
      { day: "Thursday", time: "6:00 PM" },
      { day: "Saturday", time: "10:00 AM" }
    ],
    intensity: "Very High",
    duration: "30 mins"
  },
  {
    title: "Fat Loss Program",
    description: "Achieve a leaner, healthier body while boosting energy and metabolism.",
    image: "src/images/ftless.jpg",
    category: "cardio",
    color: "bg-black-50",
    schedule: [
      { day: "Monday", time: "5:00 PM" },
      { day: "Wednesday", time: "5:00 PM" },
      { day: "Saturday", time: "11:00 AM" }
    ],
    intensity: "High",
    duration: "75 mins"
  },
  {
    title: "Strenght Training",
    description: "Enhance endurance, boost metabolism, and support injury prevention.",
    image: "src/images/strghth.jpg",
    category: "strength",
    color: "bg-black-50",
    schedule: [
      { day: "Tuesday", time: "5:30 PM" },
      { day: "Thursday", time: "5:30 PM" },
      { day: "Sunday", time: "9:00 AM" }
    ],
    intensity: "Medium-High",
    duration: "50 mins"
  },
  {
    title: "Group Training",
    description: "Enjoy expert guidance while building community and accountability.",
    image: "src/images/grptrain.jpg",
    category: "flexibility",
    color: "bg-black-50",
    schedule: [
      { day: "Monday", time: "12:00 PM" },
      { day: "Wednesday", time: "12:00 PM" },
      { day: "Friday", time: "12:00 PM" }
    ],
    intensity: "Low",
    duration: "55 mins"
  },
  {
    title: "Nutrition Advices",
    description: "Learn healthy eating habits that boost energy and improve performance.",
    image: "src/images/nutrition.jpg",
    category: "hiit",
    color: "bg-black-50",
    schedule: [
      { day: "Tuesday", time: "7:00 AM" },
      { day: "Thursday", time: "7:00 AM" },
      { day: "Saturday", time: "8:00 AM" }
    ],
    intensity: "Very High",
    duration: "40 mins"
  },
  {
    title: "Certified & Friendly Staff",
    description: "Friendly support ensures a motivating and welcoming gym experience.",
    image: "src/images/friendly.jpg",
    category: "hiit",
    color: "bg-black-50",
    schedule: [
      { day: "Monday", time: "6:30 PM" },
      { day: "Wednesday", time: "6:30 PM" },
      { day: "Friday", time: "6:30 PM" }
    ],
    intensity: "Medium-High",
    duration: "60 mins"
  }
];




export const blogPosts = [
  {
    id: "1",
    title: "Swimming Coaching",
    excerpt: "Learn the essential principles of strength training to build muscle and prevent injuries.",
    image: "src/images/swimming.jpg",
     time: "sat-Thu 04:00pm Ownward",
     color: "bg-black-50",
   
  },
  {
    id: "2",
    title: "Football Coaching",
    excerpt: "Fuel your body with the right nutrients for optimal performance and recovery.",
    image: "src/images/football.jpg",
    time: "sat- 04:00pm To 06:00pm ---- sun&Tue - 05:30pm To 07:00pm",
    color: "bg-black-50",
   
  },
  {
    id: "3",
    title: "Badminton Coaching",
    excerpt: "Improve mobility and reduce soreness with these effective stretching methods.",
    image: "src/images/badminton.jpg",
     time: "sun-Thu  04:00pm To 06:00pm ---- Fri&Sat - 02:00pm To 06:00pm",
     color: "bg-black-50",
  
  },
  
];


export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    image: "/images/testimonials/sarah.jpg",
    rating: 5,
    quote: "Training here has completely changed my life. The coaches are motivating, knowledgeable, and truly care about your progress.",
  },
  {
    name: "Mark Thompson",
    role: "Athlete",
    image: "/images/testimonials/mark.jpg",
    rating: 4,
    quote: "Great environment and even better results. The trainers push you without making it feel overwhelming.",
  },
  {
    name: "Emily Davis",
    role: "Yoga Practitioner",
    image: "/images/testimonials/emily.jpg",
    rating: 5,
    quote: "I love the personalized approach. They helped me build a plan that works for my lifestyle and schedule.",
  },
  {
    name: "James Carter",
    role: "Beginner",
    image: "/images/testimonials/james.jpg",
    rating: 4,
    quote: "The support from the team is amazing. I never felt judged, only encouraged to do better each session.",
  },
  {
    name: "Olivia Martinez",
    role: "Weight Loss Journey",
    image: "/images/testimonials/olivia.jpg",
    rating: 5,
    quote: "I lost over 20 pounds with the help of the team here. The community and guidance are unmatched!",
  },
]


export const trainers = [
  {
    name: "Alex Johnson",
    specialty: "Strength Training",
    image: "/images/trainers/alex.jpg",
    bio: "Certified strength coach with 8+ years of experience helping clients build muscle and boost performance.",
  },
  {
    name: "Brianna Lee",
    specialty: "Weight Loss",
    image: "/images/trainers/brianna.jpg",
    bio: "Expert in sustainable fat loss strategies and habit coaching tailored to individual lifestyles.",
  },
  {
    name: "Carlos Rivera",
    specialty: "Sports Performance",
    image: "/images/trainers/carlos.jpg",
    bio: "Athletic trainer focused on improving agility, power, and endurance for athletes of all levels.",
  },
  {
    name: "Dana White",
    specialty: "Rehabilitation",
    image: "/images/trainers/dana.jpg",
    bio: "Rehab specialist helping clients recover from injuries and regain functional movement safely.",
  },
  {
    name: "Ella Zhang",
    specialty: "Yoga & Mobility",
    image: "/images/trainers/ella.jpg",
    bio: "Yoga instructor and mobility expert passionate about helping people move pain-free and mindfully.",
  },
  {
    name: "Franklin Moore",
    specialty: "High-Intensity Training",
    image: "/images/trainers/franklin.jpg",
    bio: "Certified HIIT coach pushing clients to their peak with intense, effective training sessions.",
  },
];