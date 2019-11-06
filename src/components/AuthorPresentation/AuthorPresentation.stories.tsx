import React from 'react';
import AuthorPresentation from './AuthorPresentation';

export default {
  title: 'AuthorPresentation',
};

export const defaultCase = () => (
  <AuthorPresentation
    name="Raul de Melo"
    profilePic="https://miro.medium.com/fit/c/256/256/1*6jtMoNvX_MHslzBLP4aM9g.jpeg"
    synopsis="Developer, passionate about coding for fun, tech addicted and open-source lover ❤"
    twitter="https://twitter.com/raul_fdm"
    linkedIn=""
    github=""
  />
);
