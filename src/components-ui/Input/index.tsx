import React, { ChangeEvent, FC } from "react";

interface Props {
  value: string;
  label: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  onClick?: () => void;
}
export const UIInput: FC<Props> = ({
  value,
  onChange,
  label,
  placeholder,
  type = "text",
  onClick,
}) => {
  return (
    <div>
      <label style={{ display: "block" }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onClick={onClick}
      />
    </div>
  );
};
