import React from 'react';
import { PreRenderHTMLArgs } from 'gatsby';

import { twitterScript, themeHandlerScript } from 'config/global-scripts';
import { themeBackgroundColor } from 'styles/globals';

const GatsbyHTML: React.FC<PreRenderHTMLArgs & { body: string }> = (props) => {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content={themeBackgroundColor.light} />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="light">
        <script
          data-testid="twitter-script"
          dangerouslySetInnerHTML={{
            __html: twitterScript,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: themeHandlerScript,
          }}
        />

        {props.preBodyComponents}

        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
};

export default GatsbyHTML;
