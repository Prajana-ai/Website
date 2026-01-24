
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="relative bg-white dark:bg-prajana-deep-blue pt-16 pb-8 overflow-hidden">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-prajana-purple via-prajana-cyan to-prajana-purple"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-prajana-deep-blue dark:text-white flex items-center">
              <span className="w-2 h-2 rounded-full bg-prajana-purple mr-2"></span>
              prajana AI labs
            </h3>
            <p className="text-prajana-deep-blue/70 dark:text-prajana-ice-blue/60 text-sm leading-relaxed">
              A KoXist Foundation Initiative. Pioneering the future of ethical Human-AI collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-prajana-deep-blue dark:text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Works', path: '/works' },
                { name: 'Vision (KoXist)', path: '/about-koxist' },
                { name: 'Creators', path: '/creators' },
                { name: 'Community', path: '/community' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-prajana-deep-blue/70 dark:text-prajana-ice-blue/70 hover:text-prajana-purple dark:hover:text-prajana-cyan transition-colors text-sm font-medium inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-prajana-deep-blue dark:text-white mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3">
              {[
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Service', path: '/terms-of-service' },
                { name: 'Admin', path: '/admin/login' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-prajana-deep-blue/70 dark:text-prajana-ice-blue/70 hover:text-prajana-purple dark:hover:text-prajana-cyan transition-colors text-sm font-medium inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-prajana-deep-blue dark:text-white mb-6 uppercase tracking-wider text-sm">Stay Connected</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact-us" className="text-prajana-deep-blue/70 dark:text-prajana-ice-blue/70 hover:text-prajana-purple dark:hover:text-prajana-cyan transition-colors text-sm font-medium inline-block hover:translate-x-1 duration-200">
                  Contact Support
                </Link>
              </li>
              <li>
                <a href="mailto:info@prajana.ai" className="text-prajana-deep-blue/70 dark:text-prajana-ice-blue/70 hover:text-prajana-purple dark:hover:text-prajana-cyan transition-colors text-sm font-medium inline-block hover:translate-x-1 duration-200">
                  info@prajana.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-prajana-purple/10 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-prajana-deep-blue/50 dark:text-prajana-ice-blue/40">
            &copy; {new Date().getFullYear()} Prajana AI Labs. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
