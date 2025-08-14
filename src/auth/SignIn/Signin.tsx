import logo from "../../assets/images/logo.svg";
import google from "../../assets/images/google.svg";
import apple from "../../assets/images/apple.svg";
import "./Signin.css";

const Signin = () => {
  return (
    <section>
      <main>
        <header>
          <img src={logo} alt="" width={40} />
        </header>
        <article>
          <div className="auth">
            <h1>Sign In To DiveSea</h1>
            <div className="auth-providers">
              <button>
                <img src={google} alt="" />
              </button>
              <button>
                <img src={apple} alt="" />
              </button>
            </div>
            <span>OR</span>
            <form action="">
              <label htmlFor="">
                <input type="text" />
              </label>
              <label htmlFor="">
                <input type="text" />
              </label>
            </form>
          </div>
        </article>
      </main>
      <main></main>
    </section>
  );
};

export default Signin;
