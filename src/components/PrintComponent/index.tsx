import React, { Dispatch, FC, SetStateAction, useRef } from "react";
//@ts-ignore
import Pdf from "react-to-pdf";
import { TExperience, TStack } from "../../App";
import { UIExperience } from "../../components-ui/Experience";
import { UIHeader } from "../../components-ui/Header";
import { UISection } from "../../components-ui/Section";
import { UIStack } from "../../components-ui/Stack";
import { UITitle } from "../../components-ui/Title";

interface Props {
  username: string;
  description: string;
  age: string;
  git: string;
  selectedStack: TStack[];
  linkedIn: string;
  allExperiences: TExperience;
  setIsPdfReady: Dispatch<SetStateAction<boolean>>;
}

export const PrintComponent: FC<Props> = ({
  username,
  description,
  age,
  git,
  selectedStack,
  linkedIn,
  allExperiences,
  setIsPdfReady,
}) => {
  const ref = useRef(null);

  const formattedStackList = selectedStack.filter(
    (item) => item.isSelected === true
  );

  const renderExp = (key: string) => {
    return (
      <div key={key}>
        <UIExperience
          date={allExperiences[key].date}
          client={allExperiences[key].client}
          title={allExperiences[key].title}
          description={allExperiences[key].descriptions}
        />
      </div>
    );
  };
  const formList = Object.keys(allExperiences);
  return (
    <>
      <div
        style={{
          backgroundColor: "#2f2f2f",
          padding: 20,
          color: "#eee4ca",
        }}
        ref={ref}
      >
        <UIHeader username={username} age={age} git={git} />
        <UITitle title="about.me" />
        <UISection>
          <div style={{ width: "100%", overflowWrap: "break-word" }}>
            {description}
          </div>
        </UISection>

        <UITitle title="tech.stack" />
        <UISection>
          <div style={{ display: "flex" }}>
            {formattedStackList.map((el) => (
              <div
                key={el.id}
                style={{
                  padding: 10,
                }}
              >
                <UIStack
                  icon={el.url}
                  label={el.name}
                  isSelected={el.isSelected!}
                />
              </div>
            ))}
          </div>
        </UISection>
        <UISection>
          <p>{linkedIn}</p>
        </UISection>

        <UITitle title="main.experiences" />
        <UISection>{formList.map(renderExp)}</UISection>
      </div>
      <Pdf targetRef={ref} filename={`CV${username}.pdf`}>
        {({ toPdf }: any) => <button onClick={toPdf}>Generate CV</button>}
      </Pdf>
      <button onClick={() => setIsPdfReady(false)}>Back</button>
    </>
  );
};
