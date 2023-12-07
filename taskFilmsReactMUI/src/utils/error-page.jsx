import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    if (error.message == "Cannot read properties of undefined (reading 'map')"){
      error.message = 'Ошибка при получении данных! Проверьте правильность введенного токена или повторите позже'
    }

    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  }