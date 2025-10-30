import type { IconParam } from '../../../types/iconTypes';

const WalletIcon = ({ color }: IconParam) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.6665 7.5874H18.3332"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 14.2542H6.66667"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 14.2542H12.0833"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.3665 3.4209H14.6248C17.5915 3.4209 18.3332 4.15423 18.3332 7.07923V13.9209C18.3332 16.8459 17.5915 17.5792 14.6332 17.5792H5.3665C2.40817 17.5876 1.6665 16.8542 1.6665 13.9292V7.07923C1.6665 4.15423 2.40817 3.4209 5.3665 3.4209Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WalletIcon;
