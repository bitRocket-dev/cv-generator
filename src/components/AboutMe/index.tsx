import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface Props {
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
}
export const AboutMe: FC<Props> = ({ description, setDescription }) => {
  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);

  return (
    <div>
      <h2># about.me</h2>
      <div>
        <label style={{ display: "block" }}>Description</label>
        <input
          type="text-area"
          value={description}
          onChange={onChangeDescription}
        />
      </div>
    </div>
  );
};
