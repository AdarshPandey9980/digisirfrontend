import { Card, CardContent } from "./ui/card"

export function Testimonial({ quote, author, role, avatarSrc }) {
  return (
    <Card className="border border-gray-200 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 overflow-hidden rounded-full">
            <img
              src={avatarSrc || "/placeholder.svg"}
              alt={`Avatar of ${author}`}
              className="w-20 h-20 transition-transform duration-300 hover:scale-110"
            />
          </div>
          <p className="text-lg italic mb-4 text-[#004a9f]">&ldquo;{quote}&rdquo;</p>
          <p className="font-bold text-[#002B5B]">{author}</p>
          <p className="text-sm text-[#004a9f]">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}

