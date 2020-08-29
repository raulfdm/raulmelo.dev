import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';

import { styled } from '@styles/styled';
import { Layout } from '@components/Layout';
import { SEO } from '@components/SEO';
import { useIntl } from '@contexts/react-intl';

const Wrapper = styled.div`
  max-width: 75vw;
  margin: 0 auto;
  text-align: center;
`;
const Title = styled.h2`
  font-size: 10vw;
`;

const Subtitle = styled.p`
  font-size: calc(1.6em + 1.75vw);
  line-height: 1.2;
  margin-bottom: 1em;
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.font.contentSans};
  line-height: 1.65;
  font-size: calc(16px + 0.25vw);
  font-weight: 300;
  opacity: 0.8;
`;

const messages = defineMessages({
  title: {
    id: '404.title',
  },
});

const NotFoundPage: React.FC = () => {
  const { locale, formatMessage } = useIntl();

  return (
    <>
      <SEO
        lang={locale}
        url="/404"
        title={formatMessage(messages.title)}
        description={formatMessage(messages.title)}
      />
      <Layout>
        <Wrapper>
          <Title>Oops!</Title>
          <Subtitle>
            <FormattedMessage id="404.subtitle" />
          </Subtitle>
          <Description>
            <FormattedMessage id="404.description" />
          </Description>
        </Wrapper>
      </Layout>
    </>
  );
};

export default NotFoundPage;
