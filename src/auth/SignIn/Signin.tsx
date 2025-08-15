import { Helmet } from "react-helmet-async";
import logo from "../../assets/images/logo.svg";
import google from "../../assets/images/google.svg";
import apple from "../../assets/images/apple.svg";
import "./Signin.css";
import EmailIcon from "../../assets/images/email";
import LockIcon from "../../assets/images/Lock";
import { Link } from "react-router-dom";
import EyeIcon from "../../assets/images/eye";

const Signin = () => {
  return (
    <>
      <Helmet>
        <title>DiveSea - Signin</title>
        <meta name="description" content="Here you can sign in" />
        <meta property="og:title" content="Signin" />
      </Helmet>
      <section>
        <header>
          <a href="/" aria-label="company logo">
            <img src={logo} alt="company logo" width={40} loading="lazy" />
          </a>
        </header>
        <main>
          <article>
            <div className="auth">
              <h1>Sign In To DiveSea</h1>
              <div className="auth-providers">
                <button aria-label="google">
                  <img src={google} alt="apple" loading="lazy" />
                </button>
                <button aria-label="apple">
                  <img src={apple} alt="apple" loading="lazy" />
                </button>
              </div>
              <span>OR</span>
              <form action="" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="email">
                  <EmailIcon size={25} />
                  <input type="email" placeholder="Email" id="email" required />
                </label>
                <label htmlFor="password">
                  <LockIcon size={25} />
                  <input
                    type="text"
                    placeholder="Password"
                    id="password"
                    required
                  />
                  <EyeIcon size={25} />
                </label>
                <Link to={"/reser-password"}>Forget Password ?</Link>
                <button aria-label="signin">Sign in</button>
                <p>
                  Create A New Account? <Link to={"/signin"}>Sign Up</Link>
                </p>
              </form>
            </div>
          </article>
        </main>
        <footer>
          <Link to={"/privacy"}>Privacy Policy</Link>
          <p>Copyright 2022</p>
        </footer>
      </section>
    </>
  );
};

export default Signin;
