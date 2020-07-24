import React from 'react';

import { SeriesMenu } from '@screens/Blog/components/SeriesMenu';
import { useBlogContext } from '@screens/Blog/hooks/useBlogContext';
import { Divider } from '@screens/Blog/components/MdxComponents/Divider';
import { Container } from 'components/Ui';

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
