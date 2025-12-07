import React from 'react';

/**
 * Reusable Input component for forms with consistent styling.
 * @param {object} props - Component props
 * @param {string} props.label - Optional label displayed above the input field.
 * @param {string} [props.type='text'] - The HTML input type (text, email, password, number, etc.)
 * @param {string} props.value - The current value of the input.
 * @param {function} props.onChange - The change handler function.
 * @param {string} [props.placeholder=''] - Placeholder text for the input.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes for customization.
 * @param {boolean} [props.required=false] - Marks the input as required.
 * @returns {JSX.Element}
 */
const Input = ({ label, type = 'text', value, onChange, placeholder = '', className = '', required = false }) => (
    <div className="flex flex-col w-full">
        {label && (
            <label className="text-sm font-medium text-gray-700 mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
        )}
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={`p-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out shadow-sm w-full ${className}`}
        />
    </div>
);

export default Input;