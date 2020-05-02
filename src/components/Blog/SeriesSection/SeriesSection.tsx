import React from 'react';

import { Container } from 'components/Ui';
import { SeriesMenu } from '../SeriesMenu';
import { useBlogContext } from '../blogContext';

interface SeriesSection {
  noDivider?: boolean;
}

export const SeriesSection = ({ noDivider = false }: SeriesSection) => {
  const { series, seriesInfo, title } = useBlogContext();

  return series ? (
    <>
      {!noDivider && <hr data-testid="series-section-divider" />}
      <Container as="section" data-testid="series-section">
        <SeriesMenu
          series={series}
          postIndex={seriesInfo!.index}
          title={title}
        />
      </Container>
    </>
  ) : null;
};
