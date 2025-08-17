import Button from "../components/Button/Button";
import InputEmail from "../components/InputEmail/InputEmail";
import Title from "../components/Title/Title";
import "./Forget.css";

const Forget = () => {
  return (
    <>
      <main>
        <section>
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
        </section>
      </main>
    </>
  );
};

export default Forget;
