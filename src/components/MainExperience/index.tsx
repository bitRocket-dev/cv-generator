import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";
import { TExperience } from "../../App";

interface Props {
  linkedIn: string;
  setLinkedIn: Dispatch<SetStateAction<string>>;
  setAllExperiences: Dispatch<SetStateAction<TExperience[]>>;
  allExperiences: TExperience[];
}

export const MainExperience: FC<Props> = ({
  linkedIn,
  setLinkedIn,
  setAllExperiences,
  allExperiences,
}) => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [descriptions, setDescriptions] = useState("");

  const onChangeLinkedIn = (e: ChangeEvent<HTMLInputElement>) =>
    setLinkedIn(e.target.value);

  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) =>
    setDate(e.target.value);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const onChangeClient = (e: ChangeEvent<HTMLInputElement>) =>
    setClient(e.target.value);

  const onChangeDescriptions = (e: ChangeEvent<HTMLInputElement>) =>
    setDescriptions(e.target.value);

  return (
    <div>
      <h2># main.experiences</h2>
      <div>
        <label style={{ display: "block" }}>LinkedIn</label>
        <input value={linkedIn} onChange={onChangeLinkedIn} />
      </div>
      <div>
        <label style={{ display: "block" }}>date</label>
        <input value={date} onChange={onChangeDate} />
      </div>
      <div>
        <label style={{ display: "block" }}>title</label>
        <input value={title} onChange={onChangeTitle} />
      </div>
      <div>
        <label style={{ display: "block" }}>client</label>
        <input value={client} onChange={onChangeClient} />
      </div>
      <div>
        <label style={{ display: "block" }}>descriptions</label>
        <input value={descriptions} onChange={onChangeDescriptions} />
      </div>

      <button
        onClick={() => {
          setAllExperiences([
            ...allExperiences,
            { date, title, client, descriptions },
          ]);
        }}
      >
        Add experience
      </button>

      {allExperiences.map((el, index) => (
        <div style={{ marginBottom: 15, marginTop: 15 }} key={index}>
          <div>{el.date}</div>
          <div>{el.title}</div>
          <div>{el.client}</div>
          <div>{el.descriptions}</div>
        </div>
      ))}
    </div>
  );
};
