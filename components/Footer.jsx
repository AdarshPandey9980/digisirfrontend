import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#002B5B] text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
          {/* Company Info Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <img
                src="/logo.jpeg" // Update path to match your project structure
                alt="DigiSir Logo"
                width={40}
                height={40}
              />
              <h2 className="text-2xl font-bold">DigiSir</h2>
            </div>
            <p className="text-gray-300 max-w-xs mx-auto">
              Empowering education through digital innovation. Transform your teaching journey with DigiSir.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "#about" },
                { name: "Features", link: "#features" },
                { name: "Pricing", link: "#pricing" },
                { name: "Contact Us", link: "#contact" },
                { name: "FAQ", link: "#faq" }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center space-x-3">
                <Mail className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">infohellodigisir@gmail.com</span>
              </li>
              <li className="flex items-center justify-center space-x-3">
                <Phone className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">+91 7770030131</span>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-4">
              <h1 className="my-3 text-lg font-semibold">Facing any technical issue? Contact here</h1>
              <li className="flex items-center justify-center space-x-3">
                <Phone className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">+91 95118 68948</span>
              </li>
              <h1 className="my-3 text-lg font-semibold">Want to talk administrative sales service?</h1>
              <li className="flex items-center justify-center space-x-3">
                <Phone className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">+91 73850 14856</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} DigiSir. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
