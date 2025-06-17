document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('wrapper');
    const rememberCheckbox = document.getElementById('remember');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Проверяем, есть ли сохраненные данные в localStorage
    if (localStorage.getItem('remember') === 'true') {
        usernameInput.value = localStorage.getItem('username') || '';
        passwordInput.value = localStorage.getItem('password') || '';
        rememberCheckbox.checked = true;
    } else {
        // Если "Remember me" не активирован - очищаем поля при загрузке
        usernameInput.value = '';
        passwordInput.value = '';
    }

    // Обработка отправки формы
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;
        const remember = rememberCheckbox.checked;

        if (remember) {
            // Сохраняем данные в localStorage, если галочка стоит
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('remember', 'true');
        } else {
            // Удаляем данные, если галочка не стоит
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            localStorage.removeItem('remember');
        }

        alert('Login successful!');
        // Здесь можно добавить перенаправление на другую страницу
    });

    // Очищаем поля при обновлении страницы, если "Remember me" не активен
    window.addEventListener('beforeunload', function() {
        if (localStorage.getItem('remember') !== 'true') {
            usernameInput.value = '';
            passwordInput.value = '';
        }
    });
});