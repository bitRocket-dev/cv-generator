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
  const randomId = Math.random().toString();
  const [form, setForm] = useState<TExperience>({
    id: randomId,
    date: "",
    title: "",
    client: "",
    descriptions: "",
  });

  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, date:e.target.value});
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, title: e.target.value });
  };

  const onChangeClient = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, client: e.target.value });
  };

  const onChangeDescriptions = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setForm({...form, descriptions:e.target.value})
  };

  const onAddExperience = () => {
    setAllExperiences([
      ...allExperiences,
      form
    ]);
    setForm({
      id: randomId,
      date: "",
      title: "",
      client: "",
      descriptions: "",
    })
  };

  const onRemoveExperience = (id: string) => {
    const formattedList = allExperiences.filter((item) => item.id !== id);
    setAllExperiences(formattedList);
  };

  const renderExperiences = allExperiences.map((el, index) => (
    <div style={{ marginBottom: 15, marginTop: 15 }} key={index}>
      <UIInput
        value={el.date}
        label="Date"
        onChange={onChangeDate}
        placeholder="2020 - 2021"
      />
      <UIInput value={el.title} label="Title" onChange={onChangeTitle} />
      <UIInput value={el.client} label="Client" onChange={onChangeClient} />

      <UITextArea
        value={el.descriptions}
        label="Description"
        onChange={onChangeDescriptions}
      /> 
      <button onClick={() => onRemoveExperience(el.id)}>Remove experience</button>
    </div>
  ));

  return (
    <div style={{ width: "100%" }}>
      <h2># main.experiences</h2>
      {renderExperiences}

       <UIInput
        value={form.date}
        label="Date"
        onChange={onChangeDate}
        placeholder="2020 - 2021"
      /> 
      <UIInput value={form.title} label="Title" onChange={onChangeTitle} />
      <UIInput value={form.client} label="Client" onChange={onChangeClient} />
      
      <UITextArea
        value={form.descriptions}
        label="Description"
        onChange={onChangeDescriptions}
      />

      <button onClick={onAddExperience}>Add experience</button>
    </div>
  );
};
