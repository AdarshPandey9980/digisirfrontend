import { useState } from "react"
import { Check, X, Info } from "lucide-react"

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
]

const systems = ["Basic IMS", "Advanced IMS", "Our IMS"]

function ComparisonPage() {
  const [activeFeature, setActiveFeature] = useState(null)

  const renderCell = (systemIndex, feature) => {
    if (feature.common) {
      return <Check className="text-green-500" />
    }
    if (systemIndex === 2) {
      return (
        <button
          className="text-blue-500 hover:text-blue-700 flex items-center"
          onClick={() => setActiveFeature(feature.name)}
        >
          <Info className="mr-1" /> Details
        </button>
      )
    }
    return <X className="text-red-500" />
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#002B5B]">Why to choose Digisir?</h1>
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

      {activeFeature && <FeatureDialog feature={activeFeature} onClose={() => setActiveFeature(null)} />}
    </div>
  )
}

function FeatureDialog({ feature, onClose }) {
  const descriptions = {
    "Student Track Record via Aadhaar":
      "Our system allows institutions to view a student's previous track record by using their Aadhaar card number. This feature provides a comprehensive history of the student's academic performance and behavior across different institutions.",
    "Comprehensive Remark History":
      "Both students and teachers have a detailed remark history in their profiles. This feature allows for a holistic view of performance, feedback, and growth over time.",
    "Pre-joining Verification":
      "Institutions can verify both student and teacher records before they join. This feature ensures transparency and helps maintain high standards within the institution.",
  }

  return (
    <div className="fixed inset-0 z-50 bg-opacity-100 flex items-center justify-center p-4 backdrop-blur-lg">
  <div className="bg-white rounded-lg p-6 max-w-md w-full border border-black">
    <h2 className="text-xl font-bold mb-2">{feature}</h2>
    <p className="text-gray-600 mb-4">{descriptions[feature]}</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={onClose}>
      Close
    </button>
  </div>
</div>

  )
}

export default ComparisonPage

