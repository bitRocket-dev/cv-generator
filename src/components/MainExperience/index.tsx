import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";
import { TExperience } from "../../App";
import { Form } from "./partials/Form";

interface Props {
  setAllExperiences: Dispatch<SetStateAction<TExperience>>;
  allExperiences: TExperience;
}

export const MainExperience: FC<Props> = ({
  setAllExperiences,
  allExperiences,
}) => {
  const randomId = Math.random().toString();

  const formList = Object.keys(allExperiences);

  const [form, setForm] = useState({
    id: randomId,
    date: "",
    title: "",
    client: "",
    descriptions: "",
  });

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: "date" | "client" | "title" | "descriptions"
  ) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const onAdd = () => {
    setAllExperiences({ ...allExperiences, [randomId]: form });
    setForm({
      id: randomId,
      date: "",
      title: "",
      client: "",
      descriptions: "",
    });
  };

  const onRemove = (id: string) => {
    delete allExperiences[id];
    setAllExperiences({ ...allExperiences });
  };

  const onUpdate = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string,
    inputKey: "date" | "client" | "title" | "descriptions"
  ) => {
    allExperiences[id][inputKey] = e.target.value;
    setAllExperiences({ ...allExperiences });
  };

  const renderForm = (key: string) => {
    return (
      <div key={key}>
        <Form
          date={allExperiences[key].date}
          client={allExperiences[key].client}
          title={allExperiences[key].title}
          description={allExperiences[key].descriptions}
          onChange={(e, keyForm) => onUpdate(e, key, keyForm)}
        />
        <button onClick={() => onRemove(key)}>Delete</button>
      </div>
    );
  };

  return (
    <div style={{ width: "100%" }}>
      <h2># main.experiences</h2>
      {formList.map(renderForm)}
      <Form
        date={form.date}
        onChange={onChange}
        client={form.client}
        title={form.title}
        description={form.descriptions}
      />

      <button onClick={onAdd}>Add experience</button>
    </div>
  );
};
