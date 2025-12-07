import React from 'react';
import { AlertTriangle } from 'lucide-react'; 

/**
 * Reusable Input component for forms with consistent styling.
 * FIX: Added name, error, and disabled props for full compatibility with Checkout validation.
 * FIX: Conditionally sets onChange to a no-op function when disabled to silence React warning.
 */
const Input = ({ label, type = 'text', value, onChange, placeholder = '', className = '', required = false, name = '', error = '', disabled = false }) => {

    // FIX: Determine the actual change handler. If the component is disabled, 
    // provide an empty function to silence the React warning.
    const actualOnChange = disabled ? () => {} : onChange;

    return (
        <div className="flex flex-col w-full">
            {label && (
                <label 
                    className={`text-sm font-medium mb-1 ${error ? 'text-red-600' : 'text-gray-700'}`}
                    htmlFor={name}
                >
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                // FIX: Use the conditionally defined handler
                onChange={actualOnChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className={`p-3 border rounded-xl w-full focus:ring-2 focus:ring-indigo-500 
                          ${error ? 'border-red-500' : 'border-gray-300'}
                          ${className}`}
            />
            {error && (
                <p className="mt-1 text-xs text-red-500 flex items-center">
                    <AlertTriangle className="w-3 h-3 mr-1" /> {error}
                </p>
            )}
        </div>
    );
};

export default Input;