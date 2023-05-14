import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';
import useFormAndValidation from '../hooks/useFormAndValidation';

const Register = ({ onRegister }) => {
  const { values, errors, isValid, setValues, handleChange, resetForm } = useFormAndValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({
      email: values['email'],
      password: values['password']
    });
    resetForm();
  }

  return (
    <AuthForm
      formName='signin'
      title='Регистрация'
      btnText='Зарегистрироваться'
      values={values}
      errors={errors}
      isValid={isValid}
      setValues={setValues}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <div className="auth__signin">
        <p className="auth__text">Уже зарегистрированы?</p>
        <Link to="/" className="auth__link">Войти</Link>
      </div>
    </AuthForm>
  );
}

export default Register;