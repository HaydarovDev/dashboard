import { useState } from "react";
import EmailIcon from "../../../assets/images/email";
import "../InputPassword/InputPassword.css";

const InputEmail = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <>
      <label htmlFor="email">
        <EmailIcon size={25} />
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          required
          title="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
    </>
  );
};

export default InputEmail;
