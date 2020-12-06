import React from 'react';
import styled from 'styled-components';
import { Text } from '../components/Text';
import Footer from './parts/Footer';

export default function DefaultLayout(props) {
  return (
    <Container>
      {props.children}
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    color: red;
  }
`;

const Title = styled(Text).attrs({
  fontSize: 15,
})`
  color: ${(props) => props.theme.text};
`;
