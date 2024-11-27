/* eslint-disable react/prop-types */

export const Error = ({ message }: { message: string }) => {
  if (!message) return null;
  return <p className="text-red-500 text-xs font-medium">{message}</p>;
};
