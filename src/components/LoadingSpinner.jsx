import React from 'react';

const LoadingSpinner = ({ size = 'md', color = 'info' }) => {
  const sizeClass = {
    sm: 'spinner-border-sm',
    md: '',
    lg: 'spinner-border-lg'
  }[size];

  return (
    <div className={`spinner-border ${sizeClass} text-${color}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default LoadingSpinner; 