import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-8">
      <div className="max-w-[86rem] mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-6 md:gap-0">
          {/* Left Section with Links */}
          <div className="flex flex-wrap justify-center gap-4 md:justify-start text-sm text-gray-400">
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
            <Link to="/careers" className="hover:underline">
              Careers
            </Link>
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div>

          {/* Right Section with Social Media Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="text-gray-400 hover:text-white" size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="text-gray-400 hover:text-white" size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="text-gray-400 hover:text-white" size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-gray-400 hover:text-white" size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-4 text-center text-sm text-gray-500">
          <p>
            Built by{" "}
            <Link
              href="https://github.com/xxehacker"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 text-pink-600"
            >
              Mridupawan Bordoloi
            </Link>
            . The source code is available on{" "}
            <Link
              to={"https://github.com/xxehacker/freetime"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 text-pink-600"
            >
              GitHub
            </Link>
            .
          </p>
          <p>
            © {new Date().getFullYear()} Mridupawan Bordoloi. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
