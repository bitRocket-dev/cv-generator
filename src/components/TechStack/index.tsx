import React, { Dispatch, FC, SetStateAction } from "react";
import { TStack } from "../../App";
import { UIStack } from "../../components-ui/Stack";

interface Props {
  selectedStack: TStack[];
  setSelectedStack: Dispatch<SetStateAction<TStack[]>>;
}
export const TechStack: FC<Props> = ({ selectedStack, setSelectedStack }) => {
  const onToggleCheck = (el: TStack) => {
    const control = selectedStack.find((item) => item.id === el.id);

    if (control?.isSelected === true) {
      el.isSelected = false;
      setSelectedStack([...selectedStack]);
    } else {
      el.isSelected = true;
      setSelectedStack([...selectedStack]);
    }
  };

  const renderList = selectedStack.map((el) => (
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
        isSelected={el.isSelected!}
      />
    </div>
  ));

  return (
    <div>
      <h2># tech.stack</h2>

      <div
        style={{
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
