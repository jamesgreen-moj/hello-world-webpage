// Get button and message elements
const clickButton = document.getElementById('clickButton');
const messageDiv = document.getElementById('message');

// Add click event listener to button
clickButton.addEventListener('click', function() {
  // Set the message content
  messageDiv.textContent = 'You clicked the button!';
  
  // Show the message by adding visible class
  messageDiv.classList.add('visible');
});
