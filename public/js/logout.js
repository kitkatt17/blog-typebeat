const logout = async () => {
    const response = await fetch('/js/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // if logout is successful, redirect to login page
        document.location.replace('/login');
    }else{
        alert('Failed to log out.');
    }
};

document.querySelector('#logout').addEventListener('click', logout);