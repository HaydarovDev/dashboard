import { memo } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';
import GoogleIcon from '../../assets/images/icons/GoogleIcon';
import AppleIcon from '../../assets/images/icons/AppleIcon';
import Title from '../../components/Title/Title';
import InputEmail from '../../components/InputEmail/InputEmail';
import InputPassword from '../../components/InputPassword/InputPassword';
import Button from '../../components/Button/Button';
import useTheme from '../../Context/UseTheme';

const Signin = () => {
  const { dark } = useTheme();

  return (
    <>
      <main>
        <section>
          <article>
            <div className="auth">
              <Title title="Sign In To DiveSea" />
              <div className="auth-providers">
                <button
                  aria-label="sign in google"
                  className={dark ? 'dark' : ''}
                >
                  <GoogleIcon size={25} color={dark ? '#f5f5f5' : 'black'} />
                </button>
                <button
                  aria-label="sign in apple"
                  className={dark ? 'dark' : ''}
                >
                  <AppleIcon size={25} color={dark ? '#f5f5f5' : 'black'} />
                </button>
              </div>
              <span>OR</span>
              <form action="" onSubmit={(e) => e.preventDefault()}>
                <InputEmail />
                <InputPassword id="signin" placeholderText="Password" />
                <Link to={'/auth/forget-password'}>Forget Password ?</Link>
                <Button title="Sign in" aria="signin" />
                <p>
                  Create A New Account?{' '}
                  <Link to={'/auth/signup'} className={dark ? 'dark' : ''}>
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default memo(Signin);
