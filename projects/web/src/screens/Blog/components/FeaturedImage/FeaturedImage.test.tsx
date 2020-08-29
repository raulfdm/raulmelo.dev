/* eslint-disable jest/no-disabled-tests */
import React from 'react';
import { render } from '@utils/test';

import { mockedImage } from './__mocks__/mockData';
import { FeaturedImage } from '.';

function renderWithContext(props?: any) {
  return render(
    <FeaturedImage fluid={mockedImage.childImageSharp.fluid} {...props} />,
  );
}

describe('<FeaturedImage />', () => {
  it('does not render anything if not receives image', () => {
    const { queryByTestId } = renderWithContext({ fluid: undefined });
    expect(queryByTestId('featured-image-wrapper')).not.toBeInTheDocument();
  });

  it('renders gatsby image with default alt', () => {
    const { container } = renderWithContext();

    const imgEl = container.querySelector('img[alt="Featured image"]');

    expect(imgEl).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  /* TODO: fix this when fix imgCaption */
  it.skip('renders gatsby image with custom alt', () => {
    const imgCaption = 'This is an awesome image';

    const { container } = renderWithContext({
      imageCaption: imgCaption,
    });

    const imgEl = container.querySelector(`img[alt="${imgCaption}"]`);

    expect(imgEl).toBeInTheDocument();
  });

  it('does not render imageCaption element when not receive "imageCaption"', () => {
    const { queryByTestId } = renderWithContext();

    const captionEl = queryByTestId('featured-img-caption');

    expect(captionEl).not.toBeInTheDocument();
  });

  /* TODO: fix this when fix imgCaption */
  it.skip('renders img-caption element when send imageCaption', () => {
    const imgCaption = 'This is an awesome image';

    const { getByTestId } = renderWithContext({
      imageCaption: imgCaption,
    });

    const captionEl = getByTestId('featured-img-caption');

    expect(captionEl).toBeInTheDocument();
    expect(captionEl).toHaveTextContent(imgCaption);
  });
});
