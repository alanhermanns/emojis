import React, { useState } from 'react';
import { useLogin } from '../../hooks/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, authError } = useLogin();

  const handleSubmit = event => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      {authError && <p>{authError}</p>}
      <input type="text" name="email" value={email} onChange={({ target }) => setEmail(target.value)} />
      <input type="password" name="password" value={password} onChange={({ target }) => setPassword(target.value)} />
      <button>Login</button>
    </form>
  );
};

export default Login;
