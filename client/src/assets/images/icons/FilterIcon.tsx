import useTheme from '../../../Context/UseTheme';

const FilterIcon = () => {
  const { dark } = useTheme();
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.02513 10.8274H0.774536"
        stroke={dark ? 'white' : '#1A202C'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.36707 2.75023H13.6177"
        stroke={dark ? 'white' : '#1A202C'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.68857 2.70521C4.68857 1.6255 3.80677 0.75 2.71929 0.75C1.6318 0.75 0.75 1.6255 0.75 2.70521C0.75 3.78492 1.6318 4.66042 2.71929 4.66042C3.80677 4.66042 4.68857 3.78492 4.68857 2.70521Z"
        stroke={dark ? 'white' : '#1A202C'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0833 10.7946C14.0833 9.71485 13.2022 8.83936 12.1147 8.83936C11.0266 8.83936 10.1448 9.71485 10.1448 10.7946C10.1448 11.8743 11.0266 12.7498 12.1147 12.7498C13.2022 12.7498 14.0833 11.8743 14.0833 10.7946Z"
        stroke={dark ? 'white' : '#1A202C'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FilterIcon;
