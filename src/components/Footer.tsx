import { Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Michael</h3>
            <p className="text-gray-400 text-sm">
              Professional photographer specializing in capturing life&apos;s
              beautiful moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-white transition"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Portrait Photography</li>
              <li className="text-gray-400">Event Photography</li>
              <li className="text-gray-400">Commercial Photography</li>
              <li className="text-gray-400">Fine Art Photography</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 contact@example.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 New York, NY</p>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-white transition"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              {new Date().getFullYear()} &copy; Michaela Cizkova. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
