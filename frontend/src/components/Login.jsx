import AuthForm from './AuthForm';
import { useEffect } from 'react';
import useFormAndValidation from '../hooks/useFormAndValidation';

const Login = ({ onLogin }) => {
  const { values, errors, isValid, setValues, handleChange, resetForm } = useFormAndValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({
      email: values['email'],
      password: values['password']
    });
    resetForm();
  }

  return (
    <AuthForm
      formName='signup'
      title='Вход'
      btnText='Войти'
      values={values}
      errors={errors}
      isValid={isValid}
      setValues={setValues}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
    </AuthForm>
  )
}

export default Login;