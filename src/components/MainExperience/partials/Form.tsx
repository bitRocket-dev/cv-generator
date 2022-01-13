import React, { ChangeEvent, FC } from "react";
import { UIInput } from "../../../components-ui/Input";
import { UITextArea } from "../../../components-ui/TextArea";

interface Props {
  date: string;
  client: string;
  title: string;
  description: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: "date" | "client" | "title" | "descriptions"
  ) => void;
}

export const Form: FC<Props> = ({
  date,
  client,
  title,
  description,
  onChange,
}) => {
  return (
    <>
      <UIInput
        value={date}
        label="Date"
        onChange={(e) => onChange(e, "date")}
        placeholder="2020 - 2021"
      />
      <UIInput
        value={title}
        label="Title"
        onChange={(e) => onChange(e, "title")}
      />
      <UIInput
        value={client}
        label="Client"
        onChange={(e) => onChange(e, "client")}
      />
      <UITextArea
        value={description}
        label="Description"
        onChange={(e) => onChange(e, "descriptions")}
      />
    </>
  );
};
