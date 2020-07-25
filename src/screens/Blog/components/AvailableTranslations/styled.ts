import { styled } from '@styles/styled';

export const Phrase = styled.p`
  margin: 0;
  padding: 1em;
  background-color: ${({ theme }) => theme.color.infoBox};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 0.75em;
  font-size: 14px;
`;
