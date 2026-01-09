import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const ContactUsPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-prajana-deep-blue dark:text-white sm:text-4xl mb-6 relative inline-block">
            Get in Touch
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-prajana-purple to-prajana-cyan rounded-full"></span>
          </h1>
          <p className="text-xl text-prajana-deep-blue/60 dark:text-prajana-ice-blue/60 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you have a question about our services, partnerships, or anything else, our team is ready to answer all your questions.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <div className="group bg-white dark:bg-prajana-deep-blue/20 p-8 rounded-2xl border border-prajana-purple/10 hover:border-prajana-cyan/30 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-prajana-ice-blue/30 dark:bg-prajana-purple/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-prajana-purple dark:text-prajana-cyan" />
            </div>
            <h2 className="text-2xl font-bold text-prajana-deep-blue dark:text-white mb-2">Email Us</h2>
            <p className="text-prajana-deep-blue/60 dark:text-prajana-ice-blue/60 mb-4">
              Drop us a line for general inquiries or support.
            </p>
            <a href="mailto:info@prajana.ai" className="text-lg font-semibold text-prajana-purple dark:text-prajana-cyan hover:underline decoration-2 underline-offset-4">
              info@prajana.ai
            </a>
          </div>

          {/* Phone Card */}
          <div className="group bg-white dark:bg-prajana-deep-blue/20 p-8 rounded-2xl border border-prajana-purple/10 hover:border-prajana-cyan/30 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-prajana-ice-blue/30 dark:bg-prajana-purple/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-prajana-purple dark:text-prajana-cyan" />
            </div>
            <h2 className="text-2xl font-bold text-prajana-deep-blue dark:text-white mb-2">Call Us</h2>
            <p className="text-prajana-deep-blue/60 dark:text-prajana-ice-blue/60 mb-4">
              Speak directly with our team during business hours.
            </p>
            <a href="tel:4256335058" className="text-lg font-semibold text-prajana-purple dark:text-prajana-cyan hover:underline decoration-2 underline-offset-4">
              (425) 633-5058
            </a>
          </div>
        </div>

        {/* Optional Location/Office section could go here if needed */}
        {/* 
        <div className="mt-12 bg-prajana-ice-blue/30 dark:bg-prajana-deep-blue/10 rounded-2xl p-8 border border-prajana-purple/10 flex items-start">
           <MapPin className="w-6 h-6 text-prajana-deep-blue dark:text-white mt-1 mr-4 flex-shrink-0" />
           <div>
             <h3 className="text-lg font-bold text-prajana-deep-blue dark:text-white mb-2">Our Office</h3>
             <p className="text-prajana-deep-blue/70 dark:text-prajana-ice-blue/70">
               123 AI Boulevard, Tech City, WA 98000
             </p>
           </div>
        </div> 
        */}

      </div>
    </div>
  );
};
