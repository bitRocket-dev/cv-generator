import React, { FC, useState } from "react";

interface Props {
  label: string;
  icon: string;
  isSelected: boolean;
  onToggleCheck?: () => void;
}

export const UIStack: FC<Props> = ({
  label,
  icon,
  isSelected,
  onToggleCheck,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={onToggleCheck}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: isSelected ? "white" : hover ? "white" : "#eee4ca",
          borderRadius: 50,
          width: 45,
          height: 45,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <img style={{ width: 24 }} alt={label} src={icon} />
      </div>
      <div style={{ maxWidth: 60, fontSize: 12, textAlign: "center" }}>
        {label}
      </div>
    </div>
  );
};
