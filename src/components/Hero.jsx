import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import img1 from "/images/homepage.jpg";
import img2 from "/images/homepage.2.jpg";
import img3 from "/images/467345860_868626418786647_2557558075871522365_n.webp";
import img4 from "/images/468525663_17891251626124910_2461844413795903866_n.jpg";
// // import video1 from "../video/100546-video-720.mp4";
// // import video2 from "../video/mixkit-52086-video-52086-hd-ready.mp4";
// // import video3 from "../video/mixkit-52088-video-52088-hd-ready.mp4";
//  import video1 from "../video/mixkit-52086-video-52086-hd-ready.mp4";
// import video2 from "../video/WhatsApp Video 2025-05-24 at 09.55.00_7a449cd5.mp4";
// import video3 from "../video/WhatsApp Video 2025-05-24 at 09.55.02_cef34d6e.mp4";
// import video4 from "../video/100548-video-720.mp4";

export default function Hero({
  buttons = true,
  height = "h-screen",
  overlay = "from-black/60",
}) {
  const slides = [
    {
      // video: video1,
      image: img1,
      title: "Push Your Limits",
      subtitle: "Strength & Power",
      description:
        "Unlock your full potential with guided workouts and expert tips.",
    },
    {
      // video: video2,
      image: img2,
      title: "Train Like a Pro",
      subtitle: "Endurance Training",
      description:
        "Build stamina and improve your health with our elite programs.",
    },
    {
      // video: video3,
      image: img3,
      title: "Shape Your Body",
      subtitle: "Fat Burn",
      description:
        "Join a community committed to fitness, health, and results.",
    },
    {
      // video: video4,
      image: img4,
      title: "Unleash Your Inner Strength",
      subtitle: "Strenght & Power",
      description:
        "Forge a powerful physique with high-intensity strength training.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto-slide setup
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Manual slide controls
  const goToSlide = (index) => {
    setCurrentIndex(index);
    startAutoSlide(); // Reset the auto-slide timer
  };

  const goToPrev = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    goToSlide(newIndex);
  };

  const { image, video, title, subtitle, description } = slides[currentIndex];

  return (
    <section
      className={`relative ${height} flex items-center bg-white overflow-hidden`}
    >
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out">
        <img
          src={image}
          alt="Background"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        {/* <video
          key={video}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-opacity duration-1000"
        /> */}
        <div className={`absolute inset-0 bg-gradient-to-r ${overlay}`} />
      </div>

      {/* Foreground Content */}
      <div className="container-custom z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            {subtitle && (
              <motion.div
                key={subtitle}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-bold text-red-500 mb-4"
              >
                {subtitle}
              </motion.div>
            )}

            <motion.h1
              key={title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              {title}
            </motion.h1>

            <motion.p
              key={description}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-lg mb-8 max-w-lg"
            >
              {description}
            </motion.p>

            {buttons && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/Workouts" className="btn-primary">
                  Explore Workout
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            <div className="relative h-[500px] w-full" />
          </motion.div>
        </div>
      </div>

      {/* Slider Buttons */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={goToPrev}
          className="text-white bg-black/40 hover:bg-black/70 p-3 rounded-full"
        >
          ❮
        </button>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={goToNext}
          className="text-white bg-black/40 hover:bg-black/70 p-3 rounded-full"
        >
          ❯
        </button>
      </div>

      {/* Optional Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
      >
        {/* Optional Scroll Icon */}
      </motion.div>
    </section>
  );
}
