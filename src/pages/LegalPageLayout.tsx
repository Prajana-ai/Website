import React, { ReactNode } from 'react';

interface LegalPageLayoutProps {
  children: ReactNode;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ children }) => {
  return <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">{children}</div>;
};