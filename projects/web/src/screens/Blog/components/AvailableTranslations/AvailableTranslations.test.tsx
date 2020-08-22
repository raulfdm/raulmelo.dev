import React from 'react';

import { render, screen } from '@utils/test';
import { useBlogContext } from '@screens/Blog/hooks/useBlogContext';
import { AvailableTranslations } from '.';

jest.mock('@screens/Blog/context');
jest.mock('@screens/Blog/hooks/useBlogContext');

const mockedUseBlogContext = useBlogContext as jest.Mock;

describe('<AvailableTranslations />', () => {
  it('does not render anything if translation is null, undefined or empty object', () => {
    mockedUseBlogContext
      .mockReturnValue({ translation: null } as any)
      .mockReturnValueOnce({ translation: undefined })
      .mockReturnValueOnce({ translation: {} });

    render(<AvailableTranslations />);

    expect(
      screen.queryByTestId('blog-available-translations'),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByTestId('blog-available-translations'),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByTestId('blog-available-translations'),
    ).not.toBeInTheDocument();
  });

  it('renders link for the translation', () => {
    mockedUseBlogContext.mockReturnValue({
      translation: { language: 'pt', postUri: '/post' },
    } as any);
    render(<AvailableTranslations />);

    const linkEl = screen.queryByTestId('blog-available-translations-link');

    expect(linkEl).toBeInTheDocument();
    expect(linkEl).toMatchInlineSnapshot(`
      @media (min-width:768px) {

      }

      <a
        data-testid="blog-available-translations-link"
        href="/post"
      >
        Portuguese
      </a>
    `);
  });
});
