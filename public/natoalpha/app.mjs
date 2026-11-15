import { sanitize, translate } from './phonetics.mjs';

const field = document.querySelector('#code');
const list = document.querySelector('#translation');
const shell = document.querySelector('.demo-shell');
const status = document.querySelector('#demo-status');
let marked = null;
let reading = false;

function render() {
  const tokens = translate(field.value);
  list.replaceChildren();
  document.querySelector('#count').textContent = `${tokens.length} character${tokens.length === 1 ? '' : 's'}`;
  document.querySelector('#empty').hidden = tokens.length > 0;
  document.querySelector('#call-view').disabled = tokens.length === 0;
  tokens.forEach(token => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'token';
    button.setAttribute('aria-pressed', String(marked === token.position));
    button.setAttribute('aria-label', `Character ${token.position + 1}, ${token.letter}, ${token.word}, say ${token.pronunciation}. Mark your place.`);
    [['letter', token.letter], ['word', token.word], ['sound', token.pronunciation]].forEach(([name, value]) => {
      const span = document.createElement('span'); span.className = name; span.textContent = value; span.setAttribute('aria-hidden', 'true'); button.append(span);
    });
    button.addEventListener('click', () => {
      marked = marked === token.position ? null : token.position;
      // Preserve focused controls and scroll position when marking a row.
      list.querySelectorAll('.token').forEach((row, index) => row.setAttribute('aria-pressed', String(index === marked)));
      status.textContent = marked === null ? 'Place marker cleared.' : `Marked character ${token.position + 1}, ${token.word}.`;
    });
    li.append(button); list.append(li);
  });
}

field.addEventListener('input', () => {
  const cursor = field.selectionStart ?? field.value.length;
  const nextCursor = sanitize(field.value.slice(0, cursor)).length;
  field.value = sanitize(field.value);
  field.setSelectionRange(nextCursor, nextCursor);
  marked = null; list.scrollTop = 0; render();
});
field.addEventListener('keydown', event => { if (event.key === 'Enter') field.blur(); });
document.querySelector('#clear').addEventListener('click', () => {
  field.value = ''; marked = null; reading = false;
  shell.classList.remove('call-view'); document.querySelector('#call-view').setAttribute('aria-pressed', 'false');
  document.querySelector('#demo-note').textContent = 'Tap a row to keep your place.';
  render(); field.focus();
});
document.querySelectorAll('[data-code]').forEach(button => button.addEventListener('click', () => {
  field.value = button.dataset.code; marked = null; list.scrollTop = 0; render();
  status.textContent = `Example code ${field.value}.`;
}));
document.querySelector('#call-view').addEventListener('click', event => {
  reading = !reading; field.blur(); shell.classList.toggle('call-view', reading);
  event.currentTarget.setAttribute('aria-pressed', String(reading));
  document.querySelector('#demo-note').textContent = reading ? 'Read aloud at your own pace. Tap a row to keep your place.' : 'Tap a row to keep your place.';
  status.textContent = reading ? 'Call view on. Larger words and pronunciations.' : 'Call view off.';
});
render();
