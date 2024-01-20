import React, { ReactNode } from "react";

// Define the type for Label's props
interface LabelProps {
  id: string;
  children: ReactNode;
}

const formClasses =
  "block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm";

const Label: React.FC<LabelProps> = ({ id, children }) => {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-gray-900"
    >
      {children}
    </label>
  );
};

// Define the type for TextField's props
interface TextFieldProps {
  id: string;
  label?: string;
  type?: "text" | "number" | "email" | "password" | string; // You can add more types if needed
  className?: string;
  [x: string]: any; // For additional props like 'placeholder', 'value', etc.
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  type = "text",
  className,
  ...props
}) => {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  );
};

export default TextField;
