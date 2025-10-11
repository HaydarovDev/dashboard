import type { IconParam } from '../../../types/icon.types';

const ActivityIcon = ({ color }: IconParam) => {
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5.1333H18.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.85 2.16675H16.4833C17.9667 2.16675 18.3333 2.53342 18.3333 4.00008V7.42508C18.3333 8.89175 17.9667 9.25841 16.4833 9.25841H11.85C10.3667 9.25841 10 8.89175 10 7.42508V4.00008C10 2.53342 10.3667 2.16675 11.85 2.16675Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.6665 14.7166H9.99984"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5165 11.75H8.14984C9.63317 11.75 9.99984 12.1167 9.99984 13.5833V17.0083C9.99984 18.475 9.63317 18.8417 8.14984 18.8417H3.5165C2.03317 18.8417 1.6665 18.475 1.6665 17.0083V13.5833C1.6665 12.1167 2.03317 11.75 3.5165 11.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3333 13C18.3333 16.225 15.725 18.8333 12.5 18.8333L13.375 17.375"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.6665 8.00008C1.6665 4.77508 4.27484 2.16675 7.49984 2.16675L6.62485 3.62508"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ActivityIcon;
