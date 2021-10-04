export const serverException = (msg) => {
    let exception = {};
    exception.title = "Произошла ошибка";
    exception.message = msg;
    exception.position = "tr";
    exception.autoDismiss = 3;
    return exception;
}
