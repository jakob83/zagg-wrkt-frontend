import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #20212c;
`;

const Card = styled.div`
  background: #23243a;
  border-radius: 22px;
  box-shadow: 0 8px 40px #0005;
  padding: 2.7rem 2.2rem 2.2rem 2.2rem;
  min-width: 340px;
  max-width: 95vw;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
`;

const Logo = styled.div`
  font-size: 2.3rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  color: #00bcd4;
  text-align: center;
  margin-bottom: 0.7rem;
  font-family: 'Montserrat', 'Inter', Arial, sans-serif;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  color: #b6eaff;
  margin-bottom: 2.2rem;
  text-align: center;
  font-weight: 600;
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  background: #fff;
  color: #23243a;
  border: none;
  border-radius: 10px;
  font-size: 1.08rem;
  font-weight: 700;
  padding: 0.9rem 1rem;
  margin-bottom: 1.2rem;
  cursor: pointer;
  box-shadow: 0 2px 12px #00bcd422;
  transition:
    background 0.2s,
    box-shadow 0.2s;
  &:hover {
    background: #f3f3f3;
    box-shadow: 0 4px 18px #00bcd422;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  background: #23253a;
  border-radius: 10px;
  margin-bottom: 1.2rem;
  border: 1.5px solid #23253a;
  transition: border 0.2s;
  &:focus-within {
    border: 1.5px solid #00bcd4;
  }
`;

const Input = styled.input`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.08rem;
  padding: 1rem 1rem 1rem 1rem;
  flex: 1;
  outline: none;
  &::placeholder {
    color: #6e7a8a;
    opacity: 1;
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, #00bcd4 60%, #7ecfff 100%);
  color: #23243a;
  border: none;
  border-radius: 10px;
  font-size: 1.13rem;
  font-weight: 800;
  padding: 1rem 1rem;
  margin-top: 0.7rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
  box-shadow: 0 2px 12px #00bcd455;
  transition:
    background 0.2s,
    box-shadow 0.2s;
  &:hover {
    background: linear-gradient(90deg, #00bcd4 80%, #7ecfff 100%);
    box-shadow: 0 4px 18px #00bcd455;
  }
`;

const ErrorMsg = styled.div`
  color: #ff4444;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.05rem;
`;

const Subtle = styled.div`
  color: #aaa;
  font-size: 1rem;
  margin-top: 1.5rem;
  text-align: center;
`;

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (!response.ok || !data.id) {
        setError(data.error || 'Signup failed');
        setLoading(false);
        return;
      }
      navigate('/login');
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    window.open(
      `${import.meta.env.VITE_API_URL}/auth/google`,
      '_blank',
      'width=500,height=600'
    );
  };

  useEffect(() => {
    const listener = event => {
      if (event.origin !== import.meta.env.VITE_API_URL) return; // backend origin

      const { token } = event.data;
      if (token) {
        localStorage.setItem('token', token);
        navigate('/'); // or any route
      }
    };

    window.addEventListener('message', listener);
    return () => window.removeEventListener('message', listener);
  }, []);
  return (
    <Container>
      <Card>
        <Logo>ZaggWrkt</Logo>
        <Title>Create your account</Title>
        <GoogleButton type="button" onClick={handleGoogleSignup}>
          <FcGoogle size={22} /> Sign up with Google
        </GoogleButton>
        {error && <ErrorMsg>{error}</ErrorMsg>}
        <form onSubmit={handleSubmit} autoComplete="on">
          <InputGroup>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              autoFocus
              autoComplete="name"
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </InputGroup>
          <Button type="submit" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </Button>
        </form>
        <Subtle>
          Already have an account?{' '}
          <Link
            to="/login"
            style={{
              color: '#00bcd4',
              textDecoration: 'underline',
              fontWeight: 600,
            }}
          >
            Log in
          </Link>
        </Subtle>
      </Card>
    </Container>
  );
};

export default Signup;
