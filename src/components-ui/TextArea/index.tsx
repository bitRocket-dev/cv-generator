import React, { ChangeEvent, FC } from "react";

interface Props {
  value: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
export const UITextArea: FC<Props> = ({ value, onChange, label }) => {
  return (
    <div>
      <label style={{ display: "block" }}>{label}</label>
      <textarea
        maxLength={450}
        style={{ width: "100%", height: 50, resize: "none" }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
