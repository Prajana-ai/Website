import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const ContactUsPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Contact Us</h1>
      
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
          We'd love to hear from you! Whether you have a question about our services, partnerships, or anything else, our team is ready to answer all your questions.
        </p>

        <div className="space-y-6">
          <div className="flex items-center">
            <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Email Us</h2>
              <a href="mailto:info@prajana.ai" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                info@prajana.ai
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Call Us</h2>
              <a href="tel:4256335058" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                (425) 633-5058
              </a>
            </div>
          </div>
        </div>

        {/* You can add a contact form here later if needed */}
        {/* <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full name</label>
            <input type="text" name="name" id="name" autoComplete="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send Message
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
};
