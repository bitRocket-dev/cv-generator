import React, { FC } from "react";

interface Props {
  children: any;
}
export const UISection: FC<Props> = ({ children }) => {
  return <div style={{ paddingLeft: 50 }}>{children}</div>;
};
