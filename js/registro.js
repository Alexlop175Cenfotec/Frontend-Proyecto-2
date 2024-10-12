// Función para alternar la visibilidad de las contraseñas
document.getElementById('togglePassword1').addEventListener('click', function () {
    const passwordField = document.getElementById('contrasena');
    const icon = this.querySelector('i');
    // Cambiar entre mostrar y ocultar la contraseña
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});

document.getElementById('togglePassword2').addEventListener('click', function () {
    const passwordField = document.getElementById('confirmarContrasena');
    const icon = this.querySelector('i');
    // Cambiar entre mostrar y ocultar la contraseña
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});
