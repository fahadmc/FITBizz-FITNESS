import { Star } from "lucide-react"

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="w-full flex-shrink-0 px-4">
      <div className="bg-gray-800 rounded-2xl p-8 md:p-10">
        <div className="flex items-center mb-6">
          <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
            <img
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
            <p className="text-gray-400">{testimonial.role}</p>
            <div className="flex mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-300 text-lg italic">"{testimonial.quote}"</p>
      </div>
    </div>
  )
}
