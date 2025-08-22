import { Link } from "react-router-dom";
import AppleIcon from "../../assets/images/icons/AppleIcon";
import GoogleIcon from "../../assets/images/icons/GoogleIcon";
import Button from "../components/Button/Button";
import InputEmail from "../components/InputEmail/InputEmail";
import InputName from "../components/InputName/InputName";
import InputPassword from "../components/InputPassword/InputPassword";
import Title from "../components/Title/Title";
import "./SignUp.css";
const Signup = () => {
  return (
    <main>
      <section>
        <article>
          <div className="auth">
            <Title title="Sign Up To DiveSea" />
            <div className="auth-providers">
              <button title="Sign in with google" aria-label="sign in google">
                <GoogleIcon size={25} />
              </button>
              <button title="Sign in with apple" aria-label="sign in apple">
                <AppleIcon size={25} />
              </button>
            </div>
            <span>OR</span>
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <InputName />
              <InputEmail />
              <InputPassword id="create-password" placeholderText="Password" />
              <Button title="Sign Up" aria="signup" />
              <p>
                Already Have An Account?
                <Link to={"/auth/signin"}>Sign In</Link>
              </p>
            </form>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Signup;
