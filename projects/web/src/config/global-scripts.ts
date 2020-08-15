/* eslint-disable */
// @ts-nocheck

function loadTwitter() {
  window.twttr = (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
      t._e.push(f);
    };

    return t;
  })(document, 'script', 'twitter-wjs');
}

function themeHandler() {
  window.__onThemeChange = function () {};
  function setTheme(newTheme) {
    window.__theme = newTheme;
    preferredTheme = newTheme;
    document.body.className = newTheme;
    window.__onThemeChange(newTheme);
  }
  var preferredTheme;
  try {
    preferredTheme = localStorage.getItem('theme');
  } catch (err) {}
  window.__setPreferredTheme = function (newTheme) {
    setTheme(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (err) {}
  };
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkQuery.addListener(function (e) {
    window.__setPreferredTheme(e.matches ? 'dark' : 'light');
  });
  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
}

export const twitterScript = `(${loadTwitter.toString()})()`;

export const themeHandlerScript = `(${themeHandler.toString()})()`;
