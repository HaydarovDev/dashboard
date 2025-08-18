import "./Verify.css";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import InputOtp from "../components/InputOtp/InputOtp";

const Verify = () => {
  return (
    <>
      <main>
        <section>
          <article>
            <div className="auth">
              <Title title="Verify Email" />
              <p>Code Send To Your Email</p>
              <form action="">
                <InputOtp />
                <span></span>
                <Button title="Verify" aria="verify" />
              </form>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Verify;
