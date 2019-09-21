import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.color.black.light};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.color.black.light} 0 1px 4px;
  display: block;
  margin-bottom: 24px;
  padding: 23px;
`;

export const Container = styled.div`
  max-width: 728px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2.4rem;
  height: 100%;
`;
