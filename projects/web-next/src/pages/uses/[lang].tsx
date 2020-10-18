import { GetStaticPaths } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';

import { UsesPage } from '@screens/Uses/UsesPage';
import { SupportedLanguages } from '@types-app';
import { head } from '@utils/utilities';
import { UsesApiData } from '@types-api';
import { Backend } from 'src/services/Backend';
import { mdxComponents } from '@components/MdxComponents';
import { BlogTheme } from '@screens/Blog/BlogTheme';

type Params = {
  params: { lang: SupportedLanguages };
};

type GetStaticPropsReturnType = {
  props: {
    usesMd: RenderToStringReturnType;
    lang: SupportedLanguages;
  };
  revalidate: number;
};

const Uses = (props: GetStaticPropsReturnType['props']) => {
  const content = hydrate(props.usesMd, { components: mdxComponents });

  return (
    <BlogTheme>
      <UsesPage>{content}</UsesPage>
    </BlogTheme>
  );
};

export const getStaticProps = async ({
  params: { lang },
}: Params): Promise<GetStaticPropsReturnType> => {
  const usesMdx = (await Backend.fetch(
    'uses',
    `?language=${lang}`,
  )) as UsesApiData;

  const mdxSource = await renderToString(head(usesMdx).content, {
    components: mdxComponents,
  });

  return {
    props: { usesMd: mdxSource, lang },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          lang: 'en',
        },
      },
      {
        params: {
          lang: 'pt',
        },
      },
    ],
    fallback: false,
  };
};

export default Uses;
