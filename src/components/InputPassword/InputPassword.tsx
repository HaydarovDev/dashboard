import { useState } from 'react';
import './InputPassword.css';
import LockIcon from '../../assets/images/icons/LockIcon';
import EyeIcon from '../../assets/images/icons/EyeIcon';
import OpenEyeIcon from '../../assets/images/icons/OpenEye';

type InputProps = {
  id: string;
  placeholderText: string;
};

const InputPassword = ({ id, placeholderText }: InputProps) => {
  const [password, setPassword] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);

  const toggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <label htmlFor={id}>
        <LockIcon size={25} />
        <input
          type={show ? 'text' : 'password'}
          placeholder={placeholderText}
          id={id}
          required
          value={password}
          title="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span onClick={toggle}>
          {show ? <EyeIcon size={25} /> : <OpenEyeIcon size={25} />}
        </span>
      </label>
    </>
  );
};

export default InputPassword;
