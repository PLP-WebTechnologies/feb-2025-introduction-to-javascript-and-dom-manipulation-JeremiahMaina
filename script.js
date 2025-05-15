const form = document.getElementById('myForm');
const toggleFormBtn = document.getElementById('toggleFormBtn');
const formContainer = document.getElementById('formContainer');
const messageDiv = document.getElementById('message');

// Toggle form visibility
toggleFormBtn.addEventListener('click', function() {
    if (formContainer.classList.contains('hidden')) {
        formContainer.classList.remove('hidden');
        toggleFormBtn.textContent = 'Hide Form';
    } else {
        formContainer.classList.add('hidden');
        toggleFormBtn.textContent = 'Show Form';
    }
});

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    if (username === '' || email === '') {
        messageDiv.textContent = 'Please fill out all fields!';
        messageDiv.className = 'error';
    } else {
        messageDiv.textContent = 'Form submitted successfully!';
        messageDiv.className = 'success';
    }
});
