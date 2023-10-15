export const completeAuthorization = (event, formType) => {
    event.preventDefault();
    if (formType == 'Login') {
        console.log("Пользователь успешно авторизован")
    }
    if (formType == 'Registration') {
        console.log("Пользователь успешно зарегистрирован")
    }
    console.log("Логин: " + event.target.elements.login.value);
    console.log("Пароль: " + event.target.elements.password.value);
}