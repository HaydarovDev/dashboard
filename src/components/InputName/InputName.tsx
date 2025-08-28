import { useState } from 'react';
import './InputName.css';
import UserIcon from '../../assets/images/icons/UserIcon';

const InputName = () => {
  const [userName, setUserName] = useState<string>('');
  return (
    <label htmlFor="username" className="inputName">
      <UserIcon size={25} />
      <input
        type="text"
        placeholder="Full name"
        id="username"
        value={userName}
        required
        title="Fullname"
        onChange={(e) => setUserName(e.target.value)}
      />
    </label>
  );
};

export default InputName;
