import { memo } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import AppleIcon from "../../assets/images/apple";
import GoogleIcon from "../../assets/images/google";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import InputPassword from "../components/InputPassword/InputPassword";
import InputEmail from "../components/InputEmail/InputEmail";

const Signin = () => {
  return (
    <>
      <section>
        <main>
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
