import { useState } from "react"
import { Check, X } from "lucide-react"

const features = [
  { name: "Student Management", common: true },
  { name: "Teacher Management", common: true },
  { name: "Course Management", common: true },
  { name: "Attendance Tracking", common: true },
  { name: "Grade Management", common: true },
  { name: "Fee Management", common: true },
  { name: "Student Track Record via Aadhaar", common: false },
  { name: "Comprehensive Remark History", common: false },
  { name: "Pre-joining Verification", common: false },
  { name: "Seminar Leads Management", common: false },
  { name: "Feedback QR", common: false },
  { name: "PR Assistant", common: false },
  { name: "Brand Building Kit", common: false },
  { name: "Fees Recovery Made Easy", common: false },
  { name: "Bad Debt Reduction", common: false },
  { name: "Stock Manager", common: false },
  { name: "Fees Receipt Generation", common: false },
  { name: "Student ID Card Generation", common: false },
  { name: "Unique ID Generator", common: false },
  { name: "Historic Record Keeping", common: false },
  { name: "Birthday Wishes Reminder", common: false },
]

const systems = ["Basic IMS", "Advanced IMS", "Our IMS"]

function ComparisonPage() {
  const [activeFeature, setActiveFeature] = useState(null)

  const renderCell = (systemIndex, feature) => {
    if (feature.common) {
      return <Check className="text-green-500" />
    }
    if (systemIndex === 2) {
      return <Check className="text-green-500" /> // Show a tick mark for "Our IMS" for exclusive features
    }
    return <X className="text-red-500" />
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#002B5B]">Why choose Digisir?</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-100">
          <caption className="sr-only">Comparison of different Institution Management Systems</caption>
          <thead>
            <tr className="bg-gray-100 p-4">
              <th className="py-2 px-4 border">Features</th>
              {systems.map((system) => (
                <th key={system} className="py-4 px-4 border text-center">
                  {system}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature) => (
              <tr key={feature.name} className="hover:bg-gray-50">
                <td className="py-4 px-4 border">{feature.name}</td>
                {systems.map((_, index) => (
                  <td key={index} className="py-2 px-4 border text-center">
                    {renderCell(index, feature)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ComparisonPage
