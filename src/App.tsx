import React, { useState } from "react";
import { AboutMe } from "./components/AboutMe";
import { MainExperience } from "./components/MainExperience";
import { PersonalInfo } from "./components/PersonalInfo";
import { TechStack } from "./components/TechStack";
import { techStacks } from "./utils/techStacks";

export interface TExperience {
  date: string;
  title: string;
  client: string;
  descriptions: string;
}

export const App = () => {
  const [allValues, setAllValues] = useState([{}]);
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [git, setGit] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [description, setDescription] = useState("");
  const [allExperiences, setAllExperiences] = useState<TExperience[]>([]);

  const [checkedState, setCheckedState] = useState(
    new Array(techStacks.length).fill(false)
  );

  const onGeneratePDF = () => {
    setAllValues([
      ...allValues,
      userName,
      age,
      git,
      linkedIn,
      description,
      allExperiences,
      checkedState,
    ]);
    console.log(allValues);
  };

  return (
    <div
      style={{
        margin: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <PersonalInfo
        userName={userName}
        setUserName={setUserName}
        age={age}
        setAge={setAge}
        git={git}
        setGit={setGit}
      />
      <AboutMe description={description} setDescription={setDescription} />
      <TechStack
        checkedState={checkedState}
        setCheckedState={setCheckedState}
      />
      <MainExperience
        linkedIn={linkedIn}
        setLinkedIn={setLinkedIn}
        setAllExperiences={setAllExperiences}
        allExperiences={allExperiences}
      />
      <button onClick={onGeneratePDF}>Generate pdf</button>
    </div>
  );
};
