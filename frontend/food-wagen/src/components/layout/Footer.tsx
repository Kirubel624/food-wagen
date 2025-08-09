import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Button from "../ui/button";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Help & Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Partner with us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Ride with us
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Refund & Cancellation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-white font-semibold mb-4">FOLLOW US</h4>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
          </div>
          <p className="mb-3 text-sm">
            Receive exclusive offers in your mailbox
          </p>
          <div className="flex">
            <div className="flex items-center bg-gray-700 px-3 rounded-l-md">
              <MdEmail className="!w-6 !h-6" />
              <input
                type="email"
                placeholder="Enter Your email"
                className="bg-gray-700 text-gray-300 px-2 py-2 focus:outline-none w-full"
              />
            </div>
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-sm flex flex-col md:flex-row justify-between items-center px-6">
        <p>
          All rights Reserved &copy;{" "}
          <span className="font-semibold">Food wagen, 2025</span>
        </p>
        <p className="mt-2 md:mt-0">
          Made with <span className="text-yellow-500">♥</span> by{" "}
          <a href="#" className="font-semibold hover:text-white">
            Kirubel
          </a>
        </p>
      </div>
    </footer>
  );
}
