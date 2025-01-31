import { Testimonial } from "./Testmorial"

const testimonials = [
  {
    quote: "This system has revolutionized how we manage our institute. It's user-friendly and comprehensive!",
    author: "Dr. Emily Johnson",
    role: "Principal, Greenwood Academy",
    avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2E1ISMWr2Xdz5yB3pjWAgs0drcWCw9vya5A&s",
  },
  {
    quote: "The virtual learning tools have made remote education a breeze. Our students love it!",
    author: "Prof. Michael Chen",
    role: "Head of IT, Tech University",
    avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2E1ISMWr2Xdz5yB3pjWAgs0drcWCw9vya5A&s",
  },
  {
    quote:
      "The analytics provided by this system have helped us make data-driven decisions to improve our teaching methods.",
    author: "Sarah Thompson",
    role: "Department Head, Sunshine College",
    avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2E1ISMWr2Xdz5yB3pjWAgs0drcWCw9vya5A&s",
  },
]

export function TestimonialSection() {
  return (
    <div className="my-12 mx-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#002B5B]">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

