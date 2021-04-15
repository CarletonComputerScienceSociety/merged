import React from "react";

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return <button>{text}</button>;
};

export { Button };
