import React, { FC } from "react";

interface Props {
  title: string;
}
export const UITitle: FC<Props> = ({ title }) => {
  return (
    <div style={{ color: "#ab0000", backgroundColor: "#3b3b3b" }}>
      <span>#</span>
      <h2 style={{ display: "inline", paddingLeft: 20 }}>{title}</h2>
    </div>
  );
};
