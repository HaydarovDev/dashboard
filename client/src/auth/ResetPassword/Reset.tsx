import Button from '../../components/Button/Button';
import InputPassword from '../../components/InputPassword/InputPassword';
import Title from '../../components/Title/Title';
import './Reset.css';

const Reset = () => {
  return (
    <main>
      <section>
        <article>
          <div className="auth">
            <Title title="Reset Password" />
            <p>Reset And Confirm Password</p>
            <form action="sasa">
              <InputPassword id="new-password" placeholderText="New password" />
              <InputPassword id="confirm" placeholderText="Confirm password" />
              <Button title="Reset" aria="reset" />
            </form>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Reset;
