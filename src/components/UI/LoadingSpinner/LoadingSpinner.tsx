// src/components/UI/LoadingSpinner/LoadingSpinner.tsx
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="text-center">
        {/* Simple CSS spinner - no heavy animations */}
        <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-neutral-600 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;