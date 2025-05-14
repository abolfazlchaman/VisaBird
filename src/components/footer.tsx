'use client';

import Link from 'next/link';
import { DoveLogo } from './dove-logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link
              href="/"
              className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <DoveLogo className="text-indigo-400 text-2xl" />
              <span className="text-xl font-bold">VisaBird</span>
            </Link>
            <p className="text-gray-400">
              Helping international professionals find visa sponsorship opportunities worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#search" className="text-gray-400 hover:text-white transition">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-400 hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-400 hover:text-white transition">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <Link href="mailto:help@visabird.work">help@visabird.work</Link>
              <Link
                href="mailto:help@visabird.work"
                className="text-gray-400 hover:text-white transition"
              >
                <i className="fa-solid fa-envelope text-xl"></i>
              </Link>
              {/* <Link
                href="https://linkedin.com/company/visabird"
                className="text-gray-400 hover:text-white transition"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </Link> */}
              <Link
                href="https://github.com/abolfazlchaman/VisaBird/"
                className="text-gray-400 hover:text-white transition"
              >
                <i className="fab fa-github text-xl"></i>
              </Link>
            </div>
            <p className="text-gray-400">Subscribe to our newsletter for updates</p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg bg-gray-700 text-white focus:outline-none w-full"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} VisaBird. All rights reserved.
          </p>
          <p className="text-gray-400">Made with 🤍 by the VisaBird team</p>
        </div>
      </div>
    </footer>
  );
}
