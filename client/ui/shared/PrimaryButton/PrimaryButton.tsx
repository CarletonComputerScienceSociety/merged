import React from 'react';

interface Props {
  text: string;
}

const PrimaryButton = ({ text }: Props) => <button className="primary-button">{text}</button>;

export { PrimaryButton };
