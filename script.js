// Initialize EmailJS with your Public Key
(function(){
  emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Replace with your actual public key
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get button and status elements
  const btnText = document.getElementById('btn-text');
  const btnLoading = document.getElementById('btn-loading');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.querySelector('.submit-btn');
  
  // Show loading state
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline';
  submitBtn.disabled = true;
  formStatus.textContent = '';
  
  // Send email using EmailJS
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      
      // Show success message
      formStatus.innerHTML = '<span style="color: #4caf50; font-weight: 600;">✓ Message sent successfully! I\'ll get back to you soon.</span>';
      
      // Reset form
      document.getElementById('contact-form').reset();
      
      // Reset button state
      btnText.style.display = 'inline';
      btnLoading.style.display = 'none';
      submitBtn.disabled = false;
      
    }, function(error) {
      console.log('FAILED...', error);
      
      // Show error message
      formStatus.innerHTML = '<span style="color: #ff6b6b; font-weight: 600;">✗ Failed to send message. Please try again or email me directly.</span>';
      
      // Reset button state
      btnText.style.display = 'inline';
      btnLoading.style.display = 'none';
      submitBtn.disabled = false;
    });
});
