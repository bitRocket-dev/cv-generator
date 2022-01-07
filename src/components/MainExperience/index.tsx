import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";
import { TExperience } from "../../App";
import { UIInput } from "../../components-ui/Input";
import { UITextArea } from "../../components-ui/TextArea";

interface Props {
  setAllExperiences: Dispatch<SetStateAction<TExperience[]>>;
  allExperiences: TExperience[];
}

export const MainExperience: FC<Props> = ({
  setAllExperiences,
  allExperiences,
}) => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [descriptions, setDescriptions] = useState("");

  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) =>
    setDate(e.target.value);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const onChangeClient = (e: ChangeEvent<HTMLInputElement>) =>
    setClient(e.target.value);

  const onChangeDescriptions = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDescriptions(e.target.value);

  const onAddExperience = () => {
    setAllExperiences([
      ...allExperiences,
      { date, title, client, descriptions },
    ]);
    setDate("");
    setTitle("");
    setClient("");
    setDescriptions("");
  };

  return (
    <div style={{ width: "100%" }}>
      <h2># main.experiences</h2>
      <UIInput
        value={date}
        label="Date"
        onChange={onChangeDate}
        placeholder="2020 - 2021"
      />
      <UIInput value={title} label="Title" onChange={onChangeTitle} />
      <UIInput value={client} label="Client" onChange={onChangeClient} />
      <UITextArea
        value={descriptions}
        label="Description"
        onChange={onChangeDescriptions}
      />

      <button onClick={onAddExperience}>Add experience</button>

      {allExperiences.map((el, index) => (
        <div style={{ marginBottom: 15, marginTop: 15 }} key={index}>
          <div>{el.date}</div>
          <div>{el.title}</div>
          <div>{el.client}</div>
          <div style={{ overflowWrap: "break-word" }}>{el.descriptions}</div>
        </div>
      ))}
    </div>
  );
};
