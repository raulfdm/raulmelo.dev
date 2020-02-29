import styled from 'styled-components';

export const Card = styled.div`
  --card-border-radius: 5px;
  --card-white-space: 2.4rem;

  background-color: ${({ theme }) => theme.color.background};
  border-radius: var(--card-border-radius);
  ${({ theme }) =>
    theme.isDarkTheme
      ? `border: 1px solid ${theme.color.border};`
      : `box-shadow: ${theme.color.shadowLight} 0 1px 4px;`}

  margin-bottom: var(--card-white-space);
  padding: var(--card-white-space);
`;

export const Container = styled.div`
  max-width: 728px;
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--card-white-space);
  height: 100%;
`;

export const Quote = styled.blockquote`
  /* Resetting global blockquote style  */
  && {
    margin: 0;
    box-shadow: none;
  }

  text-rendering: optimizelegibility;
  padding-left: 3rem;
  font-size: 3rem;
  line-height: 44px;
  color: ${({ theme }) => theme.color.font};
  opacity: 0.6;
  font-family: ${({ theme }) => theme.font.contentTitle};
  letter-spacing: -0.33px;
  font-weight: 400;
`;
