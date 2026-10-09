const emailConfig = {
  publicKey: 'YOUR_PUBLIC_KEY_HERE',
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID'
};

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

  form.addEventListener('submit', function (event) {
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

    const hasEmailjsConfig =
      typeof emailjs !== 'undefined' &&
      typeof emailjs.init === 'function' &&
      emailConfig.publicKey &&
      !emailConfig.publicKey.includes('YOUR_PUBLIC_KEY_HERE') &&
      emailConfig.serviceId &&
      !emailConfig.serviceId.includes('YOUR_SERVICE_ID') &&
      emailConfig.templateId &&
      !emailConfig.templateId.includes('YOUR_TEMPLATE_ID');

    if (!hasEmailjsConfig) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );

      form.reset();
      resetButtonState();
      window.location.href = `mailto:uddhavjoshi93@gmail.com?subject=${subject}&body=${body}`;
      showStatus('Your email app has been opened. If it did not open, email me directly at uddhavjoshi93@gmail.com.');
      return;
    }

    emailjs.init({ publicKey: emailConfig.publicKey });

    emailjs.send(emailConfig.serviceId, emailConfig.templateId, {
      from_name: name,
      reply_to: email,
      message: message
    })
      .then(() => {
        form.reset();
        resetButtonState();
        showStatus('✓ Message sent successfully! I\'ll get back to you soon.');
      })
      .catch((error) => {
        console.error('Failed to send message', error);
        resetButtonState();
        showStatus('✗ Failed to send message. Please try again or email me directly.', true);
      });
  });
});
