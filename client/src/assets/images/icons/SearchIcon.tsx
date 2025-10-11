import type { IconParam } from '../../../types/icon.types';

const SearchIcon = ({ color }: IconParam) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="13.5743"
        cy="14"
        r="8.77942"
        transform="rotate(-45 13.5743 14)"
        stroke={color}
        strokeWidth="1.6381"
      />
      <path
        d="M20.392 20.4443L24.7792 24.7288"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
