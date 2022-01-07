import React, { ChangeEvent, FC } from "react";

interface Props {
  value: string;
  label: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const UIInput: FC<Props> = ({ value, onChange, label, placeholder }) => {
  return (
    <div>
      <label style={{ display: "block" }}>{label}</label>
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};
