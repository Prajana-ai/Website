import { validateReferenceCode } from './phonetics.mjs?v=1';

const buttons = document.querySelectorAll('[data-scenario]');
function showScenario(scenario) {
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.scenario === scenario)));
  document.querySelector('#booking-example').hidden = scenario !== 'booking';
  document.querySelector('#order-example').hidden = scenario !== 'order';
}
buttons.forEach(button => button.addEventListener('click', () => showScenario(button.dataset.scenario)));
document.querySelector('#code-form').addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('#sample-code');
  const status = document.querySelector('#form-status');
  try {
    const code = validateReferenceCode(input.value);
    input.value = code;
    input.removeAttribute('aria-invalid');
    document.querySelector('#booking-code').textContent = code;
    document.querySelector('#booking-widget').dataset.code = code;
    showScenario('booking');
    status.textContent = 'Booking reference updated. Try “Spell this code”.';
  } catch (error) {
    input.setAttribute('aria-invalid', 'true');
    status.textContent = error.message + ' The previous reference is unchanged.';
  }
});
document.querySelector('#copy-snippet').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(document.querySelector('#snippet').textContent);
    status.textContent = 'Integration snippet copied.';
  } catch {
    status.textContent = 'Select and copy the snippet above. Clipboard access is unavailable here.';
  }
});
