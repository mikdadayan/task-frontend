import React from "react";
import withHover from "../withHover/index";

function MouseHover(props: any) {
  const { textColor, textHover, ...divProps } = props;
  return (
    <div>
      <h2 {...divProps} style={{ color: textColor }}>
        Mouse {textHover ? "Over" : "Out"}
      </h2>
    </div>
  );
}

export default withHover(MouseHover);
