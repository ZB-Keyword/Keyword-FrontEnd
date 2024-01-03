import React from 'react';

interface WideButtonProps {
  type?: string;
  text: string;
  status: boolean;
}

const WideButton = ({ type, text, status }: WideButtonProps) => (
  <button
    type={type ? 'button' : 'submit'}
    disabled={!status}
    className={`max-w-default m-auto w-full text-body1 h-14 fixed bottom-0 left-0 right-0 ${
      status ? 'text-white' : 'text-gray4'
    } ${status ? 'bg-primary' : 'bg-gray2'}`}
  >
    {text}
  </button>
);

export default WideButton;
