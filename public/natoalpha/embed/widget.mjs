import { translate, validateReferenceCode } from '../phonetics.mjs?v=1';

// BEGIN STYLE LOADER
function attachStyles(element) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = new URL('./widget.css', import.meta.url).href;
  element.shadowRoot.append(link);
}
// END STYLE LOADER

/** Self-hostable, browser-local reference reader. No document-wide listeners. */
export class NATOAlphaSpell extends HTMLElement {
  static observedAttributes = ['code', 'label', 'reference-label'];

  constructor() {
    super();
    this.markedPosition = null;
    const root = this.attachShadow({ mode: 'open' });
    // Only static markup goes into this template. Host values use textContent.
    root.innerHTML = `
      <button class="launcher" type="button" aria-haspopup="dialog">
        <span class="symbol" aria-hidden="true">Aa</span><span class="label"></span>
      </button>
      <span class="error" role="status"></span>
      <dialog aria-labelledby="reader-title" aria-describedby="reader-hint">
        <header>
          <div><p class="reference-label"></p><h2 id="reader-title">Read this code aloud</h2></div>
          <button class="close" type="button" aria-label="Close phonetic guide" autofocus>×</button>
        </header>
        <div class="reference"></div>
        <p id="reader-hint">On a call? Use speakerphone or headphones, then read at your own pace. Tap a row to keep your place.</p>
        <ol aria-label="Phonetic spelling"></ol>
        <footer><span class="position" role="status" aria-live="polite"></span><span>Spelled with NATOAlpha</span></footer>
      </dialog>`;
    this.launcher = root.querySelector('.launcher');
    this.dialog = root.querySelector('dialog');
    this.list = root.querySelector('ol');
    this.closeButton = root.querySelector('.close');
    this.status = root.querySelector('.position');
    this.launcher.addEventListener('click', () => this.open());
    this.closeButton.addEventListener('click', () => this.dialog.close());
    this.dialog.addEventListener('close', () => {
      if (this.isConnected && !this.launcher.disabled) this.launcher.focus();
    });
  }

  connectedCallback() {
    if (!this.stylesReady) { attachStyles(this); this.stylesReady = true; }
    this.refresh();
  }
  disconnectedCallback() { if (this.dialog.open) this.dialog.close(); }
  attributeChangedCallback() { if (this.isConnected) this.refresh(); }

  get code() { return this.getAttribute('code') ?? ''; }
  set code(value) { this.setAttribute('code', value); }

  refresh() {
    const root = this.shadowRoot;
    root.querySelector('.label').textContent = this.getAttribute('label') || 'Spell this code';
    const referenceLabel = this.getAttribute('reference-label') || 'Reference code';
    root.querySelector('.reference-label').textContent = referenceLabel;
    this.markedPosition = null;
    this.list.replaceChildren();
    try {
      const code = validateReferenceCode(this.code);
      this.launcher.disabled = false;
      this.launcher.setAttribute('aria-label', `${this.getAttribute('label') || 'Spell this code'}: ${referenceLabel} ${code}`);
      root.querySelector('.error').textContent = '';
      root.querySelector('.reference').textContent = code;
      for (const token of translate(code)) this.list.append(this.createRow(token));
      this.status.textContent = `${code.length} character${code.length === 1 ? '' : 's'}`;
    } catch (error) {
      this.launcher.disabled = true;
      if (this.dialog.open) this.dialog.close();
      root.querySelector('.reference').textContent = '';
      root.querySelector('.error').textContent = 'Phonetic guide unavailable: provide a code with letters and numbers only (up to 128 characters).';
    }
  }

  createRow(token) {
    const item = document.createElement('li');
    const row = document.createElement('button');
    row.type = 'button';
    row.className = 'row';
    row.setAttribute('aria-pressed', 'false');
    row.setAttribute('aria-label', `Character ${token.position + 1}, ${token.letter}, ${token.word}, say ${token.pronunciation}. Mark your place.`);
    for (const [name, value] of [['letter', token.letter], ['word', token.word], ['sound', token.pronunciation]]) {
      const span = document.createElement('span');
      span.className = name;
      span.textContent = value;
      span.setAttribute('aria-hidden', 'true');
      row.append(span);
    }
    row.addEventListener('click', () => {
      this.markedPosition = this.markedPosition === token.position ? null : token.position;
      this.list.querySelectorAll('button').forEach((button, index) => {
        button.setAttribute('aria-pressed', String(index === this.markedPosition));
      });
      this.status.textContent = this.markedPosition === null
        ? 'Place marker cleared'
        : `Character ${token.position + 1} of ${this.list.children.length}: ${token.word}`;
    });
    item.append(row);
    return item;
  }

  open() {
    // Start every opening from the beginning, including repeated codes.
    this.refresh();
    if (this.launcher.disabled || this.dialog.open) return;
    this.dialog.showModal();
    this.list.scrollTop = 0;
  }
}

if (!customElements.get('nato-spell')) customElements.define('nato-spell', NATOAlphaSpell);
