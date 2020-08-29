import React from 'react';
import { render, screen, userEvent } from '@utils/test';

import { SeriesSection } from '.';
import { mockedSerie } from './__mocks__/mockedData';

function renderWithContext(props?: any) {
  return render(
    <SeriesSection
      serie={mockedSerie}
      currentPostId="5f39594b20f7cd7565227f98"
      divider
      {...props}
    />,
  );
}

describe('<SeriesSection />', () => {
  it('does not render anything if series is empty', () => {
    const { queryByTestId } = renderWithContext({ serie: undefined });
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

  it('renders series collapsed by default', () => {
    const { queryByTestId } = renderWithContext();

    expect(queryByTestId('series-post-list')).toHaveStyle(
      'opacity: 0; height: 0px;',
    );
  });

  it('renders series posts when click to expand', async () => {
    const { queryByRole, getAllByRole, getByTestId } = renderWithContext();

    await userEvent.click(getByTestId('expand-button'));

    expect(queryByRole('list')).toBeInTheDocument();
    expect(getAllByRole('listitem')).toHaveLength(2);
  });

  it('add active class when is the current post', async () => {
    const { queryByTestId, getByTestId } = renderWithContext();

    await userEvent.click(getByTestId('expand-button'));

    expect(queryByTestId('post_' + '5f39594b20f7cd7565227f98')).toHaveClass(
      'active',
    );
  });

  it('does not render divider when receive noDivider', () => {
    const { queryByTestId } = renderWithContext({ divider: false });

    expect(queryByTestId('series-section-divider')).not.toBeInTheDocument();
  });
});
