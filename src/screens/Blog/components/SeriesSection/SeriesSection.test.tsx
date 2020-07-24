import React from 'react';
import { render, screen } from '@utils/test';

import { BlogPostContext } from '@screens/Blog/types';
import { BlogContextProvider } from '@screens/Blog/context';
import { SeriesSection } from '.';
import { mockedSeries, mockedSeriesInfo } from './__mocks__/mockedData';

function renderWithContext(
  contextValues?: Partial<BlogPostContext>,
  componentProps = {},
) {
  return render(
    <BlogContextProvider
      value={
        {
          series: mockedSeries,
          seriesInfo: mockedSeriesInfo,
          ...contextValues,
        } as any
      }
    >
      <SeriesSection {...componentProps} />
    </BlogContextProvider>,
  );
}

describe('<SeriesSection />', () => {
  it('does not render anything if series is empty', () => {
    const { queryByTestId } = renderWithContext({ series: undefined });
    expect(queryByTestId('series-section')).not.toBeInTheDocument();
  });

  it('renders series section and series menu', () => {
    renderWithContext();

    expect(screen.getByTestId('series-section')).toBeInTheDocument();
    expect(screen.getByTestId('series-menu')).toBeInTheDocument();
  });

  it('renders divider element by default', () => {
    const { queryByTestId } = renderWithContext();

    expect(queryByTestId('series-section-divider')).toBeInTheDocument();
  });

  it('does not render divider when receive noDivider', () => {
    const { queryByTestId } = renderWithContext(undefined, { noDivider: true });

    expect(queryByTestId('series-section-divider')).not.toBeInTheDocument();
  });
});
