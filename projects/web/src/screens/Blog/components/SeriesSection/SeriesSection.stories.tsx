import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { SeriesSection } from './SeriesSection';

export default {
  title: 'Blog/SeriesSection',
  component: SeriesSection,
} as Meta;

const seriesProps = {
  serie: {
    id: '5f393dcaeb6c556a2d8efd0f',
    name: 'Desenvolvedor JavaScript: do Brasil à Europa',
    slug: 'desenvolvedor-java-script-do-brasil-a-europa',
    blogPosts: [
      {
        id: '5f40f1d5d511c2380b097b5b',
        slug: 'desenvolvedor-javascript-brasil-europa-ato-1',
        language: 'pt',
        subtitle: 'Prólogo',
        copy: 'Ato 1 - Prólogo',
        uri: '/blog/desenvolvedor-javascript-brasil-europa-ato-1',
      },
      {
        id: '5f40f56fd511c2380b097b63',
        slug: 'desenvolvedor-javascript-brasil-europa-ato-2',
        language: 'pt',
        subtitle: 'Matrix Origins: Onde tudo começou',
        copy: 'Ato 2 - Onde tudo começou',
        uri: '/blog/desenvolvedor-javascript-brasil-europa-ato-2',
      },
      {
        id: '5f40f718d511c2380b097b6a',
        slug: 'desenvolvedor-javascript-brasil-europa-ato-3-parte-1',
        language: 'pt',
        subtitle: 'O que você quer ser quando crescer? Colegial',
        copy: 'Ato 3 - O que você quer ser quando crescer? Parte 1 - Colegial',
        uri: '/blog/desenvolvedor-javascript-brasil-europa-ato-3-parte-1',
      },
      {
        id: '5f40f8f7d511c2380b097b72',
        slug: 'desenvolvedor-javascript-brasil-europa-ato-3-parte-2',
        language: 'pt',
        subtitle: 'O que você quer ser quando crescer? Pós Ensino Médio',
        copy:
          'Ato 3 - O que você quer ser quando crescer? Parte 1 - Pós Ensino Médio',
        uri: '/blog/desenvolvedor-javascript-brasil-europa-ato-3-parte-2',
      },
      {
        id: '5f40fa9dd511c2380b097b79',
        slug: 'desenvolvedor-javascript-brasil-europa-ato-4',
        language: 'pt',
        subtitle: 'Vida universitária e Sistemas de informação',
        copy: 'Ato 4 - Vida universitária e Sistemas de informação',
        uri: '/blog/desenvolvedor-javascript-brasil-europa-ato-4',
      },
      {
        id: '5f41037fd511c2380b097b81',
        slug: 'desenvolvedor-javascript-brasil-europa-ato-5-parte-1',
        language: 'pt',
        subtitle: 'Entrando pra TI: Networking e Entrevista',
        copy: 'Ato 5 - Entrando pra TI - Parte 1 - Networking e Entrevista',
        uri: '/blog/desenvolvedor-javascript-brasil-europa-ato-5-parte-1',
      },
    ],
  },
  currentPostId: '5f40f1d5d511c2380b097b5b',
};

export const defaultCase = () => <SeriesSection {...seriesProps} />;

export const withDivider = () => <SeriesSection divider {...seriesProps} />;
