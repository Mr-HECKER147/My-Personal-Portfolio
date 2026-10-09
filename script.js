document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const btnText = document.getElementById('btn-text');
  const btnLoading = document.getElementById('btn-loading');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.querySelector('.submit-btn');

  const showStatus = (message, isError = false) => {
    formStatus.innerHTML = `<span style="color: ${isError ? '#ff6b6b' : '#4caf50'}; font-weight: 600;">${message}</span>`;
  };

  const resetButtonState = () => {
    btnText.style.display = 'inline';
    btnLoading.style.display = 'none';
    submitBtn.disabled = false;
  };

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = form.from_name.value.trim();
    const email = form.reply_to.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showStatus('Please complete all fields before sending your message.', true);
      return;
    }

    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    submitBtn.disabled = true;
    formStatus.textContent = '';

    const payload = new FormData(form);
    payload.set('_subject', `Portfolio contact from ${name}`);
    payload.set('_captcha', 'false');
    payload.set('_template', 'table');
    payload.set('_replyto', email);
    payload.set('from_name', name);
    payload.set('reply_to', email);

    try {
      const response = await fetch('https://formsubmit.co/ajax/uddhavjoshi93@gmail.com', {
        method: 'POST',
        body: payload,
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      resetButtonState();
      showStatus('✓ Message sent successfully! I\'ll get back to you soon.');
    } catch (error) {
      console.error('Failed to send message', error);
      resetButtonState();
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:uddhavjoshi93@gmail.com?subject=${subject}&body=${body}`;
      showStatus('Your email app has been opened. If it did not open, email me directly at uddhavjoshi93@gmail.com.');
    }
  });
});
