import React from 'react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-prajana-deep-blue dark:text-white sm:text-4xl mb-6 relative inline-block">
            Privacy Policy
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-prajana-purple to-prajana-cyan rounded-full"></span>
          </h1>
          <p className="text-prajana-deep-blue/60 dark:text-prajana-ice-blue/60">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        <div className="prose dark:prose-invert max-w-none space-y-12 text-prajana-deep-blue/80 dark:text-prajana-ice-blue/70">

          {/* Intro */}
          <section className="bg-prajana-ice-blue/30 dark:bg-prajana-deep-blue/10 rounded-2xl p-8 border border-prajana-purple/10">
            <p className="text-lg leading-relaxed">
              Prajana AI Labs ("us", "we", or "our") operates the [Your Website URL] website (the "Service").
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          {/* Information Collection */}
          <section>
            <h2 className="text-2xl font-bold text-prajana-deep-blue dark:text-white mb-4 flex items-center">
              <span className="w-2 h-8 bg-prajana-purple rounded-full mr-3"></span>
              Information Collection and Use
            </h2>
            <p className="mb-6 leading-relaxed">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>

            <div className="bg-white dark:bg-prajana-deep-blue/20 rounded-xl p-6 border border-prajana-purple/10">
              <h3 className="text-xl font-semibold text-prajana-purple dark:text-prajana-cyan mb-3">Types of Data Collected</h3>
              <h4 className="text-lg font-medium text-prajana-deep-blue dark:text-white mb-2">Personal Data</h4>
              <p className="mb-4">
                While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Email address', 'First name and last name', 'Phone number', 'Cookies and Usage Data'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-prajana-deep-blue/80 dark:text-prajana-ice-blue/80">
                    <span className="w-1.5 h-1.5 bg-prajana-cyan rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Use of Data */}
          <section>
            <h2 className="text-2xl font-bold text-prajana-deep-blue dark:text-white mb-4 flex items-center">
              <span className="w-2 h-8 bg-prajana-cyan rounded-full mr-3"></span>
              Use of Data
            </h2>
            <p className="mb-4">Prajana AI Labs uses the collected data for various purposes:</p>
            <ul className="space-y-3">
              {[
                "To provide and maintain the Service",
                "To notify you about changes to our Service",
                "To allow you to participate in interactive features of our Service when you choose to do so",
                "To provide customer care and support",
                "To provide analysis or valuable information so that we can improve the Service",
                "To monitor the usage of the Service",
                "To detect, prevent and address technical issues"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mt-2 w-1.5 h-1.5 bg-prajana-purple rounded-full mr-3 flex-shrink-0"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Security */}
          <section className="bg-prajana-ice-blue/30 dark:bg-prajana-deep-blue/10 rounded-2xl p-8 border border-prajana-purple/10">
            <h2 className="text-2xl font-bold text-prajana-deep-blue dark:text-white mb-4">Security of Data</h2>
            <p className="leading-relaxed">
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-prajana-deep-blue dark:text-white mb-4">Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-prajana-purple/10 pt-8">
            <h2 className="text-2xl font-bold text-prajana-deep-blue dark:text-white mb-4">Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-none bg-white dark:bg-prajana-deep-blue/20 p-6 rounded-xl border border-prajana-purple/10 inline-block">
              <li className="flex items-center">
                <span className="font-semibold text-prajana-purple dark:text-prajana-cyan mr-2">By email:</span>
                <a href="mailto:info@prajana.ai" className="hover:text-prajana-purple transition-colors">info@prajana.ai</a>
              </li>
            </ul>
          </section>

          <p className="mt-8 text-sm text-red-500/80 italic">
            <strong>Disclaimer:</strong> This is a generic Privacy Policy template. Please consult with a legal professional to ensure this policy meets your specific needs and complies with all applicable laws and regulations.
          </p>

        </div>
      </div>
    </div>
  );
};
