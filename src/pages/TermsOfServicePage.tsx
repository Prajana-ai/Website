import React from 'react';

export const TermsOfServicePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Terms of Service</h1>
      
      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <p className="mb-4">
          Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the [Your Website URL] website (the "Service") operated by Prajana AI Labs ("us", "we", or "our").
        </p>
        <p className="mb-4">
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
        </p>
        <p className="mb-4">
          By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Accounts</h2>
        <p className="mb-4">
          When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Intellectual Property</h2>
        <p className="mb-4">
          The Service and its original content, features, and functionality are and will remain the exclusive property of Prajana AI Labs and its licensors. The Service is protected by copyright, trademark, and other laws of both the [Your Country] and foreign countries.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Links To Other Web Sites</h2>
        <p className="mb-4">
          Our Service may contain links to third-party web sites or services that are not owned or controlled by Prajana AI Labs.
          Prajana AI Labs has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Prajana AI Labs shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Termination</h2>
        <p className="mb-4">
          We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction/Country], without regard to its conflict of law provisions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Changes</h2>
        <p className="mb-4">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us:
        </p>
        <ul className="list-disc list-inside">
          <li>By email: info@prajana.ai</li>
        </ul>
        <p className="mt-6 text-sm text-red-600 dark:text-red-400">
          <strong>Disclaimer:</strong> This is a generic Terms of Service template. Please consult with a legal professional to ensure this document meets your specific needs and complies with all applicable laws and regulations.
        </p>
      </div>
    </div>
  );
};
