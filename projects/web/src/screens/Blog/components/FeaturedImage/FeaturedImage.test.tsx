import React from 'react';
import { render } from '@utils/test';

import { BlogContextProvider } from '@screens/Blog/context';
import { BlogPostContext } from '@screens/Blog/types';
import { mockedImage } from './__mocks__/mockData';
import { FeaturedImage } from '.';

function renderWithContext(contextValues?: Partial<BlogPostContext>) {
  return render(
    <BlogContextProvider
      value={{ image: mockedImage, ...contextValues } as any}
    >
      <FeaturedImage />
    </BlogContextProvider>,
  );
}

describe('<FeaturedImage />', () => {
  it('does not render anything if not receives image', () => {
    const { queryByTestId } = renderWithContext({ image: undefined });
    expect(queryByTestId('featured-image-wrapper')).not.toBeInTheDocument();
  });

  it('renders gatsby image with default alt', () => {
    const { container } = renderWithContext();

    const imgEl = container.querySelector('img[alt="Featured image"]');

    expect(imgEl).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders gatsby image with custom alt', () => {
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

  it('renders img-caption element when send imageCaption', () => {
    const imgCaption = 'This is an awesome image';

    const { getByTestId } = renderWithContext({
      imageCaption: imgCaption,
    });

    const captionEl = getByTestId('featured-img-caption');

    expect(captionEl).toBeInTheDocument();
    expect(captionEl).toHaveTextContent(imgCaption);
  });
});
