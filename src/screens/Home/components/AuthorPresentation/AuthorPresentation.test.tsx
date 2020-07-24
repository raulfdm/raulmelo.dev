import React from 'react';
import { useStaticQuery } from 'gatsby';
import { mergeDeepRight } from 'ramda';

import { render } from 'test-utils';
import AuthorPresentation from './AuthorPresentation';
import { SiteMetadata } from '@app-types';

jest.mock('gatsby');

function mockApiResult(custom?: any): Partial<SiteMetadata> {
  const defaults = {
    profilePic:
      'https://miro.medium.com/fit/c/256/256/1*6jtMoNvX_MHslzBLP4aM9g.jpeg',
    author: 'Raul Melo',
    social: {},
  };

  const mergedProps = mergeDeepRight(defaults, custom || {});

  (useStaticQuery as jest.Mock<typeof useStaticQuery>).mockReturnValue({
    site: {
      siteMetadata: mergedProps,
    },
  } as any);

  return mergedProps;
}

describe('<AuthorPresentation />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders author name', () => {
    const siteMetadata = mockApiResult();

    const { getByTestId } = render(<AuthorPresentation />);

    expect(getByTestId('author').textContent).toBe(siteMetadata.author);
  });

  it('renders site description from locale', () => {
    mockApiResult();

    const { getByTestId } = render(<AuthorPresentation />);

    expect(getByTestId('description').textContent).toMatchInlineSnapshot(
      `"Developer, writer in my spare time, tech addicted, open-source lover who believes the only way to transform lives is through education."`,
    );
  });

  it('renders github if received', () => {
    const github = 'https://github.com/raulfdm';

    mockApiResult({
      social: {
        github,
      },
    });

    const { getByTestId } = render(<AuthorPresentation />);

    expect((getByTestId('github-url') as HTMLAnchorElement).href).toBe(github);
  });

  it('renders twitter if received', () => {
    const twitter = 'https://twitter.com/raul_fdm';

    mockApiResult({
      social: {
        twitter,
      },
    });

    const { getByTestId } = render(<AuthorPresentation />);

    expect((getByTestId('twitter-url') as HTMLAnchorElement).href).toBe(
      twitter,
    );
  });

  it('renders linkedIn if received', () => {
    const linkedIn = 'https://www.linkedin.com/in/raulfdm/';

    mockApiResult({
      social: {
        linkedIn,
      },
    });

    const { getByTestId } = render(<AuthorPresentation />);

    expect((getByTestId('linkedIn-url') as HTMLAnchorElement).href).toBe(
      linkedIn,
    );
  });
});
