import React, { FC } from "react";

interface Props {
  date: string;
  title: string;
  client: string;
  description: string;
}
export const UIExperience: FC<Props> = ({
  date,
  title,
  client,
  description,
}) => {
  return (
    <div
      style={{
        marginBottom: 15,
        marginTop: 15,
        display: "flex",
        color: "#eee4ca",
      }}
    >
      <div style={{ paddingRight: 20 }}>{date}</div>
      <div style={{ width: "89%" }}>
        <div style={{ color: "#459836", fontWeight: "bold" }}>{title}</div>
        <div style={{ fontStyle: "italic" }}>{client}</div>
        <div style={{ overflowWrap: "break-word" }}>{description}</div>
      </div>
    </div>
  );
};
