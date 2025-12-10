import React from 'react';

/**
 * Reusable Button component with different variants and styles.
 */
const Button = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
  type = 'button',
}) => {
  let baseStyle =
    'px-6 py-3 rounded-xl transition-all duration-300 ease-in-out shadow-lg transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-semibold tracking-wide';

  // ✅ Brand-based variant styling
  switch (variant) {
    case 'secondary':
      baseStyle +=
        ' bg-cream hover:bg-gray-200 text-gray-800 border border-gray-300';
      break;

    case 'outline':
      baseStyle +=
        ' bg-transparent border-2 border-primary text-primary hover:bg-primary';
      break;

    case 'danger':
      baseStyle +=
        ' bg-primary hover:bg-accent text-white';
      break;

    case 'primary':
    default:
      baseStyle +=
        ' bg-accent hover:bg-primary text-white';
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
