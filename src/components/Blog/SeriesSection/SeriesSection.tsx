import React from 'react';

import { Container } from 'components/Ui';
import { SeriesMenu } from '../SeriesMenu';
import { useBlogContext } from '../blogContext';
import { Divider } from 'components/MdxComponents/Divider';

interface SeriesSection {
  noDivider?: boolean;
}

export const SeriesSection = ({ noDivider = false }: SeriesSection) => {
  const { series, seriesInfo, title } = useBlogContext();

  return series ? (
    <>
      {!noDivider && <Divider data-testid="series-section-divider" />}
      <Container data-testid="series-section" as="section">
        <SeriesMenu
          series={series}
          postIndex={seriesInfo!.index}
          title={title}
        />
      </Container>
    </>
  ) : null;
};
