import useTheme from '../../Context/UseTheme';
import './Title.css';
const Title = ({ title }: { title: string }) => {
  const { dark } = useTheme();
  return <h1 className={`title ${dark ? 'dark' : ''}`}>{title}</h1>;
};

export default Title;
