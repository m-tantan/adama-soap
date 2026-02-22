1. I'd like to edit the feed for Behold. We're replacing it with a JSON feed, and this is the link for the feed: <https://feeds.behold.so/E4NKLuEs4wUnBsOc9pl1>. Find the behold section in the main page and add a carousel effect so that we can only show up to three items at a time and users can scroll to the right and to the left and to reduce CPU if the tab is not active obviously stop the animation. Let's have this auto rotate every three seconds we should automatically scroll to the next image so that the gallery would be visible.
2. PayPal Button cleanup:
   - Remove the checkout button from PayPal widget (keep only PayPal button) using document.getElementById
   - Remove the "Adamasoap" title from the PayPal widget (already shown on page)
   - Remove the price from the PayPal widget (already shown on page)
   - Move PayPal button to be directly underneath the product price section
3. Configure VS Code F5 launch: add a `.vscode/launch.json` (and `tasks.json`) so that pressing F5 automatically runs `npm run dev` and opens the dev server.
4. In the home page,under the out story section, remove the "why" both from localized German and in English. Just remove that element and bring the two paragraphs closer together.
5. In the product pages and the German localization, the soap product name is accidentally localized as well. Let's leave it as is. So Calm should be used in German even though it's not translated, as well as the Sunny Sage product.
6.  I've added a new image. It's an SVG. Let's replace the icon and the navigation bar with this SVG for better resolution. public/adama-svg-logo.svg