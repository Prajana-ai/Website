import React from 'react';

export const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-prajana-deep-blue dark:text-white sm:text-4xl mb-6 relative inline-block">
            Terms of Service
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-prajana-purple to-prajana-cyan rounded-full"></span>
          </h1>
          <p className="text-prajana-deep-blue/60 dark:text-prajana-ice-blue/60">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        <div className="prose dark:prose-invert max-w-none space-y-12 text-prajana-deep-blue/80 dark:text-prajana-ice-blue/70">

          {/* Intro */}
          <section className="bg-prajana-ice-blue/30 dark:bg-prajana-deep-blue/10 rounded-2xl p-8 border border-prajana-purple/10">
            <p className="text-lg leading-relaxed mb-4">
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the [Your Website URL] website (the "Service") operated by Prajana AI Labs ("us", "we", or "our").
            </p>
            <p className="leading-relaxed">
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms.
            </p>
          </section>

          {/* Accounts */}
          <section>
            <h2 className="text-2xl font-bold text-prajana-deep-blue dark:text-white mb-4 flex items-center">
              <span className="w-2 h-8 bg-prajana-purple rounded-full mr-3"></span>
              Accounts
            </h2>
            <p className="leading-relaxed">
              When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-prajana-deep-blue dark:text-white mb-4 flex items-center">
              <span className="w-2 h-8 bg-prajana-cyan rounded-full mr-3"></span>
              Intellectual Property
            </h2>
            <p className="leading-relaxed">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Prajana AI Labs and its licensors. The Service is protected by copyright, trademark, and other laws of both the [Your Country] and foreign countries.
            </p>
          </section>

          {/* Links */}
          <section>
            <h2 className="text-2xl font-bold text-prajana-deep-blue dark:text-white mb-4 flex items-center">
              <span className="w-2 h-8 bg-prajana-purple rounded-full mr-3"></span>
              Links To Other Web Sites
            </h2>
            <p className="leading-relaxed mb-4">
              Our Service may contain links to third-party web sites or services that are not owned or controlled by Prajana AI Labs.
            </p>
            <div className="bg-white dark:bg-prajana-deep-blue/20 p-6 rounded-xl border border-prajana-purple/10">
              <p className="text-sm leading-relaxed italic">
                Prajana AI Labs has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Prajana AI Labs shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
              </p>
            </div>
          </section>

          {/* Termination & Governing Law */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h2 className="text-2xl font-bold text-prajana-deep-blue dark:text-white mb-4">Termination</h2>
              <p className="leading-relaxed">
                We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-prajana-deep-blue dark:text-white mb-4">Governing Law</h2>
              <p className="leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction/Country], without regard to its conflict of law provisions.
              </p>
            </section>
          </div>

          {/* Changes */}
          <section className="bg-prajana-ice-blue/30 dark:bg-prajana-deep-blue/10 rounded-2xl p-8 border border-prajana-purple/10">
            <h2 className="text-2xl font-bold text-prajana-deep-blue dark:text-white mb-4">Changes</h2>
            <p className="leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-prajana-purple/10 pt-8">
            <h2 className="text-2xl font-bold text-prajana-deep-blue dark:text-white mb-4">Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
            <ul className="list-none bg-white dark:bg-prajana-deep-blue/20 p-6 rounded-xl border border-prajana-purple/10 inline-block">
              <li className="flex items-center">
                <span className="font-semibold text-prajana-purple dark:text-prajana-cyan mr-2">By email:</span>
                <a href="mailto:info@prajana.ai" className="hover:text-prajana-purple transition-colors">info@prajana.ai</a>
              </li>
            </ul>
          </section>

          <p className="mt-8 text-sm text-red-500/80 italic">
            <strong>Disclaimer:</strong> This is a generic Terms of Service template. Please consult with a legal professional to ensure this document meets your specific needs and complies with all applicable laws and regulations.
          </p>

        </div>
      </div>
    </div>
  );
};
