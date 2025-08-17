import type React from "react";
import Button from "../components/Button/Button";
import Title from "../components/Title/Title";
import "./Verify.css";
import { useRef } from "react";

const Verify = () => {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/g, "");
    e.target.value = value;

    if (value && index < inputs.current.length) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <>
      <section>
        <main>
          <article>
            <div className="auth">
              <Title title="Verify Email" />
              <p>Code Send To Your Email</p>
              <form action="">
                <div className="otpInputs">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <input
                        key={i}
                        type="text"
                        maxLength={1}
                        onChange={(e) => handleChange(e, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        ref={(el) => {
                          inputs.current[i] = el;
                        }}
                      />
                    ))}
                </div>
                <span></span>
                <Button title="Verify" aria="verify" />
              </form>
            </div>
          </article>
        </main>
      </section>
    </>
  );
};

export default Verify;
