NATOAlpha: single-tag spelling widget

Copy only natoalpha.js to your website's public assets. Place this tag wherever
its button should appear, normally beside an existing visible reference:

<script src="/natoalpha.js" data-code="N375B8"></script>

That is the complete integration. No additional markup, imports, CSS, or runtime
packages are required. The file bundles the lookup, styles and accessible reader.
Or load the script from Prajana's public product page:

<script src="https://www.prajana.ai/natoalpha/natoalpha.js" data-code="N375B8"></script>

You may also self-host the file at any public HTTPS asset URL.
The old private
Sites preview URL is not a public CDN. Reference values are data attributes, not
part of the script URL, and are never sent to NATOAlpha.

Options:
  data-code: Required; 1–128 ASCII letters/digits, optional edge whitespace.
  data-reference-label: Optional, e.g. Booking reference or Order number.
  data-label: Optional button text; defaults to Spell this code.
  async or defer: Supported. The button appears immediately after its own script
                 when the file executes. Repeat the script tag for multiple codes.

For dynamic references, update the script's data-code attribute:
  document.querySelector('#booking-spelling').dataset.code = 'AA11359';
Give the script id="booking-spelling" to use that example. Each tag owns its own
button and state. Render scripts through the browser's normal script loading, not
inert HTML inserted with innerHTML. SPAs may create a script element, set its src
and data attributes, then append it beside the reference. On component teardown,
remove both the script and script.natoalphaWidget, the created custom element.

The original module/custom-element integration is also retained in this download:
  phonetics.mjs, embed/widget.mjs, embed/widget.css
<script type="module" src="/natoalpha/embed/widget.mjs"></script>
<nato-spell code="N375B8" reference-label="Booking reference"></nato-spell>
Preserve these relative paths for the module version; the single-file version can
be hosted anywhere independently. Both support changes to the reference code.

Styles are isolated with Shadow DOM. You can theme the created element:
  nato-spell { --natoalpha-accent: #126965; }
For sites with Content Security Policy, permit the script's origin in script-src.
The standalone script embeds CSS: if style-src requires a nonce, supply the same
per-response nonce on the script tag and allow it in style-src. It is copied to
its style element before insertion. The module version uses an external CSS file
for sites that prefer an external stylesheet policy. Do not relax an existing CSP
just to install the widget.

The button opens a native modal dialog on the same page. Close or Escape returns
focus to the button. Tap a row to mark your place; each opening resets the marker.
The guide is silent and does not manage call audio. Use speakerphone or headphones
while reading during a call. It does not acquire a screen wake lock.

Missing or invalid codes disable the button with an explanatory message. Internal
spaces, punctuation, and unsupported characters are rejected rather than silently
changing a reference. Always display the original reference separately so it
remains available without JavaScript. Test your supported browser/device versions;
custom elements, Shadow DOM, MutationObserver, and native dialog are required.

The widget does not use network APIs, analytics, storage, clipboard, microphone,
or call APIs. The static script loads from the URL you configure. All code values
are processed in the customer's browser.

Developers: edit the source modules/styles, then run
  python3 scripts/package-widget.py
from the app repository root. The standalone script and download are generated;
web verification checks they match source.
