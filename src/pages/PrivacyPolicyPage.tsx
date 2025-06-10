import React from 'react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <p className="mb-4">
          Prajana AI Labs ("us", "we", or "our") operates the [Your Website URL] website (the "Service").
          This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Information Collection and Use</h2>
        <p className="mb-4">
          We collect several different types of information for various purposes to provide and improve our Service to you.
        </p>

        <h3 className="text-xl font-medium mt-4 mb-2">Types of Data Collected</h3>
        <h4 className="text-lg font-normal mt-3 mb-1">Personal Data</h4>
        <p className="mb-4">
          While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Cookies and Usage Data</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Use of Data</h2>
        <p className="mb-4">
          Prajana AI Labs uses the collected data for various purposes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
          <li>To provide customer care and support</li>
          <li>To provide analysis or valuable information so that we can improve the Service</li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Security of Data</h2>
        <p className="mb-4">
          The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="list-disc list-inside">
          <li>By email: info@prajana.ai</li>
          {/* Add other contact methods if applicable */}
        </ul>
        <p className="mt-6 text-sm text-red-600 dark:text-red-400">
          <strong>Disclaimer:</strong> This is a generic Privacy Policy template. Please consult with a legal professional to ensure this policy meets your specific needs and complies with all applicable laws and regulations.
        </p>
      </div>
    </div>
  );
};
