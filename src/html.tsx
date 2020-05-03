import React from 'react';
import { PreRenderHTMLArgs } from 'gatsby';

const GatsbyHTML: React.FC<PreRenderHTMLArgs & { body: string }> = (props) => {
  return (
    <html {...props.htmlAttributes} data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="dark">
        <script
          data-testid="twitter-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                window.twttr = (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0],
                    t = window.twttr || {};
                  if (d.getElementById(id)) return t;
                  js = d.createElement(s);
                  js.id = id;
                  js.src = "https://platform.twitter.com/widgets.js";
                  fjs.parentNode.insertBefore(js, fjs);
                
                  t._e = [];
                  t.ready = function(f) {
                    t._e.push(f);
                  };
                
                  return t;
                }(document, "script", "twitter-wjs"));
              })()
        `,
          }}
        />
        {/* HERE'S THE SCRIPT TO HANDLE THEME :D */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.__onThemeChange = function() {};
                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.body.className = newTheme;
                  window.__onThemeChange(newTheme);
                }
                var preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }
                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }
                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                });
                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();
            `,
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
