/* eslint-disable react/prop-types */

interface ErrorProps {
  message?: string; 
}

export const Error: React.FC<ErrorProps> = ({ message }) => {
  if (!message) return null;
  return <p className="text-red-500 text-xs font-medium">{message}</p>;
};