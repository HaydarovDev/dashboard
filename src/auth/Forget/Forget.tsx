import Title from "../components/Title/Title";
import "./Forget.css";
import Button from "../components/Button/Button";
import InputEmail from "../components/InputEmail/InputEmail";

const Forget = () => {
  return (
    <>
      <section>
        <main>
          <article>
            <div className="auth">
              <Title title="Forget Password" />
              <p>Enter Your Mail To Reset</p>
              <form action="asas" onSubmit={(e) => e.preventDefault()}>
                <InputEmail />
                <Button title="Verify" aria="verify" />
              </form>
            </div>
          </article>
        </main>
      </section>
    </>
  );
};

export default Forget;
