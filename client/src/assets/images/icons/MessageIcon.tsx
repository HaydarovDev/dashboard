import type { IconParam } from '../../../types/iconTypes';

const MessageIcon = ({ color }: IconParam) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.6665 19.7499V7.83325C3.6665 7.10391 3.95624 6.40443 4.47196 5.88871C4.98769 5.37298 5.68716 5.08325 6.4165 5.08325H15.5832C16.3125 5.08325 17.012 5.37298 17.5277 5.88871C18.0434 6.40443 18.3332 7.10391 18.3332 7.83325V13.3333C18.3332 14.0626 18.0434 14.7621 17.5277 15.2778C17.012 15.7935 16.3125 16.0833 15.5832 16.0833H7.33317L3.6665 19.7499Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33301 8.75H14.6663"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33301 12.4165H12.833"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MessageIcon;
