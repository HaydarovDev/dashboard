import useTheme from '../../../Context/UseTheme';

const DotsMoreIcon = () => {
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
        d="M13.3466 14.4578C13.9609 14.4578 14.4588 13.9599 14.4588 13.3456C14.4588 12.7314 13.9609 12.2334 13.3466 12.2334C12.7323 12.2334 12.2344 12.7314 12.2344 13.3456C12.2344 13.9599 12.7323 14.4578 13.3466 14.4578Z"
        stroke={dark ? 'white' : '#171717'}
        strokeWidth="2.66932"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3466 22.244C13.9609 22.244 14.4588 21.746 14.4588 21.1317C14.4588 20.5175 13.9609 20.0195 13.3466 20.0195C12.7323 20.0195 12.2344 20.5175 12.2344 21.1317C12.2344 21.746 12.7323 22.244 13.3466 22.244Z"
        stroke={dark ? 'white' : '#171717'}
        strokeWidth="2.66932"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3466 6.67268C13.9609 6.67268 14.4588 6.17472 14.4588 5.56046C14.4588 4.9462 13.9609 4.44824 13.3466 4.44824C12.7323 4.44824 12.2344 4.9462 12.2344 5.56046C12.2344 6.17472 12.7323 6.67268 13.3466 6.67268Z"
        stroke={dark ? 'white' : '#171717'}
        strokeWidth="2.66932"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DotsMoreIcon;
