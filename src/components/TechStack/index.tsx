import React, { Dispatch, FC, SetStateAction } from "react";
import { techStacks } from "../../utils/techStacks";

interface Props {
  checkedState: any[];
  setCheckedState: Dispatch<SetStateAction<any[]>>;
}
export const TechStack: FC<Props> = ({ checkedState, setCheckedState }) => {
  const handleOnChange = (position: any) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

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
        {techStacks.map((el) => (
          <div
            key={el.id}
            style={{
              padding: 10,
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img style={{ width: 24 }} alt={el.name} src={el.url} />
            </div>
            <div>
              <input
                type="checkbox"
                name={el.name}
                value={el.name}
                checked={checkedState[el.id]}
                onChange={() => handleOnChange(el.id)}
              />
              <span>{el.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
