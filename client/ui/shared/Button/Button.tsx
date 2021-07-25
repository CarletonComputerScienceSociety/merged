import React from 'react';

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return <button className="button">{text}</button>;
};

export { Button };
