import { Leaf, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Leaf className="h-8 w-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                <div className="absolute inset-0 bg-emerald-400/20 blur-xl group-hover:bg-emerald-400/40 transition-all"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                EcoFuture
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Where Sustainability Meets Innovation. Building a greener, smarter planet through technology.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-400 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Innovations', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-emerald-400 font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group relative p-2 rounded-lg bg-slate-800 hover:bg-emerald-500/20 transition-all"
                >
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                  <div className="absolute inset-0 bg-emerald-400/0 group-hover:bg-emerald-400/10 blur-xl transition-all rounded-lg"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} EcoFuture. All rights reserved. Building a sustainable tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
