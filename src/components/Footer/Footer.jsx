import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#0B0D17] text-gray-400 py-16 mb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              DigiTools
            </h2>
            <p className="text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/*Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="About" className="hover:text-white transition-colors">About</a></li>
              <li><a href="Blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="Careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="Press" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Resources & Socials */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4 text-sm mb-6">
              <li><a href="Documentation">Documentation</a></li>
              <li><a href="Help Center">Help Center</a></li>
              <li><a href="Community">Community</a></li>
              <li><a href="Contact">Contact</a></li>
            </ul>
          </div>
            {/* Social Links */}
            <div className="gap-4">
                <h3 className="text-white font-semibold mb-6">Social Links</h3>
              <div className='flex gap-4'>
                <a href="" className="w-8 h-8 rounded-full flex items-center justify-center bg-white">
                <AiFillInstagram />
              </a>
              <a href="" className="w-8 h-8 rounded-full flex items-center justify-center bg-white">
                <FaFacebookSquare />
              </a>
              <a href="" className="w-8 h-8 rounded-full flex items-center justify-center bg-white">
                <FaXTwitter />
              </a>
              </div>
            </div>

        </div>

         {/* copyright section */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="Privacy Policy" className="hover:text-white">Privacy Policy</a>
            <a href="Terms of Service" className="hover:text-white">Terms of Service</a>
            <a href="Cookies" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;