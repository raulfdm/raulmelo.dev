import React from 'react';
import { render } from 'test-utils';

import { Header } from '.';
import { BlogContextProvider } from '../blogContext';
import { BlogPostContext } from '../types';

function renderWithContext(contextValues?: Partial<BlogPostContext>) {
  return render(
    <BlogContextProvider
      value={{ title: 'hey, Im a Title', ...contextValues } as any}
    >
      <Header />
    </BlogContextProvider>,
  );
}

describe('<Header />', () => {
  it('renders element', () => {
    const { getByTestId } = renderWithContext();
    expect(getByTestId('header')).toBeInTheDocument();
  });

  it('renders title', () => {
    const title = 'some title';
    const { getByText } = renderWithContext({ title });

    const titleEl = getByText(title);
    expect(titleEl).toBeInTheDocument();
    expect(titleEl).toMatchInlineSnapshot(`
      .emotion-0 {
        font-size: 34px;
        line-height: 40px;
      }

      @media (min-width:768px) {
        .emotion-0 {
          font-size: 42px;
        }
      }

      <h1
        class="emotion-0"
        data-testid="header-title"
      >
        some title
      </h1>
    `);
  });

  it('does not render subtitle if not received ', () => {
    const { queryByTestId } = renderWithContext();

    expect(queryByTestId('header-subtitle')).not.toBeInTheDocument();
  });

  it('renders subtitle', () => {
    const subtitle = 'some subtitle';
    const { queryByTestId } = renderWithContext({ subtitle });

    const subtitleEl = queryByTestId('header-subtitle');

    expect(subtitleEl).toBeInTheDocument();
    expect(subtitleEl).toMatchInlineSnapshot(`
      .emotion-0 {
        font-size: 24px;
        line-height: 1.22;
        -webkit-letter-spacing: -0.012em;
        -moz-letter-spacing: -0.012em;
        -ms-letter-spacing: -0.012em;
        letter-spacing: -0.012em;
        font-family: 'Open Sans',sans-serif;
        opacity: 0.54;
      }

      @media (min-width:768px) {
        .emotion-0 {
          font-size: 28px;
        }
      }

      <p
        class="emotion-0"
        data-testid="header-subtitle"
      >
        some subtitle
      </p>
    `);
  });
});
