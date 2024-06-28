import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

const Input:React.FC<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <input
      className="w-full border border-gray-300 shadow-inner text-gray-600 bg-white rounded-lg px-4 py-2 text-2xl outline-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 placeholder:text-400"
      {...props}
    />
  );
};

export default Input;
