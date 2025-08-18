import { memo } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import InputPassword from "../components/InputPassword/InputPassword";
import InputEmail from "../components/InputEmail/InputEmail";
import GoogleIcon from "../../assets/images/icons/google";
import AppleIcon from "../../assets/images/icons/apple";

const Signin = () => {
  return (
    <>
      <main>
        <section>
          <article>
            <div className="auth">
              <Title title="Sign In To DiveSea" />
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
                <InputEmail />
                <InputPassword id="signin" placeholderText="Password" />
                <Link to={"/auth/forget-password"}>Forget Password ?</Link>
                <Button title="Sign in" aria="signin" />
                <p>
                  Create A New Account? <Link to={"/auth/signup"}>Sign Up</Link>
                </p>
              </form>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default memo(Signin);
