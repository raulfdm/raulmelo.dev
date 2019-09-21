import React from 'react';
import PostCard from './PostCard';

export default {
  title: 'PostCard',
};

export const defaultCase = () => (
  <PostCard
    title="Desenvolvedor JavaScript — do Brasil à Europa"
    image="https://picsum.photos/seed/picsum/1400/420"
    description="Ato 7 — A Jornada do Inglês: Parte 3: Inglês na área de…"
  />
);
