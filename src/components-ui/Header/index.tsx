import React, { FC } from "react";

interface Props {
  username: string;
  age: string;
  git: string;
}

export const UIHeader: FC<Props> = ({ username, age, git }) => {
  return (
    <div>
      <h1
        style={{
          color: "#ffaa00",
          textDecoration: "underline",
        }}
      >
        {username}
      </h1>
      <div>
        <span
          style={{
            color: "#00bfff",
            paddingRight: 10,
          }}
        >
          age
        </span>
        <span>{age}</span>
      </div>
      <p>{git}</p>
    </div>
  );
};
