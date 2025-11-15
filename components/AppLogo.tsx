import { Code2 } from "lucide-react";
import React from "react";

interface Props {
  size: "10px" | "12px" | "14px" | "16px" | "18px" | "20px" | "30px" | "50px";
  weight: "bold" | "medium";
  icon?: boolean;
}

const AppLogo = (props: Props) => {
  const styles = {
    fontWeight: props.weight,
    fontSize: props.size,
  };

  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      {props.icon && (
        <Code2
          size={props.size}
          className="hidden md:block text-primary mt-2"
        />
      )}
      <span>
        <span style={{ ...styles, color: "var(--color-primary)" }}>algo</span>{" "}
        <span style={styles}>arena</span>
      </span>
    </span>
  );
};

export default AppLogo;
