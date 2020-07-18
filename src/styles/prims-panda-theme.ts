import { css } from 'styles/styled';

export const pandaPrismStyles = css`
  /*
	Name:       Panda Syntax
	Author:     Siamak Mokhtari (http://github.com/siamak/)
	Panda syntax for Prism theme by Siamak Mokhtari (https://github.com/siamak/atom-panda-syntax)
*/

  html {
    --prism-black: #292a2b;
    --prism-yellow: #d9d336;
    --prism-orange: #ffb86c;
    --prism-gray-light: #e6e6e6;
    --prism-gray: #676b79;
    --prism-gray-dark: #5b5d5f;
    --prism-blue: #45a9f9;
    --prism-blue-green: #19f9d8;
    --prism-rosy: #ff75b5;
    --prism-pink: #ff4b82;
    --prism-font-family: 'Fira Code', 'Operator Mono', 'Source Sans Pro', Menlo,
      Monaco, Consolas, Courier New, monospace;
  }

  .gatsby-highlight {
    position: relative;
  }

  code[class*='language-'],
  pre[class*='language-'],
  .gatsby-code-title {
    background: var(--prism-black);
    color: var(--prism-gray-light);
    font-family: var(--prism-font-family);
    direction: ltr;
    text-align: left;
    word-spacing: normal;
    white-space: pre;
    word-wrap: normal;
    line-height: 1.5;
    background: 0 0;
    border: 0;
    tab-size: 4;
    hyphens: none;
    font-size: 0.8rem;
    width: 100%;
  }

  pre[class*='language-'] code {
    float: left;
  }

  pre[class*='language-'],
  :not(pre) > code[class*='language-'] {
    background: var(--prism-black);
  }

  pre[class*='language-'] {
    padding: 1rem;
    padding-top: 1.5rem;
    overflow: auto;
    border-radius: 3px;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    line-height: inherit;
    padding: 2px 5px;
    border-radius: 3px;
    word-break: break-all;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    font-style: italic;
    color: var(--prism-gray);
  }

  .token.selector,
  .token.operator,
  .token.punctuation {
    color: var(--prism-gray-light);
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.tag,
  .token.boolean {
    color: var(--prism-orange);
  }

  .token.atrule,
  .token.attr-value,
  .token.hex,
  .token.string {
    color: var(--prism-blue-green);
  }

  .token.property,
  .token.entity,
  .token.url,
  .token.attr-name,
  .token.keyword {
    color: var(--prism-rosy);
  }

  .token.regex {
    color: var(--prism-blue-green);
  }

  .token.function,
  .token.class-name {
    color: var(--prism-blue);
  }

  .token.constant {
    color: var(--prism-rosy);
  }

  .token.variable {
    color: var(--prism-rosy);
  }

  .token.number {
    color: var(--prism-blue-green);
  }

  .token.important,
  .token.deliminator {
    color: var(--prism-pink);
  }

  pre[data-line] {
    position: relative;
    padding: 1em 0 1em 3em;
  }

  .line-highlight {
    position: absolute;
    left: 0;
    right: 0;
    margin-top: 1em;
    background: rgba(255, 255, 255, 0.2);
    pointer-events: none;
    line-height: inherit;
    white-space: pre;
  }

  .line-highlight:before,
  .line-highlight[data-end]:after {
    content: attr(data-start);
    position: absolute;
    top: 0.3em;
    left: 0.6em;
    min-width: 1em;
    padding: 0 0.5em;
    background-color: rgba(255, 255, 255, 0.3);
    color: #fff;
    font: 700 65%/1.5 sans-serif;
    text-align: center;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    text-shadow: none;
  }

  .line-highlight[data-end]:after {
    content: attr(data-end);
    top: auto;
    bottom: 0.4em;
  }

  .line-numbers-rows {
    margin: 0;
  }

  .line-numbers-rows span {
    padding-right: 10px;
    border-right: 3px var(--prism-yellow) solid;
  }

  .gatsby-highlight-code-line {
    background-color: var(--prism-gray-dark);
    display: block;
    margin-right: -1rem;
    margin-left: -1rem;
    padding-left: 0.75em;
    border-left: 0.25em solid var(--prism-rosy);
  }

  /* Styles for File name */
  .gatsby-code-title {
    padding: 0.5rem 1rem;
    background-color: var(--prism-black);
    font-size: 0.75rem;
    border-bottom: 1px solid rgb(217, 215, 224, 0.2);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .gatsby-code-title + .gatsby-highlight pre {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  /* End:Styles for File name */

  /* Styles for Language label */
  .gatsby-highlight pre[class*='language-']::before {
    background: #d9d7e0;
    border-radius: 0px 0px 4px 4px;
    color: #232129;
    font-size: 0.65rem;
    font-family: var(--prism-font-family);
    letter-spacing: 0.045em;
    line-height: 1;
    padding: 0.25rem 0.5rem;
    position: absolute;
    left: 1.5rem;
    text-align: right;
    text-transform: uppercase;
    top: 0px;
  }

  .gatsby-code-title + .gatsby-highlight pre[class*='language-']::before {
    top: -1px;
  }

  .gatsby-highlight pre[class='language-javascript']::before,
  .gatsby-highlight pre[class='language-js']::before {
    content: 'js';
    background: #f7df1e;
  }

  .gatsby-highlight pre[class='language-jsx']::before {
    content: 'jsx';
    background: #61dafb;
  }

  .gatsby-highlight pre[class='language-typescript']::before,
  .gatsby-highlight pre[class='language-ts']::before,
  .gatsby-highlight pre[class='language-tsx']::before {
    content: 'ts';
    background: #294e80;
    color: white;
  }

  .gatsby-highlight pre[class='language-tsx']::before {
    content: 'tsx';
  }

  .gatsby-highlight pre[class='language-graphql']::before {
    content: 'GraphQL';
    background: #e10098;
    color: white;
  }

  .gatsby-highlight pre[class='language-html']::before {
    content: 'html';
    background: #005a9c;
    color: white;
  }

  .gatsby-highlight pre[class='language-css']::before {
    content: 'css';
    background: #ff9800;
    color: white;
  }

  .gatsby-highlight pre[class='language-mdx']::before {
    content: 'mdx';
    background: #f9ac00;
    color: white;
  }

  .gatsby-highlight pre[class='language-shell']::before {
    content: 'shell';
  }

  .gatsby-highlight pre[class='language-sh']::before {
    content: 'sh';
  }

  .gatsby-highlight pre[class='language-bash']::before {
    content: 'bash';
  }

  .gatsby-highlight pre[class='language-yaml']::before,
  .gatsby-highlight pre[class='language-yml']::before {
    content: 'yaml';
    background: #ffa8df;
  }

  .gatsby-highlight pre[class='language-markdown']::before {
    content: 'md';
  }

  .gatsby-highlight pre[class='language-json']::before,
  .gatsby-highlight pre[class='language-json5']::before {
    content: 'json';
    background: linen;
  }

  .gatsby-highlight pre[class='language-diff']::before {
    content: 'diff';
    background: #e6ffed;
  }

  .gatsby-highlight pre[class='language-text']::before {
    content: 'text';
    background: white;
  }

  .gatsby-highlight pre[class='language-flow']::before {
    content: 'flow';
    background: #e8bd36;
  }
  /* End:Styles for Language label */
`;
