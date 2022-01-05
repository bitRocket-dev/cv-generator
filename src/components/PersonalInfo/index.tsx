import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface Props {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  age: string;
  setAge: Dispatch<SetStateAction<string>>;
  git: string;
  setGit: Dispatch<SetStateAction<string>>;
}

export const PersonalInfo: FC<Props> = ({
  userName,
  setUserName,
  age,
  setAge,
  git,
  setGit,
}) => {
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);

  const onChangeAge = (e: ChangeEvent<HTMLInputElement>) =>
    setAge(e.target.value);

  const onChangeGit = (e: ChangeEvent<HTMLInputElement>) =>
    setGit(e.target.value);

  return (
    <div>
      <div>
        <label style={{ display: "block" }}>Username</label>
        <input value={userName} onChange={onChangeName} />
      </div>
      <div>
        <label style={{ display: "block" }}>Age</label>
        <input type="number" value={age} onChange={onChangeAge} />
      </div>
      <div>
        <label style={{ display: "block" }}>Github</label>
        <input value={git} onChange={onChangeGit} />
      </div>
    </div>
  );
};
