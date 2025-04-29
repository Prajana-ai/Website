import React from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Simple, Transparent Pricing</h1>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300">
          Choose the plan that best fits your needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Starter</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Perfect for small teams</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
              <span className="text-gray-600 dark:text-gray-300">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Check className="w-5 h-5 text-green-500" />
                <span>Up to 5 team members</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Check className="w-5 h-5 text-green-500" />
                <span>10,000 searches/month</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Check className="w-5 h-5 text-green-500" />
                <span>Basic analytics</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Check className="w-5 h-5 text-green-500" />
                <span>Email support</span>
              </li>
            </ul>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-indigo-600 p-8 rounded-lg shadow-lg relative">
            <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
              Popular
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white">Pro</h3>
            <p className="text-indigo-200 mb-6">For growing businesses</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$99</span>
              <span className="text-indigo-200">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2 text-indigo-100">
                <Check className="w-5 h-5 text-white" />
                <span>Up to 20 team members</span>
              </li>
              <li className="flex items-center gap-2 text-indigo-100">
                <Check className="w-5 h-5 text-white" />
                <span>50,000 searches/month</span>
              </li>
              <li className="flex items-center gap-2 text-indigo-100">
                <Check className="w-5 h-5 text-white" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2 text-indigo-100">
                <Check className="w-5 h-5 text-white" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-2 text-indigo-100">
                <Check className="w-5 h-5 text-white" />
                <span>Custom integrations</span>
              </li>
            </ul>
            <button className="w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Enterprise</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">For large organizations</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">Custom</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Check className="w-5 h-5 text-green-500" />
                <span>Unlimited team members</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Check className="w-5 h-5 text-green-500" />
                <span>Unlimited searches</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Check className="w-5 h-5 text-green-500" />
                <span>Custom analytics</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Check className="w-5 h-5 text-green-500" />
                <span>24/7 dedicated support</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Check className="w-5 h-5 text-green-500" />
                <span>SLA guarantee</span>
              </li>
            </ul>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}