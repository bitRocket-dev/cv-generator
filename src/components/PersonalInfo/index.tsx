import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { UIInput } from "../../components-ui/Input";

interface Props {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  age: string;
  setAge: Dispatch<SetStateAction<string>>;
  git: string;
  setGit: Dispatch<SetStateAction<string>>;
  linkedIn: string;
  setLinkedIn: Dispatch<SetStateAction<string>>;
}

export const PersonalInfo: FC<Props> = ({
  username,
  setUsername,
  age,
  setAge,
  git,
  setGit,
  linkedIn,
  setLinkedIn,
}) => {
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const onChangeAge = (e: ChangeEvent<HTMLInputElement>) =>
    setAge(e.target.value);

  const onChangeGit = (e: ChangeEvent<HTMLInputElement>) =>
    setGit(e.target.value);

  const onChangeLinkedIn = (e: ChangeEvent<HTMLInputElement>) =>
    setLinkedIn(e.target.value);

  return (
    <div>
      <UIInput value={username} onChange={onChangeName} label="Username" />
      <UIInput value={age} onChange={onChangeAge} label="Age" />
      <UIInput value={git} onChange={onChangeGit} label="Github" />
      <UIInput value={linkedIn} onChange={onChangeLinkedIn} label="LinkedIn" />
    </div>
  );
};
