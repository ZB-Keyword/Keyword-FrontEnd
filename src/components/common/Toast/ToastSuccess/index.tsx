import React from 'react';

interface ToastSuccessProps {
  status: boolean;
}

const ToastSuccess = ({ status }: ToastSuccessProps) => (
  <div
    role="alert"
    className={`alert alert-success fixed left-0 top-0 flex  ${
      status ? 'translate-y-0' : '-translate-y-full'
    } transition `}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span>회원가입이 완료되었습니다!</span>
  </div>
);

export default ToastSuccess;