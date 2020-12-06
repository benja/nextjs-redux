import styled, { useTheme } from 'styled-components';
import DefaultLayout from '../ui/layouts/DefaultLayout';
import { Text } from '../ui/components/Text';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setUser } from '../redux/slices/userSlice';
import React from 'react';

export default function Landing() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(
        setUser({
          id: 2,
          username: 'Kevin',
        })
      );
    }, 2000);
  });

  return (
    <Container>
      <StyledText style={{ margin: '10px 0' }}>
        You're up and running with NextJS & Redux!
      </StyledText>
      <p>
        Logged in as{' '}
        <span style={{ color: theme.primary }}>
          {`${user.username} (id: ${user.id})`}
        </span>
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const StyledText = styled(Text).attrs({
  fontSize: 25,
  regular: true,
})``;

Landing.Layout = DefaultLayout;
