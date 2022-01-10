import React, { FC, useRef } from "react";
//@ts-ignore
import Pdf from "react-to-pdf";
import { TExperience } from "../../App";
import { UIExperience } from "../../components-ui/Experience";
import { UIHeader } from "../../components-ui/Header";
import { UISection } from "../../components-ui/Section";
import { UITitle } from "../../components-ui/Title";

interface Props {
  username: string;
  description: string;
  age: string;
  git: string;
  // formattedArray: boolean[];
  linkedIn: string;
  allExperiences: TExperience[];
}

export const PrintComponent: FC<Props> = ({
  username,
  description,
  age,
  git,
  // formattedArray,
  linkedIn,
  allExperiences,
}) => {
  const ref = useRef(null);

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
        {/* <UISection>
          <div>{formattedArray}</div>
        </UISection> */}
        <UISection>
          <p>{linkedIn}</p>
        </UISection>

        <UITitle title="main.experiences" />
        <UISection>
          {allExperiences.map((el) => (
            <UIExperience
              date={el.date}
              title={el.title}
              client={el.client}
              description={el.descriptions}
            />
          ))}
        </UISection>
      </div>
      <Pdf targetRef={ref} filename={`CV${username}.pdf`}>
        {({ toPdf }: any) => <button onClick={toPdf}>Generate CV</button>}
      </Pdf>
    </>
  );
};
