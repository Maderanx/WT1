import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 24px;
`;

function ForgotEmail() {
  return (
    <Container>
      <Title>Forgot Email Page</Title>
      <p>This is where you would handle email recovery.</p>
    </Container>
  );
}

export default ForgotEmail;
