import React from 'react';

/**
 * Reusable Button component with different variants and styles.
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - The content inside the button (text, icons, etc.)
 * @param {function} props.onClick - The click handler function
 * @param {'primary' | 'secondary' | 'outline' | 'danger'} [props.variant='primary'] - Defines the button's style.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes for customization.
 * @param {boolean} [props.disabled=false] - Disables the button and changes its appearance.
 * @param {string} [props.type='button'] - The HTML button type (submit, reset, button).
 * @returns {JSX.Element}
 */
const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false, type = 'button' }) => {
    let baseStyle = 'px-6 py-3 rounded-xl transition-all duration-300 ease-in-out shadow-lg transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ';

    // Apply variant-specific styling
    switch (variant) {
        case 'secondary':
            baseStyle += 'bg-gray-200 hover:bg-gray-300 text-gray-800';
            break;
        case 'outline':
            baseStyle += 'bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:shadow-xl';
            break;
        case 'danger':
            baseStyle += 'bg-red-600 hover:bg-red-700 text-white';
            break;
        case 'primary':
        default:
            baseStyle += 'bg-gray-900 hover:bg-gray-700 text-white';
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