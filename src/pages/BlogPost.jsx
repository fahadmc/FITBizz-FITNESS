"use client"

import { useParams } from "react-router-dom"
import { Calendar, User, Tag, Facebook, Twitter, Linkedin } from "lucide-react"

import PageTransition from "../components/PageTransition"
import Navbar from "../components/Navbar"
import SectionTitle from "../components/SectionTitle"
import BlogCard from "../components/BlogCard"
import Footer from "../components/Footer"

// Data
import { blogPosts } from "../data"

export default function BlogPost() {
  const { id } = useParams()

  // Find the current post
  const post = blogPosts.find((post) => post.id === id) || blogPosts[0]

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <PageTransition>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black relative">
        <div className="absolute inset-0 z-0">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
              <div className="flex items-center text-sm text-gray-400">
                <Calendar size={14} className="mr-1" />
                {post.date}
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <User size={14} className="mr-1" />
                {post.author}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>

            <p className="text-xl text-gray-300">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-gray-800 rounded-xl overflow-hidden mb-8">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="prose prose-lg prose-invert max-w-none">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>

                <h2>The Importance of Proper Form</h2>

                <p>
                  Proper form is crucial for maximizing the effectiveness of your workouts and preventing injuries. Many
                  people make the mistake of lifting too heavy or performing exercises incorrectly, which can lead to
                  serious injuries over time.
                </p>

                <p>Here are some key points to remember about maintaining proper form:</p>

                <ul>
                  <li>Start with lighter weights to master the movement pattern</li>
                  <li>Focus on controlled, deliberate movements rather than speed</li>
                  <li>Maintain proper alignment throughout the exercise</li>
                  <li>Breathe properly - generally exhale during exertion</li>
                  <li>Don't sacrifice form for additional reps or weight</li>
                </ul>

                <h2>Creating a Balanced Workout Routine</h2>

                <p>
                  A well-rounded fitness program should include cardiovascular exercise, strength training, and
                  flexibility work. Many people make the mistake of focusing too heavily on one aspect while neglecting
                  others.
                </p>

                <p>For optimal results, consider incorporating the following into your weekly routine:</p>

                <ul>
                  <li>3-5 days of moderate-intensity cardiovascular exercise (150+ minutes per week)</li>
                  <li>2-3 days of full-body strength training, targeting all major muscle groups</li>
                  <li>2-3 days of flexibility work, such as yoga or dedicated stretching sessions</li>
                  <li>At least 1-2 rest or active recovery days</li>
                </ul>

                <h2>Nutrition: The Foundation of Fitness Success</h2>

                <p>
                  No matter how perfect your workout routine is, you cannot out-train a poor diet. Nutrition plays a
                  crucial role in achieving your fitness goals, whether you're looking to build muscle, lose fat, or
                  improve athletic performance.
                </p>

                <p>Some fundamental nutrition principles to follow include:</p>

                <ul>
                  <li>Consume adequate protein to support muscle recovery and growth</li>
                  <li>Eat plenty of fruits and vegetables for essential vitamins and minerals</li>
                  <li>Stay hydrated before, during, and after workouts</li>
                  <li>Time your meals appropriately around your training sessions</li>
                  <li>Adjust your caloric intake based on your specific goals</li>
                </ul>

                <h2>Conclusion</h2>

                <p>
                  By focusing on proper form, creating a balanced workout routine, and prioritizing nutrition, you'll
                  set yourself up for long-term fitness success. Remember that consistency is key, and small
                  improvements over time lead to significant results.
                </p>
              </div>

              {/* Tags */}
              <div className="mt-8 flex items-center flex-wrap gap-3">
                <Tag size={18} className="text-gray-400" />
                {["Fitness", "Workout", "Training", "Exercise"].map((tag) => (
                  <span key={tag} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Share This Article</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-sky-500 p-3 rounded-full transition-colors duration-300">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author */}
              <div className="bg-gray-800 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <img
                    src="/images/author.jpg"
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-white">{post.author}</h4>
                    <p className="text-gray-400">Fitness Coach</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Certified fitness professional with over 10 years of experience in personal training and nutrition
                  coaching.
                </p>
              </div>

              {/* Categories */}
              <div className="bg-gray-800 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                <ul className="space-y-2">
                  {["Fitness", "Nutrition", "Wellness", "Motivation", "Training"].map((cat) => (
                    <li key={cat}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-red-500 transition-colors duration-300 flex justify-between items-center"
                      >
                        <span>{cat}</span>
                        <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                          {Math.floor(Math.random() * 20) + 1}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((recentPost) => (
                    <div key={recentPost.id} className="flex items-start">
                      <img
                        src={recentPost.image || "/placeholder.svg"}
                        alt={recentPost.title}
                        className="w-16 h-16 object-cover rounded-lg mr-3 flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-white font-medium hover:text-red-500 transition-colors duration-300">
                          <a href={`/blog/${recentPost.id}`}>{recentPost.title}</a>
                        </h4>
                        <p className="text-gray-400 text-sm">{recentPost.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <SectionTitle
            tag="RELATED ARTICLES"
            title="You May Also <span class='text-red-500'>Like</span>"
            description="Explore more articles related to this topic."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} delay={0.1 + index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  )
}
