import useTheme from '../../../Context/UseTheme';

const PhoneIcon = () => {
  const { dark } = useTheme();
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.56111 4.44824H10.01L12.2344 10.0093L9.45387 11.6777C10.645 14.0929 12.5997 16.0476 15.015 17.2387L16.6833 14.4582L22.2444 16.6826V21.1315C22.2444 21.7215 22.01 22.2873 21.5929 22.7044C21.1757 23.1216 20.6099 23.3559 20.0199 23.3559C15.6815 23.0923 11.5895 21.25 8.51608 18.1765C5.44266 15.1031 3.60032 11.0111 3.33667 6.67268C3.33667 6.08272 3.57103 5.51693 3.98819 5.09976C4.40535 4.6826 4.97115 4.44824 5.56111 4.44824"
        stroke={dark ? 'white' : '#171717'}
        stroke-width="2.00199"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PhoneIcon;
