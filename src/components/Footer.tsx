
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-blue-50 text-blue-800 py-12 dark:bg-blue-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">prajana AI labs</h3>
            <p className="text-blue-600">
              A KoXist Foundation Initiative
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-600 hover:text-blue-900 transition-colors">About</Link></li>
              <li><Link to="/works" className="text-blue-600 hover:text-blue-900 transition-colors">Works</Link></li>
              <li><Link to="/about-koxist" className="text-blue-600 hover:text-blue-900 transition-colors">Our Vision (KoXist)</Link></li>
              <li><Link to="/community" className="text-blue-600 hover:text-blue-900 transition-colors">Community</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-blue-600 hover:text-blue-900 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-blue-600 hover:text-blue-900 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link to="/contact-us" className="text-blue-600 hover:text-blue-900 transition-colors">Contact Us</Link></li>
              <li><Link to="/about-koxist" className="text-blue-600 hover:text-blue-900 transition-colors">About KoXist Foundation</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-200 mt-12 pt-8 text-center text-blue-600">
          <p>&copy; {new Date().getFullYear()} prajana AI labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
