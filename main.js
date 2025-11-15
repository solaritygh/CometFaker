// ==UserScript==
// @name         CometFaker
// @namespace    https://github.com/solaritygh/CometFaker
// @version      2025-11-15
// @description  Fake use of the Perplexity Comet browser.
// @author       solaritygh
// @match        https://*.crazygames.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=crazygames.com
// @grant        none
// ==/UserScript==

'use strict';
(function () {
  Object.defineProperty(document, 'cookie', {
    get() {
      return 'cpa=1; other=test';
    },
    configurable: true
  });
})();
