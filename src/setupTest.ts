/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom';
import 'jest-styled-components';

/**
 * This workaround solves rendering `gatsby/Link` on test env.
 * https://github.com/gatsbyjs/gatsby/issues/19898#issuecomment-568268318
 */
// @ts-ignore
window.___loader = { enqueue: () => {}, hovering: () => {} };

/**
 * This is related to `ts-jest`
 */
// @ts-ignore
window.__BASE_PATH__ = '';
