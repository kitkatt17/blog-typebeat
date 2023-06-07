const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/js/login', {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/saved/');
        } else {
            alert('Failed to log in.');
        }
    }
};

document
    .querySelector('#login')
    .addEventListener('click', loginFormHandler);