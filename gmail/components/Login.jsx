import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #202124;
  margin: 20px 0;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  max-width: 300px;
  border: 1px solid #1a73e8;
  border-radius: 4px;
  font-size: 16px;
  color: #202124;

  &:focus {
    outline: none;
    border-color: #1a73e8;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
  cursor: pointer;

  &:hover {
    background-color: #0f6bc5;
  }
`;

const Links = styled.div`
  margin: 10px 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
`;

const FooterLink = styled(Link)`
  color: #1a73e8;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

function Login() {
  return (
    <Container>
      <Logo src="https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png" alt="Google Logo" />
      <Title>Sign in to continue to Gmail</Title>
      <Input type="text" placeholder="Email or phone" />
      <Links>
        <FooterLink to="/forgot-email">Forgot email?</FooterLink>
      </Links>
      <p>Not your computer? Use Guest mode to sign in privately. Learn more about using Guest mode.</p>
      <Button>Next</Button>
      <Links>
        <FooterLink to="/create-account">Create account</FooterLink>
      </Links>
      <Footer>
        <FooterLink to="/help">Help</FooterLink>
        <FooterLink to="/privacy">Privacy</FooterLink>
        <FooterLink to="/terms">Terms</FooterLink>
      </Footer>
    </Container>
  );
}

export default Login;
