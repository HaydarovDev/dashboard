import { useEffect, useState } from "react";
import Title from "../components/Title/Title";
import EmailIcon from "../../assets/images/email";
import "./Reset.css";
import Button from "../components/Button/Button";

const Reset = () => {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log(email);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [email]);

  return (
    <>
      <section>
        <main>
          <article>
            <div className="auth">
              <Title title="Forget Password" />
              <p>Enter Your Mail To Reset</p>
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
                <Button title="Verify" aria="verify" />
              </form>
            </div>
          </article>
        </main>
      </section>
    </>
  );
};

export default Reset;
