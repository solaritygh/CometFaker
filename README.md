# CometFaker
A tampermonkey script that fakes using the comet browser on CrazyGames.

## Introduction
Crazygames decided to make some games on their website require usage of Perplexity's Comet browser despite not needing the browser. Comet is an AI browser, and since I dislike AI I decided to bypass it.

## How does this work?
After digging around in the obfuscated Javascript that CrazyGames uses, apparently if you are using the Perplexity browser and are on a website that is sponsored by Perplexity (such as CrazyGames) it makes a cookie called "cpa." I cannot verify that this cookie is the same name on other websites that detect Perplexity.

## How do I install?
1. Install TamperMonkey ([Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)/[Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/))
2. You can press [here](https://github.com/solaritygh/CometFaker/raw/refs/heads/main/main.user.js) to install the script using Tampermonkey.
3. Alternatively, if for any reason Step 2 doesn't work, press `main.user.js`, and press the `Raw` button.
