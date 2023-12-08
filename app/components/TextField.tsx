import React, { HTMLProps } from "react";

const formClasses =
  "block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm";

interface LabelProps {
  id: string;
  children: React.ReactNode;
}

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

interface TextFieldProps extends HTMLProps<HTMLInputElement> {
  id: string;
  label?: React.ReactNode;
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
