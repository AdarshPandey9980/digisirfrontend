import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#002B5B] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png" // Update path to match your Next.js project structure
                alt="DigiSir Logo"
                width={40}
                height={40}
              />
              <h2 className="text-2xl font-bold">DigiSir</h2>
            </div>
            <p className="text-gray-300 max-w-xs leading-relaxed">
              Empowering education through digital innovation. Transform your
              teaching journey with DigiSir.
            </p>
          </div>

          {/* Quick Links */}
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

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">eliteforumsindia@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">+91 9511868948</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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
