import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import {
  School,
  Users,
  FileText,
  Bell,
  Calendar,
  Video,
  BarChartIcon as ChartBar,
  MessageCircle,
  ArrowUp,
} from "lucide-react"
import { Button } from "./ui/button"
// import { FeatureBanners } from "./FeatureBanners"
// import { TestimonialSection } from "./TestimonialSection"
// import { Header } from "./Header"

const features = [
  {
    title: "Student Management",
    description: "Comprehensive student data management including US-ID, online forms, and more.",
    icon: <Users className="h-6 w-6" />,
    badges: ["Admission", "Enquiry", "I-Card", "Attendance"],
  },
  {
    title: "Academic Tools",
    description: "Powerful tools for academic management and assessment.",
    icon: <School className="h-6 w-6" />,
    badges: ["Self Paper Generator", "Test Storage", "Progress Reports"],
  },
  {
    title: "Communication",
    description: "Efficient communication channels for students, parents, and staff.",
    icon: <Bell className="h-6 w-6" />,
    badges: ["WhatsApp Integration", "Notices", "Gentle Reminders"],
  },
  {
    title: "Scheduling",
    description: "Comprehensive scheduling and time management features.",
    icon: <Calendar className="h-6 w-6" />,
    badges: ["Timetable", "Lecture Booking", "In/Out Time Tracking"],
  },
  {
    title: "Content Management",
    description: "Robust content creation and management capabilities.",
    icon: <FileText className="h-6 w-6" />,
    badges: ["PDF Storage", "Recorded Lectures", "Notes Distribution"],
  },
  {
    title: "Virtual Learning",
    description: "Advanced virtual and hybrid learning solutions.",
    icon: <Video className="h-6 w-6" />,
    badges: ["Live Lectures", "Hybrid Classes", "Doubt Solving"],
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive analytics and reporting tools for data-driven decisions.",
    icon: <ChartBar className="h-6 w-6" />,
    badges: ["MIS Reports", "Performance Tracking", "Enquiry Analytics"],
  },
  {
    title: "Administration",
    description: "Streamlined administrative tools for efficient institute management.",
    icon: <MessageCircle className="h-6 w-6" />,
    badges: ["Fee Management", "Staff Management", "Event Planning"],
  },
]

export default function FeaturesSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4f8] to-[#e0e8f0]">
      {/* <Header /> */}
      <div className="container mx-auto px-4 py-20">
        <section id="home">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#002B5B]">
            Comprehensive Educational Management System
          </h1>
          <p className="text-xl text-center mb-12 text-[#004a9f]">
            Empower your institution with our all-in-one solution for seamless management and enhanced learning
            experiences.
          </p>
        </section>

        <section id="features">
          {/* <FeatureBanners /> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#002B5B]">
                    <span className="transition-transform duration-300 hover:scale-110">{feature.icon}</span>
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-[#004a9f]">{feature.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {feature.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        variant="secondary"
                        className="bg-[#e0e8f0] text-[#002B5B] transition-colors duration-300 hover:bg-[#002B5B] hover:text-white"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="testimonials">
          {/* <TestimonialSection /> */}
        </section>

        <section id="cta" className="mt-12 text-center">
          <p className="text-2xl font-semibold mb-4 text-[#002B5B]">Ready to transform your educational institute?</p>
          <button className="bg-[#002B5B] text-white hover:bg-[#004a9f] px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            Get Started Today
          </button>
        </section>
      </div>

      <div className="fixed bottom-8 right-8">
        <Button
          onClick={scrollToTop}
          className="bg-[#002B5B] text-white hover:bg-[#004a9f] rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}

