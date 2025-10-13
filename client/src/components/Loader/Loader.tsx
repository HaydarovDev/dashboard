import useTheme from '../../Context/UseTheme';
import './Loader.css';

const Loader = () => {
  const { dark } = useTheme();

  return (
    <div className={`loader ${dark ? 'dark' : ''}`}>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
