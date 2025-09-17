import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, type = "text", placeholder, name, className = "", ...props }, ref) {
    return (
      <>
        {label && (
          <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          ref={ref}
          className={`px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
          {...props}
        />
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
