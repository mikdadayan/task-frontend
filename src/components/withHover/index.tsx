import React, { useState } from "react";

type WrapComponentProps = {
  textColor: string;
  textHover: boolean;
  onMouseOver: Function;
  onMouseLeave: Function;
  onClick: Function;
};

const withHoverHOC = (WrappedComponent: React.FC<WrapComponentProps>) => {
  const WithHover = (props: any) => {
    const [textHover, setHover] = useState(false);
    const [textColor, setTextColor] = useState("#888");

    const changeColor = () => {
      const newColor = textColor === "#888" ? "red" : "#888";
      setTextColor(newColor);
    };

    return (
      <WrappedComponent
        {...props}
        textColor={textColor}
        textHover={textHover}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={changeColor}
      />
    );
  };

  return WithHover;
};

export default withHoverHOC;
