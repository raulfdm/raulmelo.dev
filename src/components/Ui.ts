import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 5px;
  ${({ theme }) =>
    !theme.isDark && `box-shadow: ${theme.color.shadowLight} 0 1px 4px;`}
  margin-bottom: 2.4rem;
  padding: 2.4rem;
`;

export const Container = styled.div`
  max-width: 728px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2.4rem;
  height: 100%;
`;
