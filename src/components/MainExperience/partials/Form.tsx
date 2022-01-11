import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { TExperience } from "../../../App";
import { UIInput } from "../../../components-ui/Input";
import { UITextArea } from "../../../components-ui/TextArea";

interface Props {
  setAllExperiences: Dispatch<SetStateAction<TExperience[]>>;
  allExperiences: TExperience[];
  onChangeDate: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeClient: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeDescriptions: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Form: FC<Props> = ({
  setAllExperiences,
  allExperiences,
  onChangeDate,
  onChangeTitle,
  onChangeClient,
  onChangeDescriptions,
}) => {
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
      <button onClick={() => onRemoveExperience(el.id)}>
        Remove experience
      </button>
    </div>
  ));
  return <>{renderExperiences}</>;
};
