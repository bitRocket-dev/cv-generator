import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { UITextArea } from "../../components-ui/TextArea";

interface Props {
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
}
export const AboutMe: FC<Props> = ({ description, setDescription }) => {
  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);

  return (
    <div style={{ width: "100%" }}>
      <h2># about.me</h2>
      <UITextArea
        value={description}
        label="Description"
        onChange={onChangeDescription}
      />
    </div>
  );
};
