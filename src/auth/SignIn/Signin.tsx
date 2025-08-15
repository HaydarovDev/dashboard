import { memo, useState } from "react";
import "./Signin.css";
import EmailIcon from "../../assets/images/email";
import LockIcon from "../../assets/images/Lock";
import { Link } from "react-router-dom";
import EyeIcon from "../../assets/images/eye";
import AppleIcon from "../../assets/images/apple";
import OpenEyeIcon from "../../assets/images/openEye";
import GoogleIcon from "../../assets/images/google";

const Signin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const toggle = () => {
    setShow((prev) => !prev);
  };
  console.log(show);

  console.log(`email: ${email} password: ${password}`);

  return (
    <>
      <section>
        <main>
          <article>
            <div className="auth">
              <h1>Sign In To DiveSea</h1>
              <div className="auth-providers">
                <button aria-label="google">
                  <GoogleIcon size={25} />
                </button>
                <button aria-label="apple">
                  <AppleIcon size={25} />
                </button>
              </div>
              <span>OR</span>
              <form action="" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="email">
                  <EmailIcon size={25} />
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    required
                    title="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label htmlFor="password">
                  <LockIcon size={25} />
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    id="password"
                    required
                    title="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span onClick={toggle}>
                    {show ? <EyeIcon size={25} /> : <OpenEyeIcon size={25} />}
                  </span>
                </label>
                <Link to={"reset-password"}>Forget Password ?</Link>
                <button aria-label="signin">Sign in</button>
                <p>
                  Create A New Account? <Link to={"/signup"}>Sign Up</Link>
                </p>
              </form>
            </div>
          </article>
        </main>
      </section>
    </>
  );
};

export default memo(Signin);
