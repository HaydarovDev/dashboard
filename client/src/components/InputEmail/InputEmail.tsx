import { useState } from 'react';
import EmailIcon from '../../assets/images/icons/EmailIcon';
import './InputEmail.css';
import useTheme from '../../Context/UseTheme';

const InputEmail = () => {
  const { dark } = useTheme();

  const [email, setEmail] = useState<string>('');
  return (
    <label htmlFor="email" className={`labelEmail ${dark ? 'active' : ''}`}>
      <EmailIcon size={25} />
      <input
        type="email"
        placeholder="Email"
        id="email"
        value={email}
        required
        title="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="inputEmail"
      />
    </label>
  );
};

export default InputEmail;
