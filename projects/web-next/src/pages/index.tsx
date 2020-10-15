import { AppThemeProvider } from '@contexts/AppTheme';
import { styled } from '@styles/styled';

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.contentSerif};
`;

const Home = () => {
  return (
    <AppThemeProvider>
      <Title>Hi</Title>
    </AppThemeProvider>
  );
};

export default Home;
