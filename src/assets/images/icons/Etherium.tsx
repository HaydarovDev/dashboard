import type { IconParam } from '../../../types/icon.types';

const Etherium = ({ size, color }: IconParam) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 0L0 10.2439L6.5 13.9024L13 10.2439L6.5 0ZM0 11.4634L6.5 20L13 11.4634L6.5 15.122L0 11.4634Z"
        fill={color}
      />
    </svg>
  );
};

export default Etherium;
