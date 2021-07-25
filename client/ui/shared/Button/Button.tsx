import React from 'react';

interface Props {
  text: string;
}

const Button = ({ text }: Props) => <button className="button">{text}</button>;

export { Button };
