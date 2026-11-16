const chat = document.querySelector('#chat');
const replies = {
  'My AC is blowing warm air': 'Got it. Is the system running but blowing warm air, or is it not turning on at all?',
  'I need a new system': 'We can help scope that. What matters most right now: lower energy use, a quieter system, or replacing an aging unit?',
  'This may be urgent': 'Thanks for flagging it. If you see smoke, exposed wiring, flooding, or immediate danger, stop using the system and contact emergency services. Otherwise, a human coordinator should review this next.'
};
document.querySelectorAll('[data-reply]').forEach((button) => button.addEventListener('click', () => {
  const text = button.dataset.reply;
  chat.insertAdjacentHTML('beforeend', `<div class="bubble user">${text}</div><div class="bubble assistant">${replies[text]}</div>`);
  chat.scrollTop = chat.scrollHeight;
}));
document.querySelector('#booking-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(event.currentTarget).get('name');
  document.querySelector('#form-result').textContent = `Thanks, ${name || 'there'} — your request is captured for the demo. A human coordinator would confirm the next step.`;
});
