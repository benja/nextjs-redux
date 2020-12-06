import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <Link href={'https://twitter.com/benjaminakar'}>
        Made by Benjamin Akar
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${(props) => props.theme.footerBackground};
  padding: 10px 0;
`;

const Link = styled.a`
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  color: ${(props) => props.theme.text};

  transition: 0.2s all ease-in-out;
  &:hover {
    opacity: 0.8;
    color: ${(props) => props.theme.primary};
  }
`;
