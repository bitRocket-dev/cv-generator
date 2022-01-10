import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { UIStack } from "../../components-ui/Stack";
import { techStacks } from "../../utils/techStacks";

interface Props {
  selectedStack: {}[];
  setSelectedStack: Dispatch<SetStateAction<{}[]>>;
}
export const TechStack: FC<Props> = ({ selectedStack, setSelectedStack }) => {
  const onToggleCheck = (el: any) => {
    const formattedList = selectedStack.filter((item) => item !== el);

    if (selectedStack.find((item) => item === el)) {
      setSelectedStack(formattedList);
    } else {
      setSelectedStack([...selectedStack, el]);
    }
  };

  const renderList = techStacks.map((el) => (
    <div
      key={el.id}
      style={{
        padding: 10,
      }}
    >
      <UIStack
        icon={el.url}
        label={el.name}
        onToggleCheck={() => onToggleCheck(el)}
        isSelected={false}
      />
    </div>
  ));

  return (
    <div>
      <h2># tech.stack</h2>

      <div
        style={{
          width: "1000px",
          display: "flex",
          flexWrap: "wrap",
          flex: 12,
        }}
      >
        {renderList}
      </div>
    </div>
  );
};
