import React, { useState } from "react";
import { AboutMe } from "./components/AboutMe";
import { MainExperience } from "./components/MainExperience";
import { PersonalInfo } from "./components/PersonalInfo";
import { PrintComponent } from "./components/PrintComponent";
import { TechStack } from "./components/TechStack";
import { techStacks } from "./utils/techStacks";

export interface TExperience {
  id: string;
  date: string;
  title: string;
  client: string;
  descriptions: string;
}

export interface TStack {
  id: number;
  name: string;
  url: string;
  isSelected?: boolean;
}

export const App = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [git, setGit] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [description, setDescription] = useState("");
  const [selectedStack, setSelectedStack] = useState<TStack[]>(techStacks);
  const [allExperiences, setAllExperiences] = useState<TExperience[]>([]);

  const [isPdfReady, setIsPdfReady] = useState(false);

  const onGeneratePDF = () => {
    const formattedStackList = selectedStack.filter(item=>item.isSelected===true)
    // setIsPdfReady(true);
    console.log(JSON.stringify({username,
      age,
      git,
      linkedIn,
      description,
      allExperiences,
      formattedStackList}));
      
    };

  // const formattedArray = checkedState.filter((value) => value === true);

  return (
    <>
      {isPdfReady ? (
        <PrintComponent
          username={username}
          age={age}
          git={git}
          // formattedArray={formattedArray}
          linkedIn={linkedIn}
          allExperiences={allExperiences}
          description={description}
        />
      ) : (
        <div
          style={{
            margin: 50,
            padding: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            backgroundColor: "#efefef",
          }}
        >
          <PersonalInfo
            username={username}
            setUsername={setUsername}
            age={age}
            setAge={setAge}
            git={git}
            setGit={setGit}
            linkedIn={linkedIn}
            setLinkedIn={setLinkedIn}
          />
          <AboutMe description={description} setDescription={setDescription} />
          <TechStack
            selectedStack={selectedStack}
            setSelectedStack={setSelectedStack}
          />
          <MainExperience
            setAllExperiences={setAllExperiences}
            allExperiences={allExperiences}
          />
          <button onClick={onGeneratePDF}>Generate Pdf</button>
        </div>
      )}
    </>
  );
};
