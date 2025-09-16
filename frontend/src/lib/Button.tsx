
import type React from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
    link: string;
    text: string;
    className?: string;
}

const Button = ({ link, text, className = "" }: ButtonProps): React.ReactElement => {
  return (
    <Link 
      to={link} 
      className={`inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 ${className}`}
    >
      {text}
      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  )
}

export default Button